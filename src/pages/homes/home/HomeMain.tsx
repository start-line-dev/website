import HomeMainAbout from '@/components/about/HomeMainAbout';
import HomeMainHero from '@/components/hero-banner/HomeMainHero';
import HomeMainProject from '@/components/project/HomeMainProject';
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import HomeMainService from '@/components/service/HomeMainService';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HomeMainTextSlider from '@/components/text-slider/HomeMainTextSlider';
import HomeMainWork from '@/components/work/HomeMainWork';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import HomeMainHeader from '@/layouts/headers/HomeMainHeader';

const HomeMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider>
                <AnimationWrapper>
                    <div id="magic-cursor" className="cursor-white-bg">
                        <div id="ball"></div>
                    </div>
                    {/* Global Components */}
                    <BackToTop />
                    <HomeMainHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {/* Main Content Sections */}
                            <main>
                                <HomeMainHero />
                                <HomeMainAbout />
                                <HomeMainTextSlider />
                                <HomeMainService />
                                <HomeMainProject />
                                <HomeMainWork />
                            </main>
                            <HomeMainFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default HomeMain;
