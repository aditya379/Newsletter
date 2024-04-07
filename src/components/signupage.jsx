import React from 'react'
import { useState } from 'react'

const signupage = ({onSignup}) => {

    const [getinput, setgetinput] = useState('')

    const handleInputChange = (e) => {
      setgetinput(e.target.value);
    };
  
    const submitForm =(e)=>{
      e.preventDefault();
      if(getinput!==''){
        onSignup();
      }
    }

  return (
    
    <main className='signupage bg-slate-800 md:h-[100vh] w-[100%] flex justify-center items-center '>
    {/* 1st section */}
    <div className='gap-10 bg-white rounded-lg w-[80%] flex md:flex-row flex-col-reverse justify-center items-center p-2  '>
    <section className="first flex justify-center items-center">
      <div className="texts flex flex-col justify-center gap-10">
        <h1 className='text-5xl font-bold'>Stay Updated!</h1>
        <p>Join 60,000+ product managers receiving weekly updates on:</p>
        <ul className='flex flex-col gap-4'>
          <li className='flex gap-3'><img src="./icon-list.svg" alt="list" /><span>Product discovery and building what matters</span></li>
          <li className='flex gap-3'><img src="./icon-list.svg" alt="list" /><span>Measuring to ensure updates are a success</span></li>  
          <li className='flex gap-3'><img src="./icon-list.svg" alt="list" /><span>And much more!</span></li>
        </ul>
        <form className='flex flex-col gap-4' onSubmit={submitForm}>
          <p>Email address</p>
          <input type="email" value={getinput} onChange={handleInputChange}placeholder="Your Email Address" className='border-2 p-4 rounded-md' required  />
          <button className='bg-[#383634] font-bold text-white p-4 rounded-md'>Subscribe to monthly newsletter</button>
        </form>
      </div>
    </section>
    {/* 2nd section */}
    <section className="second">
      <div className="img height-[550px]">
        <img src="./illustration-sign-up-desktop.svg" alt="background" className='h-[550px] md:block hidden' />
        <img src="./illustration-sign-up-mobile.svg" alt="background" className='md:hidden min-w-[250px] block' />
      </div>
    </section>
    </div>
  </main>
  )
}

export default signupage
