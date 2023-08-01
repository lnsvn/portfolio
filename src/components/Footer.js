import React from "react";
import FooterButton from "./buttons/Footer";
import footerLinks from "../constants/footer";

function Footer () {
    const footerData = footerLinks.map((footer) => {
        return (
            <li><FooterButton title={footer.title} link={footer.link}/></li>
        )
    })

    return (
        <footer className="text-white font-rem text-xl">
            <ul className="flex justify-evenly">
            {footerData}
            </ul>
        </footer>
    )
};

export default Footer;