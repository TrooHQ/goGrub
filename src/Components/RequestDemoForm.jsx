import React, { useEffect } from 'react'
import { IoCloseCircle } from 'react-icons/io5'

export default function RequestDemoForm() {

  useEffect(() => {

  }, [])

  return (
    <div className='w-screen min-h-screen'>
      <div className="flex justify-center w-full h-screen">
        <iframe
          title="Jotform Form"
          src="https://form.jotform.com/Admintroohq/goGrubbookademo"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export function LeadGenForm({ setIsOpen }) {
  return (
    <div className='fixed top-0 left-0 z-[1000] w-full h-screen bg-black/50 flex justify-center items-center'>
      <div className='relative w-full h-[95%] mx-auto my-16 overflow-hidden font-bold text-center text-white bg-white md:w-2/3 lg:w-1/2'>

        <IoCloseCircle onClick={setIsOpen} className='absolute text-2xl text-red-500 cursor-pointer top-6 right-10' />

        <div className="flex justify-center w-full h-full">
          <iframe
            title="Jotform Form"
            src="https://form.jotform.com/Admintroohq/goGrubcoleads"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

