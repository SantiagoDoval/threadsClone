import React from 'react'
import { Sphere } from '@react-three/drei'

const Point =({position,color}) => {
    return <Sphere position={position} args={[0.1, 20, 20]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
      />
    </Sphere>
  
}

export default Point