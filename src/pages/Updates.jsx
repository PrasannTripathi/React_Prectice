import React from 'react'

const Updates = () => {
  return (
    <div className='bg-white h-fit'>
      <div className='bg-gray-100 h-[575px]'>
        <div className=' flex items-center justify-center'>
          <h1 className=' text-3xl font-semibold text-blue-950'> Blog</h1>
        </div>
        <div className='flex items-center justify-center py-10 gap-32'>
          <div>
            <h1 className='font-semibold'>SBI Arogya Plus withdrawal</h1>
            <p>SBI Arogya Plus withdrawal has created issues for the policyholders</p>
            <a className='hover:text-orange-500 hover:underline text-blue-900' href="https://youtu.be/tBgNpc39FJk?si=rjtbON4ESt_G5pJa">Open Link</a>
          </div>
          <div>
            <img className='h-40' src="/src/assets/updates.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Updates