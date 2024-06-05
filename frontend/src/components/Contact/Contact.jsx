import './Contact.css';
import msg_icon from '../../assets/msg_icon.png';
import mail_icon from '../../assets/mail_icon.png';
import phone_icon from '../../assets/phone_icon.png';
import location_icon from '../../assets/location_icon.png';
import white_arrow from '../../assets/white_arrow.png';
import React, { useState } from 'react';

const ContactForm = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "eaf9db27-4969-4603-bad7-2834539f2677");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Mandanos un Mensaje <img src={msg_icon} alt="" /></h3>
                <p>Si tienes alguna duda o inquietud acerca de nuestros servicios, te invitamos a comunicarte con nosotros de inmediato para que puedas recibir una mejor asesoría y aclarar todas y cada una de tus dudas.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />Contacto@Siprod.dev</li>
                    <li><img src={phone_icon} alt="" />+57 389-274-18-22</li>
                    <li><img src={location_icon} alt="" />Carrera 48 N° 7-151 <br />El Poblado, Campus central</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Tu Nombre</label>
                    <input type="text" name='name' placeholder='Introduce tu Nombre' required/>
                    <label>Tu Teléfono</label>
                    <input type="tel" name='phone' placeholder='Ingresa tu número de Teléfono' required/>
                    <label>Escribe un mensaje aquí</label>
                    <textarea name="message" rows="6" placeholder='Introduce tu Mensaje' required></textarea>
                    <button type='submit' className='btn dark-btn'>Enviar Ahora <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}

export default ContactForm;
