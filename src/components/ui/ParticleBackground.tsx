"use client";

import { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createNoise3D } from "simplex-noise";

// --- Configuration Constants ---
const PARTICLE_COUNT_X = 100; // Original density
const PARTICLE_COUNT_Y = 60;
const PARTICLE_SIZE = 1.6;     // Size of dots
const WAVE_SPEED = 0.2;        // Animation speed
const WAVE_AMPLITUDE = 2.5;    // Height of wave peaks
const WAVE_FREQUENCY = 0.08;   // "Tightness" of waves
const MOUSE_INFLUENCE_RADIUS = 6.0;
const MOUSE_INFLUENCE_STRENGTH = 6.0;

const noise3D = createNoise3D();

function Particles({ mouse }: { mouse: React.MutableRefObject<THREE.Vector2> }) {
    const meshRef = useRef<THREE.Points>(null);

    // 1. Generate grid of points
    const { positions, originalPositions } = useMemo(() => {
        const positions = new Float32Array(PARTICLE_COUNT_X * PARTICLE_COUNT_Y * 3);
        const originalPositions = new Float32Array(PARTICLE_COUNT_X * PARTICLE_COUNT_Y * 3);

        let i = 0;
        for (let iy = 0; iy < PARTICLE_COUNT_Y; iy++) {
            for (let ix = 0; ix < PARTICLE_COUNT_X; ix++) {
                // Calculate centered x, z coordinates
                const x = (ix - PARTICLE_COUNT_X / 2) * 1.2;
                const z = (iy - PARTICLE_COUNT_Y / 2) * 1.2;
                const y = 0; // Initial flat plane

                positions[i] = x;
                positions[i + 1] = y;
                positions[i + 2] = z;

                originalPositions[i] = x;
                originalPositions[i + 1] = y;
                originalPositions[i + 2] = z;

                i += 3;
            }
        }
        return { positions, originalPositions };
    }, []);

    // 2. Animate loop
    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.getElapsedTime() * WAVE_SPEED;
        const positionsArray = meshRef.current.geometry.attributes.position.array as Float32Array;

        // Convert 2D mouse (normalized -1 to 1) to 3D world approximate
        // We scale mouse influence vector to match our grid world size roughly
        const mouseX = mouse.current.x * (PARTICLE_COUNT_X / 2) * 1.2;
        // Map mouse Y to Z direction in 3D space, heavily skewed for perspective look
        const mouseY = -mouse.current.y * (PARTICLE_COUNT_Y / 2) * 1.2;

        for (let i = 0; i < PARTICLE_COUNT_X * PARTICLE_COUNT_Y; i++) {
            const i3 = i * 3;
            const x = originalPositions[i3];
            const z = originalPositions[i3 + 2];

            // --- Wave Motion ---
            // Combine multiple noise layers for fluid movement
            const noise = noise3D(x * WAVE_FREQUENCY, z * WAVE_FREQUENCY, time) * WAVE_AMPLITUDE +
                noise3D(x * WAVE_FREQUENCY * 2, z * WAVE_FREQUENCY * 2, time * 1.5) * (WAVE_AMPLITUDE * 0.3);

            // --- Mouse Interaction ---
            // Calculate distance from this point to the "mouse point" on the plane
            // We use simple 2D distance on X/Z plane (since Y is up/down)
            const dx = x - mouseX;
            const dz = z - mouseY;
            const dist = Math.sqrt(dx * dx + dz * dz);

            let mouseEffect = 0;
            if (dist < MOUSE_INFLUENCE_RADIUS) {
                // Smooth falloff curve
                const falloff = (1 - dist / MOUSE_INFLUENCE_RADIUS);
                // Push DOWN or UP based on preference. Here pushing DOWN (-y) looks smooth
                mouseEffect = -Math.pow(falloff, 2) * MOUSE_INFLUENCE_STRENGTH;
            }

            // Apply new Y position
            positionsArray[i3 + 1] = noise + mouseEffect;
        }

        meshRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={PARTICLE_SIZE}
                // White/Grey color
                color="#a1a1aa"
                sizeAttenuation={false} // Don't shrink too much with distance
                transparent
                opacity={0.6}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export function ParticleBackground() {
    // Mouse tracking ref (normalized -1 to 1)
    const mouse = useRef(new THREE.Vector2(0, 0));

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // Normalized coordinates: -1 to +1
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 -z-20 bg-black pointer-events-none">
            <Canvas
                camera={{ position: [0, 40, 50], fov: 45 }}
                gl={{
                    antialias: true,
                    alpha: false,
                    powerPreference: "high-performance"
                }}
                dpr={[1, 2]} // Support high DPI
            >
                <color attach="background" args={['#0a0a0a']} />

                {/* Rotate the chaotic plane to look like a floor/terrain */}
                <group rotation={[0, 0, 0]}>
                    <Particles mouse={mouse} />
                </group>

                {/* Add fog for depth fading */}
                <fog attach="fog" args={['#0a0a0a', 30, 90]} />
            </Canvas>
        </div>
    );
}
