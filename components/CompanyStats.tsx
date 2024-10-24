"use client";

import Image from 'next/image'; // Si vous utilisez Next.js
import React from 'react';
import barres from '@/public/images/company-stats/barres.jpg';
import workers from '@/public/images/company-stats/workers.jpg';
import elevate from '@/public/images/company-stats/elevate.jpg';
import Link from "next/link";

const CompanyStats = () => {
    return (<section className="bg-white py-16 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Nos chiffres clés</h2>
            </div>
            {/* Statistique Grid */}
            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-0 company-stats"> {/* Pas d'espace entre les colonnes */}
                {/* First Row */}
                <div className="relative p-8 bg-gray-100 text-gray-800 flex items-center justify-center">
                    <h3 className="text-5xl font-bold mb-2">97%</h3>
                    <p className="text-lg">Taux de satisfaction client</p>
                </div>

                <div className="relative p-8 bg-blueGray-100 flex items-center justify-center">
                    <p className="text-lg">Nous proposons 3 types de traitement
                        <span className="text-white">: phosphatation, zingage et brunissage</span>
                    </p>
                </div>

                <div className="relative p-8 bg-gray-100 text-gray-800 flex items-center justify-center">
                    <h3 className="text-5xl font-bold mb-2">30+</h3>
                    <p className="text-lg">Années d'expertise</p>
                </div>

                {/* Second Row */}
                <div className="relative bg-white flex items-center justify-center">
                    <Image src={barres} alt="Image description" width={400} height={250}/>
                </div>

                <div className="relative p-8 bg-gray-100 text-gray-800 flex items-center justify-center">
                    <h3 className="text-5xl font-bold mb-2">5,000+</h3>
                    <p className="text-lg">Projets réalisés</p>
                </div>

                <div className="relative bg-white flex items-center justify-center">
                    <Image src={workers} alt="Image description" width={400} height={250}/>
                </div>

                {/* Third Row */}
                <div className="relative p-8 bg-blueGray-100 flex items-center justify-center">
                    <p className="text-lg">
                        Nous sommes situés au :<br/>
                        <span className="text-white">
                                  55 RUE EMILE ZOLA
                                  <br/>
                                  69150 DECINES CHARPIEU
                                  <br/>
                                </span>
                        {/* Ajoutez ici votre contenu après le dernier <br /> */}
                        <br/>
                        <Link href="/#maps" rel="noopener noreferrer">
                        <span className="text-superRed-100 flex items-center justify-center">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1}
                              stroke="currentColor"
                              className={'redirect-map'}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                            />
                          </svg>
                        </span>
                        </Link>

                    </p>
                </div>


                <div className="relative bg-white flex items-center justify-center">
                    <Image src={elevate} alt="Image description" width={400} height={250}/>
                </div>

                <div className="relative p-8 bg-gray-100 text-gray-800 flex items-center justify-center">
                    <h3 className="text-5xl font-bold mb-2">10+</h3>
                    <p className="text-lg">Secteurs concernés</p>
                </div>
            </div>
        </div>
    </section>);
};

export default CompanyStats;
