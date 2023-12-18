import AuthContext from './auth/authContext'
import HomePage from './homepage'

export default function Home() {
  return (
    <>
      <AuthContext>
        <HomePage/>
      </AuthContext>
    </>
  )
}
