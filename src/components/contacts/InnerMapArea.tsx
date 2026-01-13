import Image from 'next/image';
import mapIcon from '../../../public/assets/img/contact/map-icon.svg';

const InnerMapArea = () => {
    return (
        <div className="tp-contact-map-ptb p-relative pb-120">
            <div className="tp-contact-map-wrapper p-relative">
                <div className="tp-contact-map-icon-box">
                    <div className="tp-contact-map-icon">
                        <span><Image src={mapIcon} alt="contact image" /></span>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.274058801071!2d5.349434990139216!3d43.494996388168154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9ed751b4670b3%3A0x8efc3256881d522e!2s380%20Av.%20Augustin%20Fresnel%2C%2013100%20Aix-en-Provence%2C%20France!5e1!3m2!1sen!2sbd!4v1768227429846!5m2!1sen!2sbd" width="600" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default InnerMapArea;