import Logo from '../logo'
import Menu from '../menu'
import WeatherTime from '../weather-time'

const Nav = () => {
  return (
    <div className="w-[1919px] h-[97px] px-6 py-9 justify-start items-center gap-2.5 inline-flex">
      <div className="px-2 justify-center items-center gap-4 flex">
        <Logo />
      </div>
      <div className="h-[51px] px-2" />
      <Menu />
      <WeatherTime />
    </div>
  )
}

export default Nav
