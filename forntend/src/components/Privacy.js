import React from "react";
import Datenschutz from "../static/img/m_datenschutz_icon.png"

const Privacy = () => {
    return (

            <div className="privacy--container">
                <a
                    href={"https://www.pbconsult.de/impressum/"}
                    target="_blank"
                    rel="noreferrer"
                    className="privacy--link"
                />

                {/*<img src={Datenschutz}  height="45" width="45"/>*/}
            </div>
    )
}

export default Privacy;
