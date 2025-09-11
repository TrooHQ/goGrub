import React, { useEffect } from 'react'

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
