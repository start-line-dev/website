import HomeMainAbout from '@/components/about/HomeMainAbout';
import AboutUsBanner from '@/components/banner/AboutUsBanner';
import AboutUsBrand from '@/components/brand/AboutUsBrand';
import AboutUsHero from '@/components/hero-banner/AboutUsHero';
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import AboutUsTeam from '@/components/team/AboutUsTeam';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';

const AboutUsLightMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider>
                <AnimationWrapper>
                    {/* -- Begin magic cursor -- */}
                    <div id="magic-cursor" className="cursor-bg-red-2">
                        <div id="ball"></div>
                    </div>
                    {/* Global Components */}
                    <BackToTop />
                    <InnerPageHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <main>
                                <AboutUsHero />
                                <AboutUsBrand />
                                <AboutUsBanner />
                                <HomeMainAbout bgColur='#F6F6F9' spacingCls='pb-140' />
                                <AboutUsTeam />
                            </main>
                            <HomeMainFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default AboutUsLightMain;