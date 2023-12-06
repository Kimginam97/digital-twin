'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Menu = () => {
  const pathname = usePathname()

  return (
    <div className="grow shrink basis-0 h-[57px] px-10 justify-between items-center flex">
      <div className="justify-center items-center gap-8 flex">
        <div className="p-4 justify-center items-center gap-2.5 flex">
          <div className="text-white text-lg font-normal font-['Open Sans']">
            <Link
              className={`link ${pathname === '/' ? 'active' : 'opacity-70'}`}
              href="/"
            >
              홈
            </Link>
          </div>
        </div>
        <div className="p-4 justify-center items-center gap-2.5 flex">
          <div className="text-white text-lg font-normal font-['Open Sans']">
            <Link
              className={`link ${
                pathname === '/dashboard' ? 'active' : 'opacity-70'
              }`}
              href="/dashboard"
            >
              대쉬보드
            </Link>
          </div>
        </div>
        <div className="p-4 justify-center items-center gap-2.5 flex">
          <div className="text-white text-lg font-normal font-['Open Sans']">
            <Link
              className={`link ${
                pathname === '/detail-board' ? 'active' : 'opacity-70'
              }`}
              href="/detail-board"
            >
              상세보드
            </Link>
          </div>
        </div>
        <div className="p-4 justify-center items-center gap-2.5 flex">
          <div className="text-white text-lg font-normal font-['Open Sans']">
            <Link
              className={`link ${
                pathname === '/indoor-mode' ? 'active' : 'opacity-70'
              }`}
              href="/indoor-mode"
            >
              실내모드
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[353px] self-stretch justify-start items-center gap-6 flex">
        <div className="justify-start items-start gap-4 flex">
          <div className="justify-start items-start gap-2 flex">
            <Image
              src="/ui/nav/circuit-board.svg"
              alt="circuit-board"
              width={37}
              height={37}
            />
            <div className="flex-col justify-start items-start inline-flex">
              <div className="text-white text-sm font-semibold font-['Open Sans']">
                Edition Information
              </div>
              <div className="text-white text-xs font-normal font-['Open Sans']">
                V0.02 08/08
              </div>
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-2 flex">
          <div className="w-px h-6 bg-stone-300" />
        </div>
        <div className="justify-start items-start gap-4 flex">
          <div className="justify-start items-start gap-2 flex">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="text-white text-opacity-70 text-sm font-semibold font-['Open Sans']">
                Componentisation
              </div>
              <div className="text-white text-opacity-70 text-xs font-normal font-['Open Sans']">
                Next Release
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
