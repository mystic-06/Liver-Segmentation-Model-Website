import Link from "next/link"

export default function Header(){
    return(
        <>
        <header className="flex justify-between items-center w-full min-h-[70px]">
          <div className="flex ml-[30px] items-center">
            <Link href='/'>
              <p className="text-2xl font-bold cursor-pointer font-roboto">
                HepatoSeg
              </p>
            </Link>
          </div>

          <nav className="pr-[20px] font-roboto font-bold">
            <ul className="flex space-x-12 items-center text-xl">
                <li>
                  <Link href='/contact'>
                    <p className="hover:text-[#616161]">Contact</p>
                  </Link>
                </li>
                <li>
                  <Link href='/faq'>
                    <p className="hover:text-[#616161]">FAQs</p>
                  </Link>
                </li>
                <li>
                  <Link href='/model'>
                    <button className="w-30 h-11 rounded-2xl bg-gray-950 text-white text-base hover:bg-gray-900 hover:scale-102 cursor-pointer active:bg-gray-950 transition-all duration-300 ease-in-out">Try Model</button>
                  </Link>
                </li>
            </ul>
          </nav> 
        </header>
        <hr className='border-t-2 border-gray-200'></hr>
        </>
        );
}