import Image from 'next/image'

const WeatherTime = () => {
  return (
    <div className="justify-center items-center gap-[15px] flex">
      <div className="w-14 h-[46px] justify-center items-center flex">
        <div className="w-14 h-[46px] relative">
          <div className="opacity-60 w-[36.20px] h-[19.03px] left-[8.57px] top-[26.97px] absolute">
            <Image
              className="w-[36.20px] h-[19.03px] left-0 top-0 absolute"
              src="/ui/nav/rain.png"
              alt="rain"
              width={36}
              height={19}
            />
          </div>
          <Image
            className="w-14 h-[38.37px] left-0 top-0 absolute"
            src="/ui/nav/cloud.png"
            alt="cloud"
            width={56}
            height={38}
          />
        </div>
      </div>
      <div className="w-[54px] h-[46px] relative">
        <Image src="/ui/nav/32.svg" alt="32" width={37} height={19} />
        <div className="left-[41px] top-0 absolute text-white text-sm font-normal font-['PingFang SC']">
          ℃
        </div>
        <div className="left-0 top-[29px] absolute text-zinc-400 text-xs font-normal font-['Open Sans']">
          PM 2.0
        </div>
        <div className="w-[38px] h-px left-[1px] top-[29px] absolute bg-white bg-opacity-30" />
      </div>
      <div className="w-[130px] h-[41px] relative">
        <Image
          src="/ui/nav/09-01-00.svg"
          alt="09-01-00"
          width={121}
          height={21}
        />
        <div className="left-0 top-[28.33px] absolute text-white text-sm font-normal font-['PingFang SC'] leading-[14px]">
          10/08/2021
        </div>
        <div className="left-[89.08px] top-[27px] absolute text-zinc-400 text-xs font-normal font-['Open Sans']">
          월요일
        </div>
        <div className="w-px h-[10.73px] left-[85px] top-[30.70px] absolute bg-white bg-opacity-30" />
      </div>
    </div>
  )
}

export default WeatherTime
