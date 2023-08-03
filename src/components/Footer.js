import React from "react";
import FooterButton from "./buttons/Footer";
import footerLinks from "../constants/footer";

function Footer () {
    const footerData = footerLinks.map((footer) => {
        return (
            <li key={footer.title}><FooterButton title={footer.title} link={footer.link}/></li>
        )
    })

    return (
        <footer className="text-white font-rem text-2xl font-bold">
            <ul className="flex justify-evenly py-6">
            {footerData}
            </ul>
        </footer>
    )
};

export default Footer;