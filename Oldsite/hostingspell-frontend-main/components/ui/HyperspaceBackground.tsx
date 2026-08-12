'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useTheme } from 'next-themes'
import * as THREE from 'three'
import { useMemo, useRef, useState, useEffect } from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

const LINE_COUNT = 600
const BURST_AFTER = 4
const BASE_MAX_SPEED = 10
const BOOSTED_MAX_SPEED = 25
const MIN_SPEED = 1

function HyperspaceLines({ isHolding }: { isHolding: boolean }) {
    const linesRef = useRef<THREE.LineSegments>(null)
    const startTime = useRef<number | null>(null)
    const { theme } = useTheme()

    const maxSpeed = useRef(BASE_MAX_SPEED)

    const geometry = useMemo(() => {
        const positions: number[] = []
        const baseLengths: number[] = []

        for (let i = 0; i < LINE_COUNT; i++) {
            const angle = Math.random() * Math.PI * 2
            const radius = Math.random() * 1000
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            const z = Math.random() * -2000
            const length = Math.random() * 30 + 20

            // Start + End positions
            positions.push(x, y, z, x, y, z) // Initially a dot
            baseLengths.push(length)
        }

        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
        geo.setAttribute('baseLength', new THREE.Float32BufferAttribute(baseLengths, 1))
        return geo
    }, [])

    const material = useMemo(() => {
        return new THREE.LineBasicMaterial({
            color: new THREE.Color(0xffffff), // starts as white
            transparent: true,
            opacity: 0, // fade in
        })
    }, [])

    useFrame(({ clock }) => {
        if (startTime.current === null) startTime.current = clock.getElapsedTime()
        const elapsed = clock.getElapsedTime() - startTime.current
        const t = Math.min(elapsed / BURST_AFTER, 1)

        const targetSpeed = isHolding ? BOOSTED_MAX_SPEED : BASE_MAX_SPEED
        maxSpeed.current += (targetSpeed - maxSpeed.current) * 0.05
        const currentSpeed = MIN_SPEED + (maxSpeed.current - MIN_SPEED) * t

        // Handle opacity and color transition
        material.opacity = t * (theme === 'dark' ? 0.8 : 0.4)

        // In dark mode, blend white → blue as t increases
        if (theme === 'dark') {
            const color = new THREE.Color().lerpColors(
                new THREE.Color(0xffffff), // white start
                new THREE.Color(0x00bfff), // blue end
                t
            )
            material.color = color
        } else {
            material.color = new THREE.Color(0x666666) // stay gray in light mode
        }

        const pos = geometry.attributes.position.array as Float32Array
        const baseLength = geometry.attributes.baseLength.array as Float32Array

        for (let i = 0; i < pos.length; i += 6) {
            pos[i + 2] += currentSpeed
            pos[i + 5] += currentSpeed

            // stretch line based on t
            const x = pos[i]
            const y = pos[i + 1]
            const z = pos[i + 2]
            const length = baseLength[i / 6] * t
            const endZ = z + length

            pos[i + 3] = x
            pos[i + 4] = y
            pos[i + 5] = endZ

            // reset when past view
            if (z > 0) {
                const angle = Math.random() * Math.PI * 2
                const radius = Math.random() * 1000
                const newX = Math.cos(angle) * radius
                const newY = Math.sin(angle) * radius
                const newZ = -2000
                const newLength = Math.random() * 30 + 20

                pos[i] = newX
                pos[i + 1] = newY
                pos[i + 2] = newZ
                pos[i + 3] = newX
                pos[i + 4] = newY
                pos[i + 5] = newZ // will stretch again in next frame
                baseLength[i / 6] = newLength
            }
        }

        geometry.attributes.position.needsUpdate = true
    })

    return <lineSegments ref={linesRef} geometry={geometry} material={material} />
}


export default function HyperspaceBackground() {
    const [isHolding, setIsHolding] = useState(false)

    useEffect(() => {
        const handleDown = () => setIsHolding(true)
        const handleUp = () => setIsHolding(false)

        window.addEventListener('mousedown', handleDown)
        window.addEventListener('mouseup', handleUp)
        window.addEventListener('touchstart', handleDown)
        window.addEventListener('touchend', handleUp)

        return () => {
            window.removeEventListener('mousedown', handleDown)
            window.removeEventListener('mouseup', handleUp)
            window.removeEventListener('touchstart', handleDown)
            window.removeEventListener('touchend', handleUp)
        }
    }, [])

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
                <HyperspaceLines isHolding={isHolding} />
                <EffectComposer>
                    <Bloom intensity={1.5} luminanceThreshold={0.2} />
                </EffectComposer>
            </Canvas>
        </div>
    )
}
