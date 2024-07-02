"use client";

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ReCAPTCHA from "react-google-recaptcha";
import {toast} from "react-toastify";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false); // New state for loader
  const recaptchaRef: any = React.createRef();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    message: ''
  });
  const [files, setFiles] = useState([]);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e : any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.warning("Complétez à nouveau le CAPTCHA");
      return;
    }

    setIsLoading(true); // Start loader

    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('companyName', formData.companyName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('captchaToken', captchaToken);
    files.forEach(file => {
      formDataToSend.append('files', file);
    });

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {

        setIsLoading(false); // Stop loader
        toast.success('Email transmis');
        setFormData({ fullName: '', companyName: '', email: '', message: '' });
        setFiles([]);
        setCaptchaToken(null);
      } else {
        setIsLoading(false)
        toast.error('Erreur à l\'envoi de l\'email');

      }
    } catch (error) {
      setIsLoading(false); // Stop loader
      toast.error('Erreur à l\'envoi de l\'email');

    }
  };

  const onDrop = (acceptedFiles : any) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize: 25 * 1024 * 1024 // 25MB limit for Gmail attachments
  });

  const onCaptchaChange = (value : any) => {
    setCaptchaToken(value);
  };

  return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">Bienvenue. Nous sommes heureux de prendre contact avec vous.</h1>
            </div>
            <div className="max-w-sm mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">
                      Nom & prénom <span className="text-red-600">*</span>
                    </label>
                    <input
                        id="fullName"
                        type="text"
                        className="form-input w-full text-gray-300"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">
                      Nom de votre entreprise <span className="text-red-600">*</span>
                    </label>
                    <input
                        id="companyName"
                        type="text"
                        className="form-input w-full text-gray-300"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="form-input w-full text-gray-300"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="message">
                      Message
                    </label>
                    <textarea
                        id="message"
                        className="form-input w-full text-gray-300"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <div {...getRootProps({ className: 'dropzone' })} className="border-2 border-dashed border-gray-300 p-4 text-center">
                      <input {...getInputProps()} />
                      <p>Glissez-déposez des fichiers ici, ou cliquez pour sélectionner des fichiers</p>
                    </div>
                    <div>
                      {files.map((file : any, index) => (
                          <p key={index}>{file.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  <ReCAPTCHA
                      sitekey="6LdShgYqAAAAALquTlfuG6MTj3n_LZOqZNBUbROy"
                      onChange={onCaptchaChange}
                      ref={recaptchaRef}

                  />
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" type="submit">
                      Contact
                    </button>
                  </div>
                </div>
              </form>
              {isLoading && (
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="loader"></div>
                  </div>
              )}

            </div>
          </div>
        </div>
      </section>
  );
}
