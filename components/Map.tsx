"use client";

import React from 'react';

const Map = () => {
    return (
        <div id={'maps'}>
            <iframe style={{border:0}} allowFullScreen
                    className={"w-3/4 h-96 mx-auto my-8"}
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuW104P_B9EcR34qcqBGXSM8&key=AIzaSyDUri3gO5wVrj-Z81LROloHMm1cJXAaLAQ">
            </iframe>
        </div>
    );
};

export default Map;