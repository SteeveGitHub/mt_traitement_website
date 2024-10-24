"use client";

import Image from 'next/image';
import industrial from '@/public/images/banniere/pexels-pixabay-236698.jpg';

const BannerPage = () => {
    return (
        <section className="relative bg-gray-900 h-96 flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full">
                {/* Utilisation de Next.js Image pour un chargement optimisé */}
                <Image
                    src={industrial}
                    alt="Industrial background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                />
            </div>
            <div className="relative text-center px-4 z-10 mt-20">
                <h1 className="text-7xl font-bold text-white mttraitementh1">MT TRAITEMENT</h1>
                <p className="mt-4 text-4xl mttraitementp text-white">La référence pour le traitement de surfaces métalliques</p>
            </div>
            {/* Optionally, you can add an overlay if the text needs more contrast */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </section>
    );
};

export default BannerPage;
