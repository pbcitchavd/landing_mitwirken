import React from "react";
import Datenschutz from "../static/img/m_datenschutz_icon.png"

const Privacy = () => {
    return (
        <a
            href={"https://www.pbconsult.de/impressum/"}
            target="_blank"
            rel="noreferrer"

        >
            <div className="privacy--container">
                <img src={Datenschutz}  height="45" width="45"/>
            </div>
        </a>
    )
}

export default Privacy;
