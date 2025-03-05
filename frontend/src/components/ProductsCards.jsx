import ruta from '@/assets/thumbnail-placeholder-300x200.webp'
export default function Products_cards() {
  return (
    <>  
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 mb-6">
          {[...Array(4)].map((_, index) => (
              <div key={index} className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                      <img
                          src={ruta}
                          className="h-full w-full object-cover"
                          alt="Apple AirPods"
                      />
                  </div>
                  <div className="p-6">
                      <div className="mb-2 flex items-center justify-between">
                          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                              Te vamos a estafar
                          </p>
                          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                              Danos tus ahorros
                          </p>
                      </div>
                      <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                          Pasame una foto de la tarjeta de crédito y te mando el producto
                      </p>
                  </div>
                  <div className="p-6 pt-0">
                      <button
                          className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                      >
                          ver más productos
                      </button>
                  </div>
              </div>
          ))}
      </div>
      </>
  );
}