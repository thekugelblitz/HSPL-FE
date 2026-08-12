'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function WarpStreaks() {
    const streakCount = 800
    const pointsRef = useRef<THREE.Points>(null)

    const geometry = useMemo(() => {
        const positions = []
        const speeds = []
        for (let i = 0; i < streakCount; i++) {
            const angle = Math.random() * Math.PI * 2
            const radius = Math.random() * 800 + 200
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            const z = Math.random() * -2000

            positions.push(x, y, z)
            speeds.push(Math.random() * 5 + 5)
        }

        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
        geo.setAttribute('speed', new THREE.Float32BufferAttribute(speeds, 1))

        return geo
    }, [])

    useFrame(() => {
        const positions = geometry.attributes.position.array as Float32Array
        const speeds = geometry.attributes.speed.array as Float32Array

        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 2] += speeds[i / 3] // Move along Z
            if (positions[i + 2] > 0) {
                positions[i + 2] = -2000 // Reset behind camera
            }
        }

        geometry.attributes.position.needsUpdate = true
    })

    return (
        <points ref={pointsRef} geometry={geometry}>
            <pointsMaterial
                color="#00bfff"
                size={4}
                sizeAttenuation
                transparent
                depthWrite={false}
            />
        </points>
    )
}

export default function WarpTunnelBackground() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
                <WarpStreaks />
            </Canvas>
        </div>
    )
}
