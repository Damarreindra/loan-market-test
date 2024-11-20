import Lottie from 'lottie-react'
import React from 'react'
import animation from '../Lottie/underconstruction.json'

function UnderConstruction() {
 
    return (
        <div className='flex-1 bg-white flex flex-col justify-center items-center overflow-hidden'>
            <h1 className='md:text-5xl text-2xl font-bold text-primary mb-5 mt-12 w-1/2 text-center'>Sorry Page Under Development :(</h1>
          <Lottie className='w-1/3' animationData={animation}/>

        </div>
    )
}

export default UnderConstruction