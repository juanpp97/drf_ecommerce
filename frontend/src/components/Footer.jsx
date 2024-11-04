
export default function Footer() {
  return (

  <footer className="relative bg-[rgba(228,228,231,.3)] pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl font-semibold text-black">Sigamos en contacto</h4>
        <h5 className="text-[1.1rem] mt-0 mb-2 text-gray-700">
          Seguinos en nuestras redes sociales para enterarte de nuestras novedadese y ofertas
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          Aca van los iconos
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-black text-sm font-semibold mb-2">Links Utiles</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-gray-600 hover:text-green-500 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">Nosotros</a>
              </li>
              <li>
                <a className="text-gray-600  hover:text-green-500 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Catálogo</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-green-500 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Ofertas</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-green-500gray font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Descuentos</a>
              </li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2024</span><a href="#" className="text-blueGray-500 hover:text-gray-800" target="_blank"/> Ecommerce by 
          <a href="#" className="text-blueGray-500 hover:text-blueGray-800"> Juan Pablo Peñaloza/Gabriel Peñaloza</a>.
        </div>
      </div>
    </div>
  </div>
</footer>

  )

}
