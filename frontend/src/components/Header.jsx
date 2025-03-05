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
      
    <nav className="nav containe font-semibold text-lg flex justify-between items-center w-full">
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

        <div className="w-3/12 flex justify-end">
        <NavLink>
            <svg className="h-8 p-1 hover:text-green-500 duration-200 svg-inline--fa fa-search fa-w-16 fa-9x" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" className=""></path></svg>
        </NavLink>
        <NavLink>
            <svg className="h-8 p-1 hover:text-green-500 duration-200 svg-inline--fa fa-shopping-cart fa-w-18 fa-7x" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z" className=""></path></svg>
        </NavLink>
        </div>
    </nav>

</header> 
</>
)
}
