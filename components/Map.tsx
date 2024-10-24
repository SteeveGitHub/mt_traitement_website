"use client";

import React from 'react';

const Map = () => {
    return (
        <div id={'maps'}>
            <iframe width="600" height="450" style={{border:0}} load="lazy" allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuW104P_B9EcR34qcqBGXSM8&key=AIzaSyDUri3gO5wVrj-Z81LROloHMm1cJXAaLAQ">
            </iframe>
        </div>
    );
};

export default Map;