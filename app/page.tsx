import AuthContext from './auth/authContext'
import HorizontalCard from './components/horizontal-card/card'
import Search from './components/search/search'
import SearchContainer from './components/search/search-contaniner'
import Header from './header/header'

export default function Home() {
  return (    
      <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">        
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <SearchContainer/>
        </main>
      </div>
  )
}
