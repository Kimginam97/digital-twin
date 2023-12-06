import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className="w-[370.30px] h-[54.82px] px-2 justify-center items-center gap-4 inline-flex ">
      <Image
        src="/ui/common/nav/frame.svg"
        alt="frame"
        width={54}
        height={54}
        style={{
          width: '54px',
          height: '54px',
        }}
      />
      <div className="w-[284.30px] h-[54.82px] relative">
        <Link href="/">
          <Image
            src="/ui/common/nav/smart-logo.svg"
            alt="smart-logo"
            width={195}
            height={30}
            style={{
              width: '195px',
              height: '30px',
            }}
          />
        </Link>

        <div className="left-0 top-[35.82px] absolute text-white text-sm font-semibold font-['Open Sans']">
          SDV UI-Kit SMART CITY BIGDATA SYSTEM
        </div>

        <div className="w-[75.86px] h-[31.24px] left-[208.44px] top-0 absolute">
          <Image
            src="/ui/common/nav/beta.svg"
            alt="beta"
            width={75.86}
            height={31.24}
          />
        </div>
      </div>
    </div>
  )
}

export default Logo
