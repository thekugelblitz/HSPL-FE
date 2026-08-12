'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'

const LINE_COUNT = 600
const BURST_AFTER = 4 // seconds
const MAX_SPEED = 20
const MIN_SPEED = 1

function HyperspaceLines() {
    const linesRef = useRef<THREE.LineSegments>(null)
    const startTime = useRef<number | null>(null)

    const { geometry, material } = useMemo(() => {
        const positions: number[] = []
        const speeds: number[] = []

        for (let i = 0; i < LINE_COUNT; i++) {
            const angle = Math.random() * Math.PI * 2
            const radius = Math.random() * 1000
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            const z = Math.random() * -2000

            const length = Math.random() * 30 + 20
            const endZ = z + length

            positions.push(x, y, z, x, y, endZ)
            speeds.push(Math.random() * 10 + 5)
        }

        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
        geometry.setAttribute('speed', new THREE.Float32BufferAttribute(speeds, 1))

        const material = new THREE.LineBasicMaterial({
            color: new THREE.Color(0xffffff), // Will fade from white ➜ blue
            transparent: true,
            opacity: 0.3, // Will ramp up
        })

        return { geometry, material }
    }, [])

    useFrame(({ clock }) => {
        if (startTime.current === null) startTime.current = clock.getElapsedTime()
        const elapsed = clock.getElapsedTime() - startTime.current

        const t = Math.min(elapsed / BURST_AFTER, 1) // normalized progress
        const currentSpeed = MIN_SPEED + (MAX_SPEED - MIN_SPEED) * t
        const currentColor = new THREE.Color().lerpColors(
            new THREE.Color(0xffffff), // white
            new THREE.Color(0x00bfff), // blue
            t
        )
        material.color = currentColor
        material.opacity = 0.3 + 0.5 * t // fade in brightness

        const pos = geometry.attributes.position.array as Float32Array

        for (let i = 0; i < pos.length; i += 6) {
            pos[i + 2] += currentSpeed
            pos[i + 5] += currentSpeed

            if (pos[i + 2] > 0) {
                const angle = Math.random() * Math.PI * 2
                const radius = Math.random() * 1000
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                const z = -2000
                const length = Math.random() * 30 + 20
                const endZ = z + length

                pos[i] = x
                pos[i + 1] = y
                pos[i + 2] = z
                pos[i + 3] = x
                pos[i + 4] = y
                pos[i + 5] = endZ
            }
        }

        geometry.attributes.position.needsUpdate = true
    })

    return <lineSegments ref={linesRef} geometry={geometry} material={material} />
}

export default function HyperspaceBackground() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
                <HyperspaceLines />
            </Canvas>
        </div>
    )
}
