import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

function Home() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <Head>
        <title>Hilton Personal Assistent</title>
      </Head>

      <main className={`main-background ${expanded && 'expand'}`}>
        <div className='user-profile text-white '>
          <Image src="/Avatar.png" height={82} width={82} alt="user avatar"/>
          <p className='text-md mt-3'>Welcome back</p>
          <h1 className='text-2xl font-semibold'>Staphanie</h1>
          <span className='mt-5 rounded-full px-4 py-1 bg-[#00000020] flex gap-2 items-center'>
            <p className='text-md'>Room 1001</p>
            <Image src="/SendWhite.png" height={14} width={14} alt="send icon" style={{ height: 14 }}/>
          </span>
        </div>

        <div className='focus-background'>
          <div className='container py-12 h-full absolute flex flex-col justify-end'>
            <div className={`cursor-pointer p-1 transition-opacity absolute top-12 ${!expanded && 'opacity-0'}`} onClick={() => setExpanded(false)}>
              <Image src="/ArrowDown.png" width={16} height={8} alt="arrow down"/>
            </div>
            <div className={`ai-persona ${expanded && 'to-center'}`}>
              <Image src="/AI.png" width={80} height={80} alt="AI persona"/>
              <h2 className='text-primary text-xl font-semibold w-52 text-center'>How can I help you today?</h2>
            </div>
            <input 
              className='chat-input'
              placeholder='Type something'
              onFocus={() => setExpanded(true)}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home