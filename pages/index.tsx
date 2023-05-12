import { useRouter } from "next/router"
import { useState } from "react"

function Login() {
  const [user, setUser] = useState<string>()
  const router = useRouter()

  const handleUser = () => {
    router.push(`/${user}`)
  }

  return (
    <div>
      <input value={user || ''} onChange={e => setUser(e.target.value)}/>
      <button onClick={handleUser}>Let's Go!</button>
    </div>
  )
}

export default Login