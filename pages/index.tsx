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
          <div className='container py-4'>
            <input 
              className='chat-input'
              placeholder='Type something'
              onFocus={() => setExpanded(true)} 
              onBlur={() => setExpanded(false)} 
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home