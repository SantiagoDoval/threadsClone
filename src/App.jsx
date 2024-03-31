import { Canvas } from '@react-three/fiber'
import './App.css'
import { Sphere } from '@react-three/drei'

function App() {
  

  return (
    <div className='relative'>      
      <Canvas className='bg-[#101010]' style={{height:'100vh'}}>
        <directionalLight />
        <pointLight position={[-30,0,-30]} power={10.0} />
        <Sphere position={[0,0,0]} args={[0.1,20,20]}>

        </Sphere>
      </Canvas>
    </div>
  )
}

export default App
