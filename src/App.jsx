
import styles from "./app.module.css";
import './App.css'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
function App() {


  return (
    <div className={styles.main}>
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 3]} // Set the position of the camera
          // Field of view
          near={0.1}
          far={1000}
          
        />

        {/* <OrbitControls enableZoom={false} /> */}
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
