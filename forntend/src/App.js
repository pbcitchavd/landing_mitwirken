import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Privacy from "./components/Privacy";

function App() {


    //const [data, setData] = React.useState('')

    // React.useEffect(() => {
    // //fetch('/api/')
    // fetch('http://127.0.0.1:8000/api/')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [])


  // const logos = data.img_url

    return (
        <div className="App app--fullscreen-banner">
            <h1>tesr</h1>
            <Privacy/>
            {/*<Header data={data} />*/}
            <Hero />

            {/*<Footer/>*/}
        </div>

    );
}

export default App;
