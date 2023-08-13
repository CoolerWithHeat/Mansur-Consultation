import React from 'react';
import './MainPage/css/Popup.css'
import TickImage from './MainPage/img/tick.png'
import email from './MainPage/img/email.png'
import phone from './MainPage/img/phone.png'

function Popup(PopupProperties) {
    const eventType = {
        success: <SuccessMessage/>,
        contact: <ContactDetails/>
    }
    function SuccessMessage(){
        return (
            <div className="popup-content">
                <img className='SuccessImage' src={TickImage}/>
                <br/>
                <br/>
                <p>Successfully Completed !</p>
            </div>
        )
    }

    function ContactDetails(){
        return (
            <div className="popup-content contact-details">

                <div className='InfoField contact-details'>
                    <img className='fieldImage contact-details' src={email}/>
                    <h6 className='infofieldtext contact-details'>mansurdavlatov@webster.edu</h6>
                </div>
                <br/>

                <div className='InfoField2 contact-details'>
                    <img className='fieldImage contact-details' src={phone}/>
                    <h6 className='infofieldtext contact-details'>+998 99 045 1768</h6>
                </div>

            </div>
        )
    }

    return (
        <div className="popup contact-details">
            {eventType[PopupProperties.type]}
        </div>
    );
}

export default Popup;