import React from "react";


const Header = ({data}) => {

   return (
       <header className="App-header">
        {/*<img src={data.img_url} className="App-logo" alt="logo" />*/}

            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                fontSize: 'calc(16px + 2vmin)'

            }}>
                <h1>{data.title}</h1>
                <p>{data.subtitle}</p>
                <p>{data.test}</p>
                <a
                    href="https://www.pbconsult.de/impressum/"
                    target="_blank"
                    rel="noreferrer"
                >impressum</a>

            </div>
    </header>)

}

export default Header;
