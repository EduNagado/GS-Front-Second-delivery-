import Link from "next/link";

export default function Home() {
    return (
      <div id="home" className="relative isolate px-6 pt-14 lg:px-8">
       
        <video
          src="video/Slowvid.mp4"  /*  video/ny.mp4 */
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
  
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Invista no futuro da energia limpa
              </h1>
              <p className="mt-8 text-lg font-medium text-stone-50 sm:text-xl">
              Transforme regiões sem acesso à eletricidade investindo em energia solar. Contribua para um impacto positivo que
              promove desenvolvimento social e retorno financeiro sustentável.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/login"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Simular investimento
                </Link>
                <Link href="/solution" className="text-sm font-semibold text-white">
                  Saiba mais <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  