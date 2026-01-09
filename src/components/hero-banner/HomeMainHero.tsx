import { ArrowSvg } from "@/svg";
import Image from "next/image";
import Link from "next/link";
import bannerBg from "../../../public/assets/img/bg-wrap.png";
import heroImage from "../../../public/assets/img/home-01/hero/hero-image.png";
import heroSvg from "../../../public/assets/img/home-01/hero/hero-svg-1.svg";
const HomeMainHero = () => {
    return (
        <div className="tp-hero-area tp-hero-ptb tp-image-distortion p-relative fix z-index-1"
            style={{ backgroundImage: `url(${bannerBg.src})`, backgroundSize: "cover" }}
        >
            <div className="container container-1750">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="tp-hero-title-box">
                            <h2 className="tp-hero-title tp-char-animation">
                                Ton produit commence ici
                            </h2>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="tp-hero-content-wrap d-flex flex-xl-column justify-content-between pb-20">
                            <div className="tp-hero-info d-flex align-items-start justify-content-between tp_text_anim">
                                <p>Votre produit digital, livré clé en main.</p>
                                <span>
                                    <Link href="/contact">
                                        <ArrowSvg width="22" height="22" color="currentcolor" viewBox="0 0 22 22" pathValue="M1 21L21 1M21 1H1M21 1V21" />
                                        <ArrowSvg width="22" height="22" color="currentcolor" viewBox="0 0 22 22" pathValue="M1 21L21 1M21 1H1M21 1V21" />
                                    </Link>
                                </span>
                            </div>
                            <div className="tp-hero-more-info-wrap d-inline-flex justify-content-end tp_fade_anim" data-delay="1.5">
                                <div className="tp-hero-more-info p-relative" style={{ backgroundImage: `url(${heroSvg.src})` }}>
                                    <span className="tp-hero-line d-none d-sm-block"></span>
                                    <div className="tp-hero-avater d-flex align-items-center justify-content-between">
                                        {/* <Image src={heroAvater} alt="avater-image" /> */}
                                        <span>Tom Guastapaglia</span>
                                    </div>
                                    <p>“Nous lançons votre produit digital prêt à être vendu, optimisé pour le business.”</p>
                                    <div className="tp-hero-link text-end">
                                        <Link href="/about-us-light">More</Link>
                                    </div>
                                </div>
                            </div>
                            <Image className="tp-hero-image" src={heroImage} alt="hero-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMainHero;