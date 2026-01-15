"use client"
import React from 'react';

const ContactFormArea = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                                            <input name="name" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Adresse e-mail*</label>
                                            <input name="email" type="email" />
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
                                            <textarea name="message"></textarea>
                                        </div>
                                        <div className="tp-contact-form-btn">
                                            <button className="w-100" type="submit">
                                                <span>
                                                    <span className="text-1">Envoyer le message</span>
                                                    <span className="text-2">Envoyer le message</span>
                                                </span>
                                            </button>
                                            <p className="ajax-response mt-5"></p>
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