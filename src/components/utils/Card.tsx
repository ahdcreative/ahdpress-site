import {ReactNode} from "react";

type CardProps = {
    className?: string,
    bgColor?: string,
    children: ReactNode
}

export const Card = (props: CardProps) => (
    <div className={`bg-${props.bgColor} px-page max-w-2xl rounded-lg border-t-4 py-6 ${props.className}`}>
        {props.children}
    </div>
);

export const CardTitle = ({children}: CardProps) => (
    <h2 className="flex items-center">{children}</h2>
);

export const CardBody = ({children}: CardProps) => (
    <p className="mb-8">
        {children}
    </p>
)