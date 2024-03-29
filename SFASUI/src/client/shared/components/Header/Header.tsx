import React from 'react';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled, { CSSObject } from 'styled-components';
import Image from 'next/image';

import MenuIcon from 'feather-icons/dist/icons/menu.svg';
import CloseIcon from 'feather-icons/dist/icons/x.svg';

import { useAnimatedNavToggler } from 'src/client/shared/hooks/use-animated-nav-toggler';

import logo from 'src/client/images/logo-simple.svg';

const HeaderBase = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
    ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

    img {
        ${tw`w-10 mr-3`}
    }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
    ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
    ${NavLinks as unknown as CSSObject} {
        ${tw`flex flex-col items-center`}
    }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

type HeaderLightProps = {
    roundedHeaderButton?: boolean;
    logoLink?: JSX.Element;
    links?: JSX.Element[];
    className?: string;
    collapseBreakpointClass?: string;
};

export const Header = ({
    roundedHeaderButton = false,
    logoLink,
    links,
    className,
    collapseBreakpointClass = 'lg',
}: HeaderLightProps) => {
    const defaultLinks = [
        <NavLinks key={1}>
            <NavLink href="/#">Главная</NavLink>
            <NavLink href="/map">Карта</NavLink>
            <NavLink href="/search">Поиск</NavLink>
            <NavLink href="/contact-us">Контакты</NavLink>
            <PrimaryLink
                css={roundedHeaderButton ? tw`rounded-full` : undefined}
                href="/#"
            >
                Версия для слабовидящих
            </PrimaryLink>
        </NavLinks>,
    ];

    const defaultLogoLink = (
        <LogoLink href="/">
            <Image src={logo} alt="logo" />
            SPORTSMAP
        </LogoLink>
    );

    const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
    const collapseBreakpointCss =
        collapseBreakPointCssMap[collapseBreakpointClass];

    logoLink = logoLink || defaultLogoLink;
    links = links || defaultLinks;

    return (
        <HeaderBase className={className || 'header-light'}>
            <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
                {logoLink}
                {links}
            </DesktopNavLinks>

            <MobileNavLinksContainer
                css={collapseBreakpointCss.mobileNavLinksContainer}
            >
                {logoLink}
                <MobileNavLinks
                    initial={{ x: '150%', display: 'none' }}
                    animate={animation}
                    css={collapseBreakpointCss.mobileNavLinks}
                >
                    {links}
                </MobileNavLinks>
                <NavToggle
                    onClick={toggleNavbar}
                    className={showNavLinks ? 'open' : 'closed'}
                >
                    {showNavLinks ? (
                        <Image src={CloseIcon} tw="w-6 h-6" />
                    ) : (
                        <Image src={MenuIcon} tw="w-6 h-6" />
                    )}
                </NavToggle>
            </MobileNavLinksContainer>
        </HeaderBase>
    );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
    sm: {
        mobileNavLinks: tw`sm:hidden`,
        desktopNavLinks: tw`sm:flex`,
        mobileNavLinksContainer: tw`sm:hidden`,
    },
    md: {
        mobileNavLinks: tw`md:hidden`,
        desktopNavLinks: tw`md:flex`,
        mobileNavLinksContainer: tw`md:hidden`,
    },
    lg: {
        mobileNavLinks: tw`lg:hidden`,
        desktopNavLinks: tw`lg:flex`,
        mobileNavLinksContainer: tw`lg:hidden`,
    },
    xl: {
        mobileNavLinks: tw`lg:hidden`,
        desktopNavLinks: tw`lg:flex`,
        mobileNavLinksContainer: tw`lg:hidden`,
    },
};
