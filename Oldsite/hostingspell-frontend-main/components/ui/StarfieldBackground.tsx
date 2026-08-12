'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function Stars() {
    const starCount = 1000
    const geometryRef = useRef<THREE.Points>(null)

    const starGeometry = useMemo(() => {
        const positions = []
        for (let i = 0; i < starCount; i++) {
            positions.push(
                (Math.random() - 0.5) * 2000,
                (Math.random() - 0.5) * 2000,
                Math.random() * -2000
            )
        }

        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3)
        )

        return geometry
    }, [])

    useFrame(() => {
        if (geometryRef.current) {
            geometryRef.current.rotation.z += 0.0005
            geometryRef.current.position.z += 10
            if (geometryRef.current.position.z > 0) {
                geometryRef.current.position.z = -2000
            }
        }
    })

    return (
        <points ref={geometryRef} geometry={starGeometry}>
            <pointsMaterial
                color="#00bfff"
                size={1.5}
                sizeAttenuation
                transparent
            />
        </points>
    )
}

export default function StarfieldBackground() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
                <Stars />
            </Canvas>
        </div>
    )
}
