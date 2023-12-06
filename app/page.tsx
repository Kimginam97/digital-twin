import Image from 'next/image'
import Nav from './ui/common/nav/nav'

export default function Home() {
  return (
    <div className="w-[1932px] h-[983px] relative">
      // left-sidebar
      <div className="w-[448px] h-[983px] relative"></div>
      // right-sidebar
      <div className="w-[296px] h-[1080px] relative"></div>
      // bottom-bar
      <div className="w-[1175px] h-[227px] relative"></div>
    </div>
  )
}
