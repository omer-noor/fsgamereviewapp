import AuthContext from './auth/authContext'
import HorizontalCard from './components/horizontal-card/page'
import Search from './components/search/page'
import SearchContainer from './components/search/page'
import Header from './header/header'

export default function Home({ searchParams }: any) {
  const query = searchParams?.query || '';
  return (    
      <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">        
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <SearchContainer queryParams={query}/>
        </main>
      </div>
  )
}
