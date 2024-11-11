import ruta from '@/assets/hero.webp'
export default function Hero() {
    return (
        <>
<section className="hero">
  <div className="container mx-auto max-w-lg px-4 pt-12 pb-8 text-center sm:pt-24 md:max-w-none">
    <h1 className="text-5xl font-extrabold tracking-tight text-[#201515] sm:text-7xl lg:text-8xl">
      <span className="block md:inline">Somos </span>
      <span className="bg-clip-text text-[#201515] md:inline">FeverBuy!</span>
    </h1>
  </div>

  <div className="my-10 text-left sm:px-28">
    <section className="relative flex w-full items-center">
      <div className="container mx-auto w-full px-5 max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-24 items-center justify-center">
          <div className="max-w-xl text-center lg:text-left lg:py-5 xl:py-0" >
            <p className="text-3xl font-semibold tracking-tight text-[#201515] md:text-5xl lg:text-5xl">
              Tu nueva forma de comprar!
            </p>
            <p className="mt-5 text-2xl tracking-tight text-gray-600">
              Calidad, estilo y precio en un solo lugar. <br />
              Redescubrí la forma de comprar online.
            </p>
            <p className="mt-5 text-[#000000]">Lo querés? Lo encontramos para vos ➡️➡️</p>
          </div>

          <div className='mx-auto px-5 sm:max-w-[400px] sm:px-0 sm:h-auto lg:max-w-[none] lg:px-0 lg:h-[100%]'>
            <img
              className="w-full rounded-3xl bg-gray-300 object-cover object-center lg:ml-auto lg:h-full"
              alt="hero"
              src={ruta}
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</section>






        </>
    )
}

