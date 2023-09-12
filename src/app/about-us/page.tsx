import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-10">

      {/* Title area */}
      <header className='font-bold text-center pb-10'>
        About Us
      </header>

      {/* Show off our images and possibly a mini description of us and our academic+software background */}
      {/* TODO: Create component for our profiles*/}
      <div className='flex flex-row gap-x-20'>
        <p className='w-1/2 items-center text-center'>
          Baoze&apos;s Image Here
        </p>
        <p className='w-1/2 items-center text-center'>
          Kyle&apos;s Image Here
        </p>
      </div>

      {/* Explain our motivation for creating the website */}
      <div className='Motivation '>
        <h1 className='font-bold text-justify'>Why a Joint Website?</h1>
        <p>Making boring old personal websites is so clich&#233;, don&apos;t you think?</p>
      </div>

      {/* More on us? */}
      <div className='text-left'>
        <h1 className='font-bold'>Our Experience</h1>
        <p>We are both avid programmers and love completing projects together. Our most notable is our DeltaHacks 10 
          winning app <a href='/medisafe' className='underline'>MediSafe</a>!</p>
      </div>
    </main>
  )
}
