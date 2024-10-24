"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Newsletter() {
  const [email, setEmail] = useState<string>('');

  const validEmail = new RegExp('^[\\w!#$%&\'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');

  const handleSubmit = async (e : React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (email !== '' && validEmail.test(email)) {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
          toast.success('Email transmis');
          setEmail('');
        } else {
          toast.error("Erreur à l'envoi de l'email");
        }
      } catch (error) {
        toast.error('Erreur inconnue');
      }
    } else {
      toast.error('Adresse email invalide');
    }
  };

  return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">
            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                <h3 className="text-base md:text-xl h3 text-white mb-2">Vous souhaitez être recontacté ?</h3>
                <p className="text-purple-200 text-lg">
                  Inscrivez votre mail. On s'occupe de tout &#x1F601;.
                </p>
              </div>
              <form className="w-full lg:w-1/2">
                <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                  <input
                      type="email"
                      className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300
                  rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400"
                      placeholder="Votre email..."
                      aria-label="Votre email…"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <button onClick={handleSubmit} className="btn text-purple-600 bg-purple-100 hover:bg-white shadow">
                    Contact
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}
