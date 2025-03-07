import { NavLink } from "react-router-dom"
import ruta from '@/assets/logo.svg'
export default function Header() {
  return (
    <>
<header className="header sticky top-0 bg-white shadow-md flex flex-col items-center justify-center px-8 bg-[rgba(228,228,230,.3)] z-50 py-3">
  
    <NavLink to="/" className="flex  items-center gap-3 text-[1.5rem] font-extrabold tracking-tight text-[#201515] hover:text-green-500"> 
      <svg  className="fill-current hover:fill-green-500" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="25px" height="25px" viewBox="0 0 500.000000 500.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
 stroke="none">
<path d="M1485 4819 c-27 -5 -92 -30 -144 -55 -131 -64 -221 -154 -284 -285
-25 -52 -50 -118 -56 -147 -7 -34 -11 -253 -11 -623 l0 -571 33 -33 c19 -19
47 -37 62 -41 43 -11 105 15 132 55 l23 34 0 547 c0 521 1 551 20 611 35 111
115 196 228 243 34 14 71 20 132 20 72 0 94 -4 144 -27 109 -50 171 -117 215
-230 14 -36 17 -122 21 -615 l5 -574 32 -29 c18 -16 45 -32 60 -35 42 -11 104
16 131 56 l23 34 -3 586 c-3 581 -4 585 -26 650 -71 198 -223 351 -412 411
-75 25 -245 34 -325 18z"/>
<path d="M540 3544 c-80 -28 -145 -88 -186 -170 -23 -48 -27 -75 -54 -455
-113 -1553 -170 -2370 -170 -2429 0 -134 67 -241 183 -296 l52 -24 1824 0
1823 0 50 27 c164 89 162 325 -2 417 l-55 31 -510 5 -510 5 -48 28 c-79 47
-124 138 -114 232 9 89 59 158 142 196 37 17 78 19 622 19 375 0 600 4 632 11
61 13 121 55 158 110 22 33 28 56 31 110 4 60 0 77 -23 125 -32 65 -84 107
-154 124 -35 8 -258 10 -812 8 l-764 -3 -51 27 c-90 47 -135 119 -136 217 -1
96 46 172 132 216 l48 25 502 6 501 7 52 31 c34 20 62 48 82 80 26 43 30 59
30 120 -1 102 -42 172 -130 219 -38 21 -56 22 -390 27 -316 5 -353 7 -385 24
-92 49 -134 119 -135 222 0 61 4 77 30 120 39 62 113 109 187 117 29 4 346 7
704 7 549 0 657 2 687 15 112 47 171 173 137 296 -13 47 -72 114 -124 142
l-41 22 -992 3 -993 2 0 -217 c0 -191 -3 -223 -19 -259 -89 -195 -373 -190
-456 9 -17 42 -24 128 -25 315 l0 152 -255 0 -255 0 0 -215 c0 -243 -3 -256
-70 -329 -99 -108 -287 -99 -371 17 -50 69 -59 120 -59 334 l0 193 -137 0
c-98 -1 -151 -5 -183 -16z"/>
<path d="M4192 2573 c-91 -32 -154 -129 -153 -233 0 -70 23 -120 77 -173 63
-61 104 -69 336 -65 187 3 206 5 244 25 178 95 178 340 -1 436 -37 20 -56 22
-250 24 -169 2 -218 -1 -253 -14z"/>
<path d="M4522 624 c-87 -43 -132 -117 -132 -217 1 -141 98 -237 240 -237 102
0 175 46 216 135 98 208 -118 422 -324 319z"/>
</g>
</svg>
      FeverBuy
      
    </NavLink>
      
    <nav className="nav container font-extrabold text-1xl flex justify-between items-center w-full">
        <ul className="flex items-center flex-wrap justify-center sm:">
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <NavLink to="/">Catálogo</NavLink>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <NavLink to="/">Ofertas</NavLink>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <NavLink to="/">Nosotros</NavLink>
            </li>
            
        </ul>

        <div className="pt-2 relative mx-auto text-gray-600">
        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search"/>
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
          <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966"  xml:space="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>





        <div className="w-3/12 flex justify-end items-center">
        <NavLink>
        <svg  className="p-1 hover:text-green-500 duration-200 " width="45" height="45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.9a2.1 2.1 0 1 1 0 4.2a2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4" stroke-width="0.5" stroke="currentColor"/></svg>


        </NavLink>
        <NavLink>
        <svg className="p-1 hover:text-green-500 duration-200 " width="45" height="45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" stroke-width="0.5" stroke="currentColor"/></svg>
        </NavLink>
        </div>
    </nav>

</header> 
</>
)
}
