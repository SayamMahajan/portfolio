import React from 'react'

const LoadingSpinner = ({ size = 'md', color = 'red' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const colorClasses = {
    red: 'border-red-500',
    blue: 'border-blue-500',
    gray: 'border-gray-500'
  }

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full animate-spin`}></div>
  )
}

export default LoadingSpinner