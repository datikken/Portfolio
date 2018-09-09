import React from 'react';

//Components
import Header from '../components/header';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

const Contact = () => {
    return (
        <div>
            <Header/>
            <NavBar/>
            <h1 className="w3-animate-zoom">Почта: tikken23@gmail.com</h1>
            <h1 className="w3-animate-zoom">Телефон: +7(900)567-97-48</h1>
            <Footer/>
        </div>
    )
}

export default Contact;