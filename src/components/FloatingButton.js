import React from 'react';
import './componentsFloatingButton.css';
import { IoLogoWhatsapp } from "react-icons/io";


const FloatingButton = ({ onClick }) => {
    return (
        <div className="floating-button" onClick={onClick}>
            <a className='zapp' href='https://api.whatsapp.com/send/?phone=5512982365360&text&type=phone_number&app_absent=0s' target="_blank" rel="noopener noreferrer" ><IoLogoWhatsapp />
            </a>

        </div>
    );
};

export default FloatingButton;
