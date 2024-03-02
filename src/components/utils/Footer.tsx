import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from "next/link";
import Image from "next/image";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faFacebook, faGithub, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Container from './Container';
import React from "react";

type IconItemProp = {
    icon: IconProp,
    href?: string
}

const currentYear = new Date().getFullYear();
export const FooterIconItem = (props: IconItemProp) => (
    <a href={props.href} aria-label={props.href} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={props.icon} size="lg" className="transition hover:text-hibiscus-700"/>
    </a>
);

export const Footer = () => (
    <footer className="bg-blue-dark-contrast py-8">
        <Container className="flex flex-col space-y-2">
            <div className="flex justify-center gap-x-4">
                <FooterIconItem icon={faGithub} href="https://github.com/ahdcreative"/>
                <FooterIconItem icon={faTwitter} href="https://twitter.com/ahd-creative"/>
                <FooterIconItem icon={faFacebook} href="https://facebook.com/ahdcreative"/>
                <FooterIconItem icon={faLinkedin} href="https://www.linkedin.com/company/53188796"/>
            </div>
            <div className="flex justify-center gap-x-4 text-center">
                <a className="hover:underline" href="https://github.com/ahdcreative/ahdpress-site" target="_blank"
                   rel="noreferrer">Source Code
                </a>
                <span className="cursor-pointer hover:underline">
                    <Link href="/tos"> Terms of Service</Link>
                </span>
                <span className="cursor-pointer hover:underline">
                    <Link href="/privacy">Privacy Policy</Link>
                </span>
            </div>
            <a className="flex justify-center" href="https://vercel.com/?utm_source=ahdcreative&utm_campaign=oss"
               target="_blank" rel="noreferrer">
                Powered by
                <span className="mx-2">
                    <Image src="/svg/vercel.svg" alt="Vercel" width={60} height={20} />
                </span>
            </a>
            <em className="text-center text-hibiscus-100">&copy; AHDCreative Web Solutions 2020 - {currentYear}</em>
        </Container>
    </footer>
);