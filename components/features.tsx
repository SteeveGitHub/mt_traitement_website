export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Nos clients apprécient notre proximité, nos délais et notre savoir-faire.</h2>
            <p className="text-xl text-gray-400">Forts de plus de 30 ans d'expérience, la qualité de nos revêtements n'est plus à prouver.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2">Proximité client</h4>
              <p className="text-lg text-gray-400 text-center">
                Notre engagement ne se limite pas à la fourniture de services de qualité ; il englobe une relation de
                proximité avec chacun de nos clients. C'est pourquoi nos équipes sont toujours disponibles pour écouter
                vos besoins et vous proposer des solutions personnalisées et adaptées.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">Délai de traitement</h4>
              <p className="text-lg text-gray-400 text-center">
                Nous comprenons l'importance des délais dans l'industrie actuelle. C'est pourquoi nous nous engageons
                à respecter scrupuleusement les échéances convenues. Nos processus optimisés permettent de minimiser
                les temps d'attente, tout en préservant la qualité exceptionnelle de nos traitements.
                Faites confiance à notre équipe pour livrer vos projets dans les temps.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Savoir-faire</h4>
              <p className="text-lg text-gray-400 text-center">
                Avec une expertise reconnue dans les traitements de surface, nous sommes fiers de notre maîtrise
                technique en phosphatation, zingage et brunissage. Chaque processus est méticuleusement adapté pour
                offrir la meilleure résistance et durabilité, garantissant ainsi des produits finis de haute qualité.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
