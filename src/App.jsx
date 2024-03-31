import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls} from '@react-three/drei'
import PointCircle from './components/PointCircle'

function App() {
  return (
    <div className='relative'>
      <Canvas
      camera={{position:[6,-2,-8]}}
       className='bg-[#101010]' style={{ height: '100vh' }}>
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
        <h1 className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-3xl pointer-events-none'>ThreadsClone by DovalStudio</h1>
    </div>
  )
}

export default App
