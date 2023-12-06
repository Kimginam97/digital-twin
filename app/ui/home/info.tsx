import Image from 'next/image'
import React from 'react'

const Info = () => {
  return (
    <>
      {/* 원 차트 */}
      <div className="w-[410px] h-11 relative bg-black bg-opacity-40">
        <div className="left-[34px] top-[11px] absolute text-white text-base font-semibold font-['Open Sans']">
          정보
        </div>
        <div className="w-[395px] h-px left-0 top-[43px] absolute bg-white bg-opacity-50" />
        <div className="w-3 h-[3px] left-[398px] top-[41px] absolute bg-cyan-400" />
        <div className="w-[34px] h-[3px] left-0 top-[41px] absolute bg-white" />
        <Image
          className="w-5 h-5 left-[7px] top-[12px] absolute"
          src="/ui/home/left-sidebar/subtract.svg"
          alt="substract"
          width={6}
          height={6}
        />
        <div className="w-1.5 h-1.5 left-[14px] top-[19px] absolute bg-cyan-400" />
      </div>

      <div className="w-[409px] h-[209px] relative bg-black bg-opacity-40">
        <div className="w-[203px] h-[209px] left-[-4px] top-0 absolute">
          <div className="w-[213px] h-[213px] left-0 top-0 absolute">
            <Image
              src="/ui/home/left-sidebar/circle.svg"
              alt="circle"
              width={213}
              height={213}
              style={{
                width: 'auto',
                height: 'auto',
              }}
            />
          </div>
          <div className="w-14 h-[92px] left-[81px] top-[62px] absolute">
            <Image
              className="top-[20px] absolute"
              src="/ui/home/left-sidebar/80.svg"
              alt="80"
              width={40}
              height={21}
              style={{
                width: '40px',
                height: '21px',
              }}
            />
            <div className="left-[50.05px] top-[20px] absolute text-gray-500 text-[9px] font-normal font-['PingFang SC']">
              %
            </div>
            <div className="left-[8px] top-0 absolute text-gray-500 text-[10px] font-semibold font-['Open Sans']">
              ALERT
            </div>
            <div className="left-[8px] top-[57px] absolute text-white text-[10px] font-normal font-['Open Sans']">
              인구율
            </div>
            <div className="left-[11px] top-[70px] absolute text-center text-yellow-400 text-[9px] font-normal font-['Open Sans']">
              HIGH
            </div>
            <Image
              className="w-1.5 h-1.5 left-[25.05px] top-[91px] absolute"
              src="/ui/home/left-sidebar/plus.svg"
              alt="plus"
              width={6}
              height={6}
            />
          </div>
        </div>
        <div className="w-[60.40px] h-[60.40px] left-[-7.95px] top-[6px] absolute">
          <Image
            src="/ui/home/left-sidebar/arrow-up.svg"
            alt="arrow-up"
            width={60}
            height={60}
            style={{
              width: 'auto',
              height: 'auto',
            }}
          />
        </div>
        {/* 인구증가, 인구감소 */}
        <div className="w-[37.50px] h-[37.50px] left-[200.30px] top-[109.25px] absolute">
          <div className="w-[37.50px] h-[37.50px] left-0 top-0 absolute">
            <div className="w-9 h-9 left-[0.75px] top-[0.75px] absolute bg-black bg-opacity-40" />
            <div className="w-[37.50px] h-[37.50px] left-0 top-0 absolute">
              <Image
                src="/ui/home/left-sidebar/25.svg"
                alt="25"
                width={36}
                height={36}
              />
            </div>
          </div>
        </div>
        <div className="w-[36.29px] h-[36.29px] left-[200.90px] top-[151.85px] absolute">
          <div className="w-[36.29px] h-[36.29px] left-0 top-0 absolute">
            <div className="w-9 h-9 left-[0.15px] top-[0.15px] absolute bg-black bg-opacity-40" />
            <div className="w-[36.29px] h-[36.29px] left-0 top-0 absolute">
              <Image
                src="/ui/home/left-sidebar/20.svg"
                alt="20"
                width={36}
                height={36}
              />
            </div>
          </div>
        </div>
        <div className="w-[169px] h-9 left-[240.05px] top-[110px] absolute">
          <div className="w-[169px] h-9 left-0 top-0 absolute bg-black bg-opacity-40" />
          <div className="w-[141px] h-[19px] left-[12px] top-[8px] absolute">
            <div className="left-0 top-[1px] absolute text-white text-xs font-normal font-['Open Sans']">
              인구증가
            </div>
            <div className="left-[79px] bottom-[1px] absolute">
              <span className="text-white text-sm font-semibold font-['Open Sans']">
                250/
              </span>
              <span className="text-cyan-400 text-sm font-semibold font-['Open Sans']">
                2000
              </span>
            </div>
          </div>
        </div>
        <div className="w-[169px] h-9 left-[240.05px] top-[152px] absolute">
          <div className="w-[169px] h-9 left-0 top-0 absolute bg-black bg-opacity-40" />
          <div className="w-[141px] h-[19px] left-[12px] top-[8px] absolute">
            <div className="left-0 top-[1px] absolute text-white text-xs font-normal font-['Open Sans']">
              인구감소
            </div>
            <div className="left-[79px] bottom-[1px] absolute">
              <span className="text-white text-sm font-semibold font-['Open Sans']">
                400/
              </span>
              <span className="text-cyan-400 text-sm font-semibold font-['Open Sans']">
                2000
              </span>
            </div>
          </div>
        </div>
        {/* 예측데이터, 실제데이터 */}
        <div className="w-[205.49px] h-[72px] left-[201.97px] top-[25px] absolute">
          <div className="w-[205.49px] h-[52.80px] left-0 top-[11.20px] absolute">
            <div className="w-[87.69px] h-[52.80px] left-0 top-0 absolute">
              <Image
                src="/ui/home/left-sidebar/37,000.svg"
                alt="37000"
                width={87}
                height={20}
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
              <div className="left-[12.08px] top-[24.80px] absolute text-center text-white text-xs font-normal font-['Open Sans']">
                예측 데이터
              </div>
              <div className="left-[12.08px] top-[41.80px] absolute text-white text-[8px] font-normal font-['Open Sans']">
                Forecast Data
              </div>
              <div className="w-1.5 h-6 left-[0.08px] top-[26.80px] absolute border border-emerald-400" />
              <div className="w-1 h-3.5 left-[1.08px] top-[35.80px] absolute bg-emerald-400" />
            </div>
            <div className="w-[91.52px] h-[52.80px] left-[113.97px] top-0 absolute">
              <Image
                src="/ui/home/left-sidebar/22,000.svg"
                alt="22000"
                width={87}
                height={20}
              />
              <div className="left-[14.11px] top-[24.80px] absolute text-center text-white text-xs font-normal font-['Open Sans']">
                실제 데이터
              </div>
              <div className="left-[14.11px] top-[41.80px] absolute text-white text-[8px] font-normal font-['Open Sans']">
                Actual Data
              </div>
              <div className="w-1.5 h-6 left-[2.11px] top-[26.80px] absolute border border-white" />
              <div className="w-1 h-2 left-[3.11px] top-[41.80px] absolute bg-white" />
            </div>
          </div>
          <div className="w-px h-[50px] left-[100.08px] top-[12px] absolute bg-white bg-opacity-40" />
          <div className="w-[204px] h-px left-[0.08px] top-[71px] absolute bg-slate-500" />
          <div className="w-[204px] h-px left-[0.08px] top-0 absolute bg-slate-500" />
        </div>
      </div>
    </>
  )
}

export default Info
