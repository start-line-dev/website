import { ArrowTwentyTwo } from '@/svg/ArrowIcons';

const AboutModernMoving = () => {
    return (
        <div className="des-about-2-area pb-150">
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="des-text-about-us-wrap p-relative text-center">
                            <div className="des-text-shape d-flex justify-content-center align-items-center">
                                <span className="shape-1">
                                    <ArrowTwentyTwo direction='left' />
                                </span>
                                <h4 className="des-text-title">Notre Vision</h4>
                                <span className="shape-2">
                                    <ArrowTwentyTwo direction='right' />
                                </span>
                            </div>
                        </div>
                        <div className="des-about-text text-center">
                            <p>
                                Avec plus de <span>10 ans</span> d'expérience en tant que développeur Front-End et Full-Stack polyvalent,
                                j'excelle dans la création d'une large gamme de solutions, des <span>applications web dynamiques et configurateurs interactifs</span> aux <span>logiciels d'automatisation backend robustes</span>, garantissant des résultats innovants et efficaces pour tout projet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutModernMoving;