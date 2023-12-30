import React from 'react'
import SkeletonCard from './SkeletonCard'
import './Skeleton.css'
import Shimmer from './Shimmer'

function SkeletonCards() {
  return (
    [1,2].map((e)=>(
    <div key={e}>
    <div className='card-align'>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        
    </div>
    
    </div>
   
  )))
}

export default SkeletonCards