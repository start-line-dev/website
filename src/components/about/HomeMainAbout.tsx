import Image from "next/image";
import aboutAvater from "../../../public/assets/img/home-01/about/about-avater.png";
import aboutShape from "../../../public/assets/img/home-01/about/about-shape-1.png";

interface aboutPropsDT {
    bgColur?: string;
    spacingCls?: string
}

const HomeMainAbout = ({ bgColur, spacingCls = "pb-120" }: aboutPropsDT) => {
    return (
        <div className={`tp-about-area pt-140 ${spacingCls}`} style={{ backgroundColor: bgColur }}>
            <div className="container">
                <div className="tp-about-box p-relative">
                    <div className="tp-about-shape-1 d-none d-md-block">
                        <Image style={{ width: "100%", height: "auto" }} src={aboutShape} alt="about-shape" />
                    </div>
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="tp-about-title-box">
                                <span className="tp-section-subtitle pre tp_fade_anim">QUI SOMMES-NOUS ?</span>
                            </div>
                        </div>

                        <div className="col-xl-9">
                            <div className="tp-about-wrap">
                                <div className="tp-about-text tp_fade_anim">
                                    <p>
                                        Des solutions digitales pensées pour le business, par des entrepreneurs.
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-xl-7 col-lg-7 col-md-12 mb-4 mb-md-0">
                                        <div className="tp-about-illustration-wrap tp_fade_anim" data-delay=".4" data-fade-from="left" data-ease="power2.out">
                                            <video
                                                className="tp-about-illustration-video"
                                                style={{ maxWidth: "600px", width: "100%", height: "auto", display: "block" }}
                                                src="/assets/video/illu.mp4"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                aria-label="Illustration animée"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-5 col-md-12">
                                        <div className="tp-about-funcact-wrap">
                                            <div className="tp-about-avater-info">
                                                <Image className="tp_fade_anim" data-delay=".3"
                                                    data-fade-from="right" style={{ width: "130px", height: "auto" }} src={aboutAvater} alt="about-avater" />
                                                <div className="tp_text_anim">
                                                    <p>Vous avez une idée, une opportunité ou un besoin métier.<br />
                                                        Nous livrons un produit digital fonctionnel, monétisable et pilotable, sans que vous ayez à gérer la technique.</p>
                                                </div>
                                            </div>
                                            {/* counter area */}
                                            {/* <HomeMainCounter /> */}
                                            {/* counter area end */}
                                        </div>
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

export default HomeMainAbout;