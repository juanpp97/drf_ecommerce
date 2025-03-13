import ruta from '@/assets/thumbnail-placeholder-300x200.webp'
export default function SectionHeadingProducts() {   
     return (
        <>
        <section class="py-20 bg-stone-100 my-20">
    <div class="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-auto  items-center max-w-6xl ">
      <div class="px-4 md:mr-6">
        <h3 class="text-5xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
          Tu proxima compra esta acá!
        </h3>
        <p class="mt-4 text-stone-800 text-xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            purus eget sapien sem
        </p>
      </div>
      <div>
        <div class=" bg-blue-500 transform -translate-x-10 relative h-64">
        </div>
        <div class="transform md:rounded-md  bg-white rotate-3 scale-110 translate-x-10 md:shadow-2xl -ml-4 -mt-44 p-12  space-y-2">
          <div class="px-4 sm:px-0 grid grid-cols-5 sm:grid-cols-4 gap-2 sm:gap-8 max-w-5xl mx-auto">
                        <img src={ruta}/>
                        <img src={ruta}/>
                        <img src={ruta}/>
                        <img src={ruta}/>
                        <img src={ruta}/>
                        <img src={ruta}/>
                        <img src={ruta}/>
                        <img src={ruta}/>
                        <img src={ruta}/>
                        <img src={ruta}/>
                      </div>
        </div>
      </div>
    </div>
  </section>
      </>
    )
}