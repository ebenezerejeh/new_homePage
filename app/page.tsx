import BottomSection from '@/components/BottomSection'
import Header from '@/components/Header'
import TopSection from '@/components/TopSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full relative'>
      <Header/>
      <TopSection/>
      <BottomSection/>
    </main>
      )
}
