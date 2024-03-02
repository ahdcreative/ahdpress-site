import Link from "next/link";
import {useRouter} from "next/router";

export type LinkProps = {
    name: string,
    path: string,
    external?: boolean,
    className?: string
};


export const NavLink = ({name, path, external, className}: LinkProps) => (
    <li className={`w-full cursor-pointer list-none transition hover:text-hibiscus-700 ${className}`}>
        {
            external ? (
                <a href={path}><p>{name}</p></a>
            ) : (
                <Link href={path}><p>{name}</p></Link>
            )
        }
    </li>
)

export const NavLinks = (props: {className?: string}) => {
    const router = useRouter();

    return (
        <span className={`flex flex-col gap-x-4 gap-y-2 md:items-center ${props.className}`}>
            {router.pathname != '/' && <NavLink name="Home" path="/" />}
            <NavLink name="Getting Started" path="/start" />
            <NavLink name="View AHDPress Source Code" external path="https://github.com/ahdcreative/ahdpress" />
            <NavLink name="AHDCreative Site" external path="https://ahd-creative.agency" />
        </span>
    );
};