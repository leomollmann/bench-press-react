import Message from '@/components/Message'
import Question from '@/entities/Question'
import User from '@/entities/User'
import api from '@/utils/api'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { KeyboardEvent, useEffect, useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'

type Props = {
  user: User
  history: Question[]
}

export const getServerSideProps: GetServerSideProps<Props> = async (data) => {
  const response = await api.get(`/api/get_user?user=${data.params?.id}`)
  return {
    props: response.data
  }
}

function Home({ user, history }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState(history)
  const [loading, setLoading] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [chat, setChat] = useState<string>()

  useEffect(() => {
    if(ref.current && expanded)
      ref.current.scrollIntoView()
  }, [messages, expanded])

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') sendMessage()
  }

  const sendMessage = async () => {
    const id = decodeURI(window.location.pathname).substring(1)
    if(chat) {
      setMessages([...messages, { question: chat }])
      setChat(undefined)
      setLoading(true)
      await api.post(`/api/chat?user=${id}`, { chat })
      const res = await api.get(`/api/get_user?user=${id}`)
      setMessages(res.data.history)
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Hotel Personal Assistent</title>
      </Head>

      <main className={`main-background ${expanded && 'expand'}`}>
        <div className='user-profile text-white '>
          <Image src="/Avatar.png" height={82} width={82} alt="user avatar"/>
          <p className='text-md mt-3'>Welcome back</p>
          <h1 className='text-2xl font-semibold'>{user.name}</h1>
          <span className='mt-5 rounded-full px-4 py-1 bg-[#00000020] flex gap-2 items-center'>
            <p className='text-md'>Room {user.room}</p>
            <Image src="/SendWhite.svg" height={14} width={14} alt="send icon" style={{ height: 14 }}/>
          </span>
        </div>

        <div className='focus-background'>
          <div className='container pt-20 pb-32 h-full absolute flex flex-col justify-end'>
            <div className={`cursor-pointer transition-opacity absolute top-12 left-8 right-8 ${!expanded && 'opacity-0'}`}>
              <span className='absolute left-0 top-1 p-1' onClick={() => setExpanded(false)}>
                <Image src="/ArrowDown.png" width={16} height={8} alt="arrow down"/>
              </span>
              {messages.length > 0 ? <p className='text-primary text-md font-semibold text-center font-inter'>How can I help you today?</p> : null}
            </div>

            {messages.length === 0 || !expanded ? (
              <div className={`ai-persona ${expanded && 'to-center'}`}>
                <Image src="/AI.png" width={80} height={80} alt="AI persona"/>
                <h2 className='text-primary text-xl font-semibold w-52 text-center font-inter'>How can I help you today?</h2>
              </div> 
            ) : null}
            
            {expanded && messages.length ? (
              <div className='message-list'>
                {messages.map((x, i) => <Message key={uuid()} isLatest={i === messages.length - 1} question={x}/>)}
                <div ref={ref} className="flex justify-center -mt-14 z-20 relative">
                  {loading ? <div className='absolute -top-4'>
                    <div className='dot-pulse'/>
                  </div> : null}
                  <Image src="/AI.png" width={80} height={80} alt="AI persona"/>
                </div>
              </div>
            ) : null}

            <div className='chat-input'>
              {chat ? (
                <span className='absolute right-4 top-4 p-1' onClick={sendMessage}>
                  <Image src="/Send.svg" width={20} height={20} alt="Send message"/>
                </span>
              ) : null}
              <input 
                value={chat || ''}
                onChange={e => setChat(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Type something'
                onFocus={() => setExpanded(true)}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home