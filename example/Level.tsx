import { RigidBody } from "@react-three/rapier";
import { useGLTF, Text } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Level() {
    const level = useGLTF("./leveltemp_grey.glb");

    useEffect(() => {
        level.scene.traverse((child) => {
            if (
                child instanceof THREE.Mesh &&
                child.material instanceof THREE.MeshStandardMaterial
            ) {
                child.receiveShadow = true;
                child.material.color = new THREE.Color("lightgray");
            }
        });
    }, []);

    return (
        <group position={[-40, 0, -60]}>
            <RigidBody type="fixed" colliders="trimesh" rotation={[0, 0, 0]} scale={[2, 2, 2]}>
                <primitive object={level.scene} />
            </RigidBody>
        </group>
    );
}
