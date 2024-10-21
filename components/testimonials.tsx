import { FaCog, FaWrench, FaShieldAlt, FaBatteryHalf, FaSolarPanel, FaWind, FaIndustry, FaCar, FaHandHoldingMedical } from 'react-icons/fa';
import { GiNuclear, GiOilPump } from 'react-icons/gi';
import { RiRocketLine } from 'react-icons/ri';

export default function Testimonials() {
    const iconSize = 80; // Taille des icônes
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Nos traitements sont utiles dans...</h2>
                        <p className="text-xl text-gray-400">
                            Nos services sont utilisés dans divers secteurs d'activité, garantissant des solutions de traitement
                            de surface adaptées à chaque industrie.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-24 justify-center">

                        <div className="flex flex-col items-center">
                            <FaWrench style={{ width: iconSize, height: iconSize }} />
                            <p className="text-lg mt-4">Horlogerie</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaHandHoldingMedical style={{ width: iconSize, height: iconSize }} />
                            <p className="text-lg mt-4">Médical</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <GiOilPump style={{ width: iconSize, height: iconSize }} />
                            <p className="text-lg mt-4">Énergie (Pétrole)</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <GiNuclear style={{ width: iconSize, height: iconSize }} />
                            <p className="text-lg mt-4">Énergie (Nucléaire)</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaSolarPanel style={{ width: iconSize, height: iconSize }} />
                            <p className="text-lg mt-4">Énergie (Solaire)</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaWind style={{ width: iconSize, height: iconSize }} />
                            <p className="text-lg mt-4">Énergie (Éolien)</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaShieldAlt style={{ width: iconSize, height: iconSize }} />
                            <p className="text-lg mt-4">Armement</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaCog style={{ width: iconSize, height: iconSize }} />
                            <p className="text-lg mt-4">Machines Industrielles</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <RiRocketLine style={{ width: iconSize, height: iconSize }} />
                            <p className="text-lg mt-4">Aéronautique</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaBatteryHalf style={{ width: iconSize, height: iconSize }} />
                            <p className="text-lg mt-4">Batteries</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaIndustry style={{ width: iconSize, height: iconSize }} />
                            <p className="text-lg mt-4">Décoratif</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaCar style={{ width: iconSize, height: iconSize }} />
                            <p className="text-lg mt-4">Industrie Automobile</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
