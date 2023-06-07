'use client'

import Image from "next/image"
import emailjs from '@emailjs/browser'
import maps from '../../public/maps/maps.png'
import styles from './contact.module.css'


export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_al3cine', 'template_959xdn3', e.target, 'rkM7IAZ65hc5EE9pT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    const confirmation = () => {
        alert('Gracias! Tu mensaje ha sido enviado')
    }
    return (

        <section className={styles.contact} >
            <div className={styles.contact_flex} id="contacto">


                <div className={styles.contact_information}>
                    <h1 ><span className={styles.color_text}>Contáctanos</span></h1>
                    <br />
                    {/* <p>If you have a request or question, {" don't "}hesitate to use the form.</p> */}

                    <p>Escribenos mediante este formulario o bien llámanos para cotizarte a uno de nuestros números a continuación:</p><br />

                    <p>Cel: 6622 39 48 84</p>
                    <p>contacto@sei-odm.com.mx</p>
                    <h2>Ingresa tus datos:</h2>

                    <br />
                    <div className={styles.inputs}>
                        <form className={styles.formulario} onSubmit={sendEmail}>
                            <input className={styles.input_text} type='text' placeholder='Nombre' name='nombre'></input><br />
                            <input className={styles.input_text} type='text' placeholder='Teléfono' name='telefono' ></input><br />
                            <input className={styles.input_text} type='text' placeholder='Correo' name='correo'></input><br /><br />
                            <textarea name="mensaje" id="" cols="50" rows="10" className={styles.form_textarea}></textarea><br />
                            <input type='submit' className={styles.form_send} value="Enviar" onClick={confirmation}></input>
                        </form>
                    </div>
                </div>
                <div>
                <div className={styles.contact_maps}>
                    <Image src={maps} alt='Esta es nuestra ubicación' />
                </div>
                </div>
            </div>
        </section>



    )
}