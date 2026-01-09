import shapeCircle from '../../../public/assets/img/home-09/hero/funfact-circle-shape-2.png';
import bgShape from '../../../public/assets/img/home-09/hero/funfact-bg-shape-2.png';
import { EmailIcon, MessageIcon, PhoneIcon } from '@/svg/ContactIcons';
import teamBg from '../../../public/assets/img/team/team-bg.png';
import { CareerShape } from '@/svg/HeroShape';
import { ArrowTwenty } from '@/svg/ArrowIcons';
import Image from 'next/image';
import Link from 'next/link';

const ContactHero = () => {
    return (
        <div className="tp-contact-main-ptb p-relative" style={{ backgroundImage: `url(${teamBg.src})` }}>
            <div className="tp-career-shape-1">
                <span><CareerShape /></span>
            </div>
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="ar-hero-title-box tp_fade_anim" data-delay=".3">
                            <div className="ar-about-us-4-title-box d-flex align-items-center mb-20">
                                <span className="tp-section-subtitle pre tp_fade_anim">Nous contacter</span>
                                <div className="ar-about-us-4-icon">
                                    <ArrowTwenty />
                                </div>
                            </div>
                            <h3 className="tp-career-title fs-100 pb-30">Des questions ? <br />
                                posez-les simplement, c'est <br />
                                votre foyer !</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-contact-main-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8"></div>

                        <div className="col-xl-3 col-lg-4">
                            <div className="tp-contact-main-funfact-wrap">
                                <div className="crp-hero-funfact-wrap crp-hero-funfact-bg z-index-1 p-relative tp_fade_anim ar-about-funfact-color" data-delay=".5"
                                    style={{ backgroundImage: `url(${bgShape.src})` }}>
                                    <div className="crp-hero-funfact-line d-none d-xl-inline-block"></div>
                                    <div className="crp-hero-funfact-img">
                                        <Image src={shapeCircle} alt="shape circle" />
                                    </div>
                                    <div className="ar-about-funfact-top-content">
                                        <h4>Entrer en <br /> contact !</h4>
                                    </div>
                                    <div className="ar-about-funfact-item-box mb-35">
                                        <div className="ar-about-funfact-item d-flex align-items-center">
                                            <div className="ar-about-funfact-item-icon">
                                                <span><PhoneIcon /></span>
                                            </div>
                                            <div className="ar-about-funfact-item-content">
                                                <p> Appelez-nous directement</p>
                                                <Link className="tp-line-white" href="tel:2246767430">+(1) 224 676 7430</Link>
                                            </div>
                                        </div>
                                        <div className="ar-about-funfact-item d-flex align-items-center">
                                            <div className="ar-about-funfact-item-icon">
                                                <span><EmailIcon /></span>
                                            </div>
                                            <div className="ar-about-funfact-item-content">
                                                <p>Besoin d'aide ?</p>
                                                <Link className="tp-line-white" href="mailto:agntixs@studio.com">agntixs@studio.com</Link>
                                            </div>
                                        </div>
                                        <div className="ar-about-funfact-item d-flex align-items-center">
                                            <div className="ar-about-funfact-item-icon">
                                                <span><MessageIcon /></span>
                                            </div>
                                            <div className="ar-about-funfact-item-content">
                                                <Link className="tp-line-white" href="contact.html">Démarrer le chat</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ar-about-funfact-item-bottom">
                                        <p>Voir nos <span>Politiques de remboursement</span> ou <span>FAQ</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;