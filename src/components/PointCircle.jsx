import React, { useRef } from 'react'
import Point from './Point'
import { useFrame } from '@react-three/fiber'
import { pointsInner, pointsOuter } from '../utils/utils'

const PointCircle = () => {
    const ref = useRef()
  
    useFrame(({ clock }) => {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05
    })
  
    return (
      <group ref={ref}>
        {pointsInner.map(point => <Point key={point.idx} position={point.position} color={point.color} />)}
        {pointsOuter.map(point => <Point key={point.idx} position={point.position} color={point.color} />)}
      </group>
    )
  }

export default PointCircle