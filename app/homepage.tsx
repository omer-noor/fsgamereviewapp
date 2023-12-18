import Image from 'next/image'
import Page from './user/page'
import Header from './header/header'

export default function HomePage() {
  return (
    <body className="bg-slate-900 flex h-full">
      <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
        <Header/>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className='flex flex-row'>
            <div className="basis-1/2"><Page /></div>
            <div className="basis-1/2">03</div>
          </div>
        </main>
      </div>
    </body>
  )
}
