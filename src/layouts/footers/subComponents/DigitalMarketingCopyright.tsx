
import { EmailIconOne } from '@/svg';
import { getCurrentYear } from '@/utils/getCurrentYear';
import Link from 'next/link';

const DigitalMarketingCopyright = () => {
    return (
        <div className="tp-copyright-2-area tp-copyright-2-border black-bg-5">
            <div className="container container-1430">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-5 col-md-6">
                        <div className="tp-copyright-2-left text-center text-md-start z-index-1">
                            <p>© {getCurrentYear()} <Link href="#">Agntix</Link>. Tous droits réservés.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                        <div className="tp-copyright-2-middle">
                            <Link href="mailto:agntix@gmail.com">
                                <span><EmailIconOne /></span>{" "}
                                agntix@gmail.com
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 col-md-6">
                        <div className="tp-copyright-2-right">
                            <div className="tp-copyright-2-menu text-md-end text-center">
                                <ul>
                                    <li><Link href="#">Politique de confidentialité </Link></li>{" "}
                                    <li><Link href="#">Conditions générales</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketingCopyright;