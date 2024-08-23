import React from 'react'

const Background = () => {
  return (
    <div className='cube-container'>
        <div className='cube'>
            <div className='top'></div>
            <span style={{ '--i': 0 }}></span>
            <span style={{ '--i': 0 }}></span>
            <span style={{ '--i': 0 }}></span>
            <span style={{ '--i': 0 }}></span>
        </div>
    </div>
  )
}

export default Background;
