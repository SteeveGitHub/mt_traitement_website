'use client'

import { useState, useEffect } from 'react';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
            <p>Ce site utilise des cookies pour améliorer votre expérience. Acceptez-vous leur utilisation ?</p>
            <div className="mt-2">
                <button onClick={handleAccept} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                    Accepter
                </button>
                <button onClick={handleDecline} className="bg-red-500 text-white px-4 py-2 rounded">
                    Refuser
                </button>
            </div>
        </div>
    );
}
