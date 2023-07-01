import React from "react";

function Footer() {
    let date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <p>Copyright &copy; {year}</p>
        </footer>
    );
}

export default Footer;