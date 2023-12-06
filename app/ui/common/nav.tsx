import Logo from '../logo'

const Nav = () => {
  return (
    <div className="w-[1919px] h-[97px] px-6 py-9 justify-start items-center gap-2.5 inline-flex">
      <div className="px-2 justify-center items-center gap-4 flex">
        <Logo />
      </div>
      <div className="h-[51px] px-2" />
      <div className="grow shrink basis-0 h-[57px] px-10 justify-between items-center flex">
        <div className="justify-center items-center gap-8 flex">
          <div className="p-4 justify-center items-center gap-2.5 flex">
            <div className="text-white text-lg font-normal font-['Open Sans']">
              홈
            </div>
          </div>
          <div className="p-4 justify-center items-center gap-2.5 flex">
            <div className="text-white text-opacity-70 text-lg font-normal font-['Open Sans']">
              대쉬보드
            </div>
          </div>
          <div className="p-4 justify-center items-center gap-2.5 flex">
            <div className="text-white text-opacity-70 text-lg font-normal font-['Open Sans']">
              상세모드
            </div>
          </div>
          <div className="p-4 justify-center items-center gap-2.5 flex">
            <div className="text-white text-opacity-70 text-lg font-normal font-['Open Sans']">
              실내모드
            </div>
          </div>
        </div>
        <div className="w-[353px] self-stretch justify-start items-center gap-6 flex">
          <div className="justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-2 flex">
              <div className="w-[37px] h-[37px] relative" />
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-white text-sm font-semibold font-['Open Sans']">
                  Edition Information
                </div>
                <div className="text-white text-xs font-normal font-['Open Sans']">
                  V0.02 08/08{' '}
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
      <div className="justify-center items-center gap-[15px] flex">
        <div className="w-14 h-[46px] justify-center items-center flex">
          <div className="w-14 h-[46px] relative">
            <div className="opacity-60 w-[36.20px] h-[19.03px] left-[8.57px] top-[26.97px] absolute">
              <img
                className="w-[36.20px] h-[19.03px] left-0 top-0 absolute"
                src="https://via.placeholder.com/36x19"
              />
              <img
                className="w-[36.20px] h-[19.03px] left-0 top-0 absolute"
                src="https://via.placeholder.com/36x19"
              />
            </div>
            <img
              className="w-14 h-[38.37px] left-0 top-0 absolute"
              src="https://via.placeholder.com/56x38"
            />
          </div>
        </div>
        <div className="w-[54px] h-[46px] relative">
          <div className="left-[41px] top-0 absolute text-white text-sm font-normal font-['PingFang SC']">
            ℃
          </div>
          <div className="left-0 top-[29px] absolute text-zinc-400 text-xs font-normal font-['Open Sans']">
            PM 2.0
          </div>
          <div className="w-[38px] h-px left-[1px] top-[29px] absolute bg-white bg-opacity-30" />
        </div>
        <div className="w-[125px] h-[41px] relative">
          <div className="left-0 top-[28.33px] absolute text-white text-sm font-normal font-['PingFang SC'] leading-[14px]">
            10/08/2021
          </div>
          <div className="left-[89.08px] top-[27px] absolute text-zinc-400 text-xs font-normal font-['Open Sans']">
            月曜日
          </div>
          <div className="w-px h-[10.73px] left-[85px] top-[30.70px] absolute bg-white bg-opacity-30" />
        </div>
      </div>
    </div>
  )
}

export default Nav
