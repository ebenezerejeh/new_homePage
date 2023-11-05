import BottomSection from '@/components/BottomSection'
import Buttons from '@/components/Buttons'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import TopSection from '@/components/TopSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full relative'>
      <Header/>
      <SideBar/>
      <Buttons/>
      <TopSection/>
      <BottomSection/>
    </main>
      )
}
