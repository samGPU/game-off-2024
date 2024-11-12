import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function Lights() {
  const directionalLightRef = useRef<THREE.DirectionalLight>();

  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);

  const spotLightRef = useRef<THREE.SpotLight>();

  // useHelper(spotLightRef, THREE.SpotLightHelper, 1);

  return (
    <>
      <directionalLight
        castShadow
        shadow-normalBias={0.06}
        position={[10, 30, 20]}
        intensity={0.3}
        shadow-mapSize={[512, 512]}
        shadow-camera-near={1}
        shadow-camera-far={100}
        shadow-camera-top={50}
        shadow-camera-right={50}
        shadow-camera-bottom={-50}
        shadow-camera-left={-50}
        name="followLight"
        ref={directionalLightRef}
      />
      <ambientLight intensity={0.5} />

      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={[512, 512]}
        shadow-camera-near={1}
        shadow-camera-far={100}
        shadow-camera-top={50}
        shadow-camera-right={50}
        shadow-camera-bottom={-50}
        shadow-camera-left={-50}
        ref={spotLightRef}
      />
      <pointLight position={[-10, 4, 10]} intensity={4.5} />
    </>
  );
}
