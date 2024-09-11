import logoFosp from '../assets/logo_fosp.svg'
import logoMaua from '../assets/logo_imt.svg'
function Navbar() {
  return (
    <>
      <header className="w-full lg:flex justify-between items-center bg-white h-20 px-6 hidden z-10">
        <div className="flex w-[70rem] m-auto">

          <div className="flex relative">
            <div className="flex gap-6 m-auto">
              <div className="m-auto"><img src={logoFosp} width={40} height={40} alt="Logo FOSP" /></div>
              <div className="m-auto"><img src={logoMaua} width={70} height={40} alt="Logo Maua" /></div>
            </div>
          </div>

          <div className="flex gap-6 m-auto relative right-10">
            <div className="text-black">
              <ul className="flex gap-8">
                <li className='underline-offset-4 hover:scale-105 transition-all hover:underline hover:cursor-pointer'>Home</li>
                <li className='underline-offset-4 hover:scale-105 hover:underline transition-all hover:cursor-pointer'>Gráficos</li>
                <li className='underline-offset-4 hover:scale-105 hover:underline transition-all hover:cursor-pointer'>Projeto</li>
                <li className='underline-offset-4 hover:scale-105 hover:underline transition-all hover:cursor-pointer'>Sobre</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
