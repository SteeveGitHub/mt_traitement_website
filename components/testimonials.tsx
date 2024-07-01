import Image from 'next/image'

import AlphaMeca from '@/public/images/clients/alpha-meca.webp'
import SAMSON from '@/public/images/clients/SAMSON.png'
import INGECAL from '@/public/images/clients/INGECAL.png'
import SMGB from '@/public/images/clients/SMGB.png'
import CMW from '@/public/images/clients/CMW.png'
import Burdeyron from '@/public/images/clients/burdeyron.png'
import Gardette from '@/public/images/clients/gardette.png'
import Golzio from '@/public/images/clients/GOLZIO.jpg'
import Thimonnier from '@/public/images/clients/Thimonnier.png'
import Tractel from '@/public/images/clients/tractel.png'

export default function Testimonials() {
    const firstSize = 80;
    const secondSize = 100;
    const thirdSize = 120;
    const fourthSize = 150;
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Ils nous font confiance...</h2>
                        <p className="text-xl text-gray-400">
                            Nous savons que nos clients sont nos meilleurs ambassadeurs, c'est pourquoi nous portons une
                            attention
                            particulière à traiter leurs commandes du mieux possible.
                        </p>
                    </div>

                    <div className={"flex flex-wrap gap-24"}>

                        <div className={"flex justify-around w-1/1"}>
                            <Image className=" object-contain" src={INGECAL} width={thirdSize}
                                   height={thirdSize}
                                   alt="Testimonial 01"/>
                            <Image className="rounded-full object-contain " src={Thimonnier} width={thirdSize}
                                   height={thirdSize}
                                   alt="Testimonial 02"/>
                            <Image className="rounded-full object-contain" src={SAMSON} width={thirdSize}
                                   height={thirdSize}
                                   alt="Testimonial 03"/>
                        </div>

                        <div className={"flex justify-around w-1/1"}>
                            <Image className="rounded-full object-contain" src={CMW} width={thirdSize}
                                   height={thirdSize}
                                   alt="Testimonial 01"/>
                            <Image className="rounded-full object-contain " src={Golzio} width={thirdSize}
                                   height={thirdSize}
                                   alt="Testimonial 02"/>
                            <Image className="rounded-full object-contain" src={Gardette} width={thirdSize}
                                   height={thirdSize}
                                   alt="Testimonial 03"/>
                            <Image className="rounded-full object-contain" src={Tractel} width={thirdSize}
                                   height={thirdSize}
                                   alt="Testimonial 03"/>
                        </div>

                        <div className={"flex justify-around w-1/1"}>
                            <Image className=" object-contain " src={SMGB} width={thirdSize}
                                   height={thirdSize}
                                   alt="Testimonial 01"/>
                            <Image className=" object-contain " src={AlphaMeca} width={thirdSize}
                                   height={thirdSize}
                                   alt="Testimonial 02"/>
                            <Image className=" object-contain" src={Burdeyron} width={thirdSize}
                                   height={thirdSize}
                                   alt="Testimonial 03"/>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}