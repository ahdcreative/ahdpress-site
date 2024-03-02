import {ReactNode} from "react";

type ButtonProps = {
    classname?: string,
    children: ReactNode,
    onClick?: any
}

export const Button = (props: ButtonProps) => (
    <button onClick={props.onClick} type="button"
            className={`rounded-full py-3 text-xl font-bold shadow-md-dark-contrast transition focus:outline-none ${props.classname}`}>
        {props.children}
    </button>
);