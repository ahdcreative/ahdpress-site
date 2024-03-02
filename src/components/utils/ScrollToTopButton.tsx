import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// @ts-ignore
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

export const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const listener = () => {
            setVisible(window.scrollY > 80);
        };
        window.addEventListener('scroll', listener);

        return () => window.removeEventListener('scroll', listener);
    });

    function handleClick() {
        window.scrollTo({top: 0});
    }

    return (
        <>{
            visible && (<button
                type="button" aria-label="scroll to top" onClick={handleClick}
                className="fixed bottom-0 right-0 z-50 m-8 cursor-pointer rounded-xl bg-hibiscus-800 px-4 py-3 focus:outline-none">
                <FontAwesomeIcon icon={faArrowUp}/>
            </button>)
        }</>
    )
}