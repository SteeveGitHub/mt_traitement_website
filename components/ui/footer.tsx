import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={'bg-gray-100 opacity-80 '}>
      <div className="py-12 md:py-16 flex">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="flex justify-center items-center
           md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5 flex justify-center">
              <div className="mb-2 flex items-center justify-center ">
                {/* Logo */}
                <Link href="/#header" className="inline-block w-20" aria-label="Cruip">
                  <img src={"/images/not_native/LOGO_1_-removebg-preview.png"} alt={"mt-logo"}/>
                </Link>
              </div>
              <div className="text-white text-center w-3/4 text-xs md:text-base">
                Notre entreprise est un acteur incontournable de la métallurgie dans la région. Forts de
                notre expérience de plus de 30 ans, nous pouvons répondre à tous vos besoins en matière
                de traitements de surfaces métalliques.
              </div>
            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Copyrights note */}
            <div className="text-xs md:text-base text-white text-sm mr-4">&copy; MT-TRAITEMENT.COM. Tous droits réservés.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
