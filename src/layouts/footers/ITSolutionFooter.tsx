import footerShape from '../../../public/assets/img/home-11/footer/footer-shape-1.png';
import logoWhite from '../../../public/assets/img/logo/logo-white.png';
import { FooterSocialIcons } from './subComponents/FooterSocialIcons';
import { getCurrentYear } from '@/utils/getCurrentYear';
import { ArrowSeven } from '@/svg/ArrowIcons';
import Image from 'next/image';
import Link from 'next/link';

const ITSolutionFooter = () => {
    return (
        <footer>
            {/* -- footer area start -- */}
            <div className="crp-footer-area it-footer-style crp-footer-bg p-relative pt-120 z-index-1">
                <div className="it-footer-shape">
                    <Image data-speed="1.1" src={footerShape} alt="footer-shape" />
                </div>
                <div className="container container-1350">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                            <div className="crp-footer-widget crp-footer-col-1 mb-90 tp_fade_anim" data-delay=".3">
                                <div className="crp-footer-logo">
                                    <Link href="/"><Image width={120} src={logoWhite} alt="logo-white" /></Link>
                                </div>
                                <p>Avec des années d'expérience et une équipe <br /> d'experts chevronnés,</p>
                                {/* footer social icons */}
                                <FooterSocialIcons className="crp-footer-social" />
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3">
                            <div className="crp-footer-widget crp-footer-col-2 mb-90 tp_fade_anim" data-delay=".5">
                                <h4 className="crp-footer-widget-title">Entreprise</h4>
                                <div className="crp-footer-widget-menu">
                                    <ul>
                                        <li><Link className="tp-line-white cream-2" href="#">Accueil</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="#">À propos</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="#">Services</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="#">Nos réalisations</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="#">Blog Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                            <div className="crp-footer-widget crp-footer-col-3 mb-90 tp_fade_anim" data-delay=".5">
                                <h4 className="crp-footer-widget-title">Services IT</h4>
                                <div className="crp-footer-widget-menu">
                                    <ul>
                                        <li><Link className="tp-line-white cream-2" href="#">Sécurité des données</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="#">Services cloud</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="#">Développement web</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="#">Conseil IT</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="#">Design UI/UX</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
                            <div className="crp-footer-widget crp-footer-col-4 mb-90 tp_fade_anim" data-delay=".7">
                                <div className="crp-footer-widget-info mb-40">
                                    <h4 className="crp-footer-widget-title">Localisation</h4>
                                    <Link className="tp-line-white cream-2" href="https://www.google.com/maps" target="_blank">
                                        Allemagne — 482 15h Street, Bureau
                                        426 Berlin, De 80500
                                    </Link>
                                </div>
                                <div className="crp-footer-widget-info">
                                    <h4 className="crp-footer-widget-title">Appelez-nous</h4>
                                    <div className="crp-footer-widget-contact">
                                        <Link className="tp-line-white cream-2" href="mailto:hello@design.com">hello@design.com</Link>
                                    </div>
                                    <div className="crp-footer-widget-contact">
                                        <Link className="tel tp-line-white cream-2 d-inline-block" href="tel:(+1)2345678910">(+1) 234 567 8910</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="colx-l-12">
                            <div className="crp-footer-big-text-wrap tp_fade_anim" data-delay=".3">
                                <Link className="crp-footer-big-text text-center" href="/contact">
                                    <span>
                                        <span className="text-1">{`Discutons-en`}</span>
                                        <span className="text-2">{`Discutons-en`}</span>
                                    </span>
                                    <i>
                                        <ArrowSeven color='currentcolor' />
                                        <ArrowSeven color='currentcolor' />
                                    </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="crp-copyright-text text-center pt-40 pb-50">
                                <p>© {getCurrentYear()} – {getCurrentYear()} | Tous droits réservés par <Link href="#"><span>Aqlova</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -- footer area end -- */}

        </footer>
    );
};

export default ITSolutionFooter;