'use client';
import OffCanvasPanel from "@/components/offcanvas/OffCanvasPanel";
import { ArrowSvg, ButtonBlurFilter } from "@/svg";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import logoBlack from "../../../public/assets/img/logo/logo-black.png";
import logoWhite from "../../../public/assets/img/logo/logo-white.png";
import useStickyHeader from "../../hooks/useStickyHeader";
import NavMenus from "../subComponents/NavMenus";

const HomeMainHeader = () => {
    const [openOffCanvas, setOpenOffCanvas] = useState(false);
    const isSticky = useStickyHeader(20);

    return (
        <>
            <div className={`tp-header-area tp-header-ptb tp-header-blur sticky-white-bg
         header-transparent border-style-line tp-header-border ${isSticky ? 'header-sticky' : ''}`}>
                <div className="container container-1750">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <div className="tp-header-logo">
                                <Link href="/">
                                    <Image width={120} className="logo-white" src={logoWhite} alt="logo-white" />
                                    <Image width={120} className="logo-black d-none" src={logoBlack} alt="logo-black" />
                                </Link>
                            </div>
                        </div>
                        {/* Rest of your header content */}
                        <div className="col-xl-7 d-none d-xl-block">
                            <div className="tp-header-box text-center">
                                <div className={`tp-header-menu tp-header-dropdown dropdown-white-bg`}>
                                    <nav className="tp-mobile-menu-active">
                                        <NavMenus />
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="tp-header-right d-flex align-items-center justify-content-end">
                                <div className="tp-header-btn-box ml-25 d-flex">
                                    <Link href="/contact" className="tp-btn-black btn-red-bg">
                                        <span className="tp-btn-black-filter-blur">
                                            <ButtonBlurFilter filterId="buttonFilter" />
                                        </span>
                                        <span className="tp-btn-black-filter d-inline-flex align-items-center" style={{ filter: "url(#buttonFilter" }}>
                                            <span className="tp-btn-black-text">Démarrer un projet</span>
                                            <span className="tp-btn-black-circle">
                                                <ArrowSvg />
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* off canvas */}
            <OffCanvasPanel openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
            {/* off canvas */}
        </>
    );
};

export default HomeMainHeader;