import React from 'react'

const successCard = ({onDismiss}) => {
  return (
<main className='main bg-gray-800 width-[100%] h-[100vh] flex justify-center items-center'>
  <div className='success-card md:w-[400px] w-[300px] md:h-[400px] h-[350px] bg-white rounded-lg flex flex-col justify-center md:gap-5 gap-3 md:p-10 p-5'>
    <img src="/images/icon-success.svg" alt="" className='w-[30px]' />
    <h1 className='md:text-4xl text-3xl font-bold'>Thank you for subscribing</h1>
    <p>A confirmation email has been sent to lorem@gmail.com. Please open it and click the button inside to confirm your subscription.</p>
    <button onClick={onDismiss} className='p-3 bg-gray-700 rounded-md text-white'>Dismiss message</button>
  </div>
</main>
  )
}

export default successCard
