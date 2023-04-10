import React, { useState } from 'react'
import divider from './assets/pattern-divider-mobile.svg'
import dice from './assets/icon-dice.svg'

const App = () => {

  const [myAdvice, setMyAdvice] = useState({
    id: 26,
    advice: "Don't cross the streams."
    })



    const clickHandler = async () => {
     let response = await fetch('https://api.adviceslip.com/advice')
     let data = await response.json()
     let result = await data.slip

     setMyAdvice(result)
    }

  return (
    <main className='bg-DarkBlue w-full h-screen flex justify-center items-center'>
      <div className='relative bg-DarkGrayishBlue w-3/4 flex flex-col justify-center items-center rounded-md gap-4 p-4 md:w-[400px]'>
        <h1 className='uppercase text-NeonGreen tracking-[.15rem] text-[10px]'>{`advice #${myAdvice.id}`}</h1>
        <p className='font-extrabold text-center text-LightCyan'>{myAdvice.advice}</p>
        <img src={divider} alt="divider" className='mb-4' />
        <div onClick={clickHandler} className='absolute bottom-[-1rem] bg-NeonGreen p-2 rounded-full cursor-pointer hover:shadow-custom'>
          <img src={dice} alt="dice" />
        </div>
      </div>
    </main>
  )
}

export default App