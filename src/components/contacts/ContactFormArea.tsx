"use client"
import React, { useState } from 'react';

const ContactFormArea = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [responseType, setResponseType] = useState<'success' | 'error'>('success');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage('');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            subject: formData.get('subject') as string,
            message: formData.get('message') as string,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setResponseType('success');
                setResponseMessage(result.message || 'Message envoyé avec succès!');
                form.reset();
            } else {
                setResponseType('error');
                setResponseMessage(result.error || 'Une erreur est survenue. Veuillez réessayer.');
            }
        } catch (error) {
            setResponseType('error');
            setResponseMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
            console.error('Erreur:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="tp-contact-form-ptb pb-140">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-contact-form-wrap">
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Nom complet*</label>
                                            <input name="name" type="text" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Adresse e-mail*</label>
                                            <input name="email" type="email" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Lien du site web</label>
                                            <input name="subject" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Comment pouvons-nous vous aider ?*
                                            </label>
                                            <textarea name="message" required></textarea>
                                        </div>
                                        <div className="tp-contact-form-btn">
                                            <button 
                                                className="w-100" 
                                                type="submit" 
                                                disabled={isSubmitting}
                                            >
                                                <span>
                                                    <span className="text-1">
                                                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                                                    </span>
                                                    <span className="text-2">
                                                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                                                    </span>
                                                </span>
                                            </button>
                                            {responseMessage && (
                                                <p 
                                                    className={`ajax-response mt-5 ${
                                                        responseType === 'success' ? 'text-success' : 'text-danger'
                                                    }`}
                                                >
                                                    {responseMessage}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFormArea;