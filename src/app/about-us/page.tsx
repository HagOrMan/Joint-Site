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
      <div className='Motivation text-left p-6'>
        <h1 className='font-bold text-justify'>Why a Joint Website?</h1>
        <p>
          Making boring old personal websites is so clich&#233;, don&apos;t you think? It&apos;s all &quot;About Me&quot;, but what &quot;About Us&quot;?
          <br/>
          That&apos;s why we decided to make a website together, two passionate software engineers showing off our projects and collaboration skills in a group portfolio!
        </p>
      </div>

      {/* Our Experience, basically more about us */}
      <div className='Our-Experience text-left p-6'>
        <h1 className='font-bold text-justify'>Our Experience</h1>
        <p>
          We are both avid programmers and love completing projects together. Our most notable is our DeltaHacks 10 
          winning app <a href='/medisafe' className='underline'>MediSafe</a>!
          <br/>
          You can also check out our resumes using the dropdown below! 
        </p>
        {/* TODO: Create dropdown component linking to pages with our resumes */}
      </div>
    </main>
  )
}
