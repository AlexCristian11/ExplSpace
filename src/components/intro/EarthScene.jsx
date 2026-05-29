import { Canvas } from "@react-three/fiber";
import Earth from "./Earth.jsx";

const EarthScene = () => {
    return (
        <Canvas
        camera={{
            position: [0, 0, 3],
            fov: 45,
        }}
        dpr={[1, 1.5]}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 5]} intensity={2} />
            <Earth />
        </Canvas>
    )
}

export default EarthScene;