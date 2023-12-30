
import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'
import './Skeleton.css'

const SkeletonCard= ({ theme }) => {
  const themeClass = theme || 'light'

  return (
    <div className={`${themeClass}`}>
      <div className="skeleton-card">
        <SkeletonElement type="thumbnail"/>
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </div>
  )
}

export default SkeletonCard;