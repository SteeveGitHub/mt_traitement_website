"use client";
import Image from 'next/image';
import Slider from "react-slick";

import phosphatation1 from '@/public/images/phosphat/features-03-image-01.png';
import zingage1 from '@/public/images/zingage/deuxpieces_zing.jpg';
import zingage2 from '@/public/images/zingage/features-03-image-02.png';
import zingage3 from '@/public/images/zingage/pieces_multi_zing.jpg';
import zingage5 from '@/public/images/zingage/testimonial-03.jpg';
import zingage6 from '@/public/images/zingage/testimonial-02.jpg';
import zingage7 from '@/public/images/zingage/vis_zing.jpg';
import bruni1 from '@/public/images/brunissage/bruni.jpg';
import bruni2 from '@/public/images/brunissage/features-03-image-03.png';
import bruni3 from '@/public/images/brunissage/bruni_huile2.jpg';
import brut1 from '@/public/images/brut/cloche.jpg';
import brut2 from '@/public/images/brut/caisse_tiges.png';
import brut3 from '@/public/images/brut/non_traite.jpg';

export default function Zigzag() {
  const sections = [
    {
      title: "Phosphatation manganèse",
      images: [
        { src: phosphatation1, alt: "Phosphatation" },
        { src: brut1, alt: "Brut" },
        { src: brut2, alt: "Brut" },
        { src: brut3, alt: "Brut" },
      ],
      content: "La phosphatation manganèse est utilisée pour protéger les pièces en acier et en fonte. Ce procédé forme une couche protectrice augmentant la résistance à l'usure et à la corrosion, et améliore l'adhérence des huiles de lubrification.",
      process: "Dégraissage, attaque acide (décapage), traitement au manganèse, rinçage et finition (sèche ou grasse).",
      details: [
        "Traitement appliqué avec attaches (bains) ou en vrac (tonneaux).",
        "Dimensions utiles : 800 x 800 x 800 mm (diagonale à 1000 mm) ou 2000 x 250 x 1000 mm.",
        "Finition au choix : sèche ou grasse (huile)."
      ],
    },
    {
      title: "Zingage blanc",
      images: [
        { src: zingage1, alt: "Zingage" },
        { src: zingage2, alt: "Zingage" },
        { src: zingage3, alt: "Zingage" },
        { src: zingage5, alt: "Zingage" },
        { src: zingage7, alt: "Zingage" },
      ],
      content: "Le zingage blanc protège vos pièces en acier avec une couche d'oxyde de zinc, offrant une très forte résistance à la corrosion et une finition brillante.",
      process: "Dégraissage, décapage à l'acide, traitement par dépôt de zinc, rinçage et passivation.",
      details: [
        "Traitement appliqué avec attaches (bains) ou en vrac (tonneaux).",
        "Dimensions utiles : 1580 x 48 x 780 mm.",
        "Exemple d'application : pièces automobiles, boulons et fixations soumis à des environnements humides."
      ],
    },
    {
      title: "Brunissage",
      images: [
        { src: bruni1, alt: "Brunissage" },
        { src: bruni2, alt: "Brunissage" },
        { src: bruni3, alt: "Brunissage" },
      ],
      content: "Le brunissage est un procédé chimique qui noircit la surface des métaux tout en offrant une protection anticorrosion par oxydation contrôlée.",
      process: "Dégraissage, décapage à l'acide, traitement par oxydation, rinçage, et finition huilée pour une protection renforcée.",
      details: [
        "Traitement appliqué avec attaches (bains) ou en vrac (tonneaux).",
        "Dimensions utiles : 700 x 700 x 700 mm.",
        "Finition grasse pour une meilleure protection contre la corrosion.",
        "Exemple d'application : armes, pièces décoratives, et visserie avec finition noire esthétique."
      ],
    }
  ];

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    arrows: false,
  };

  return (
      <section id="zigzag">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                Nos différents traitements
              </div>
              <h1 className="h2 mb-4">Une équipe, plusieurs solutions.</h1>
              <p className="text-xl text-gray-400">
                Nous proposons un large panel de prestations pour répondre à tous vos besoins. Découvrez nos différents traitements et trouvez la solution qui vous convient.
              </p>
            </div>

            {/* Items */}
            <div className="grid gap-20">
              {sections.map((section, index) => (
                  <div key={index} className="md:grid md:grid-cols-12 md:gap-6 items-center">
                    {/* Image Carousel */}
                    <div className={`max-w-xs sm:max-w-xl md:max-w-none md:w-full sm:mx-auto md:col-span-5 lg:col-span-6 mb-8 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`} data-aos="fade-up">
                      <Slider {...carouselSettings}>
                        {section.images.map((image, imageIndex) => (
                            <div key={imageIndex} className="flex justify-center items-center w-full h-full">
                              <Image
                                  className="object-contain max-h-full"
                                  src={image.src}
                                  alt={image.alt}
                                  style={{ float: "left", width: "100%", height: "auto", objectFit: "cover" }}
                              />
                            </div>
                        ))}
                      </Slider>
                    </div>

                    {/* Content */}
                    <div className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                      <div className="md:pr-4 lg:pr-12 xl:pr-16">
                        <h3 className="h3 mb-3">{section.title}</h3>
                        <p className="text-xl text-gray-400 mb-4">{section.content}</p>
                        <p className="text-lg text-gray-400 mb-4">
                          <strong>Processus :</strong> {section.process}
                        </p>
                        <ul className="text-lg text-gray-400 -mb-2">
                          {section.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-center mb-2">
                                <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>{detail}</span>
                              </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
