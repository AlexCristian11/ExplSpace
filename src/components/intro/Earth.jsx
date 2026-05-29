import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Earth = () => {
    const earthRef = useRef(null);
    const earthTexture = useTexture("/assets/textures/earth_texture.jpg");

    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.002;
        }
    });

    return (
        <mesh ref={earthRef}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial map={earthTexture} />
        </mesh>
    )
}

export default Earth;