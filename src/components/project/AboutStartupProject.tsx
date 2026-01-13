import Link from 'next/link';

const AboutStartupProject = () => {
    return (
        <div className="crp-project-area tp-panel-pin-area pt-140 mb-150">
            <div className="container container-1330">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="crp-project-title-box tp-panel-pin">
                            <h4 className="tp-section-title-teko fs-150 mb-50 tp_fade_anim" data-delay=".3">Nos projets <span>récents</span></h4>
                            <div className="tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                <Link className="tp-btn-yellow-border" href="/portfolio-col-3-light">
                                    <span>
                                        <span className="text-1">Voir tous les projets</span>
                                        <span className="text-2">Voir tous les projets</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="crp-project-right">
                            <div className="tp-work-item about-us-3-bg tp-panel-pin mb-15">
                                <div className="tp-work-number p-relative">
                                    <span></span>
                                    <i>01</i>
                                </div>
                                <div className="tp-work-content">
                                    <h4 className="tp-work-title">Recherche Utilisateur</h4>
                                    <p>Nous écoutons les histoires des utilisateurs pour comprendre les points de friction et donner une <br /> estimation approximative du coût et du délai</p>
                                </div>
                            </div>
                            <div className="tp-work-item about-us-3-bg tp-panel-pin mb-15">
                                <div className="tp-work-number p-relative">
                                    <span></span>
                                    <i>02</i>
                                </div>
                                <div className="tp-work-content">
                                    <h4 className="tp-work-title">Définir les Problèmes</h4>
                                    <p>Nous écoutons les histoires des utilisateurs pour comprendre les points de friction et donner une <br /> estimation approximative du coût et du délai</p>
                                </div>
                            </div>
                            <div className="tp-work-item about-us-3-bg tp-panel-pin mb-15">
                                <div className="tp-work-number p-relative">
                                    <span></span>
                                    <i>03</i>
                                </div>
                                <div className="tp-work-content">
                                    <h4 className="tp-work-title">Design & Prototype</h4>
                                    <p>Nous écoutons les histoires des utilisateurs pour comprendre les points de friction et donner une <br /> estimation approximative du coût et du délai</p>
                                </div>
                            </div>
                            <div className="tp-work-item about-us-3-bg tp-panel-pin mb-15">
                                <div className="tp-work-number p-relative">
                                    <span></span>
                                    <i>04</i>
                                </div>
                                <div className="tp-work-content">
                                    <h4 className="tp-work-title">Évaluation & Tests</h4>
                                    <p>Nous écoutons les histoires des utilisateurs pour comprendre les points de friction et donner une <br /> estimation approximative du coût et du délai</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutStartupProject;