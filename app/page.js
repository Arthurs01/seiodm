import './globals.css'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import imageHeader from '../public/transparent/11.png'
import visionImg from '../public/header/14.jpg'
import misionImg from '../public/header/23.jpg'
import carrusel from '../public/logo/logo.png'
import progEstruct from '../public/homeImg/9.jpg'
import progEstruct2 from '../public/homeImg/10.jpg'
import progEstruct8 from '../public/homeImg/2.jpg'
import progEstruct9 from '../public/homeImg/8.jpg'
import DesHardware from '../public/transparent/1.png'
import DesHardware3 from '../public/transparent/3.png'
import DesHardware4 from '../public/transparent/4.png'
import DesHardware5 from '../public/transparent/5.png'
import whatsapp from '../public/social/whatsapp.png'
import facebook from '../public/social/face.png'


import DesSoft7 from '../public/homeImg/7.jpg'
import DesSoft6 from '../public/homeImg/6.jpg'
import electronica1 from '../public/imgs/img1.png'
import electronica2 from '../public/imgs/img2.png'

import serviciosImg from '../public/header/19.jpg'
import Contact from './contacto/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-gradient-dark'>
      <div className={styles.social}>
        <a target="_blank" rel="noopener noreferrer" href="https://facebook.com"> <Image src={facebook} width={56} height={56} alt="Acceso a mi facebook" /><br /></a><br />
        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/526622284871?text=Contactar%20con%20un%20asesor"><Image src={whatsapp} width={40} height={40} alt="Acceso a mi whatsapp" /></a>

      </div>
      <header className={styles.header}>
        <div className={styles.header_info}>
          <h1>SEI-<span className={styles.blue_color}>ODM</span></h1>
          <p>Brindamos soluciones mediante tecnología <br /> de software y Hardware</p>
          <button className={styles.header_button}><a href="#nosotros">Saber más</a></button>
        </div>

        <div className={styles.header_img}>
          {/* <Image src={imageHeader} /> */}
        </div>
      </header>

      <div className={styles.quienes_somos_background}>
        <div className={styles.quienes_somos} id='nosotros'>
          <div className={styles.quienes_somos_flex}>
            <div className={styles.quienes_somos_info}>
              <h1>Quienes somos?</h1><hr />
              <p>Nace en el año de 2006 en el estado de sonora, con el fin de poder proveer soluciones a necesidades especificas de nuestros clientes, desarrollando soluciones a la medida y bajo los estándares solicitados.</p>
            </div>
            <div className={styles.quienes_somos_carrusel}>
              <Image src={carrusel} />
            </div>
          </div>
        </div>
        <div className={styles.home_img}>
          <div className={styles.home_img_info}>
            <h2>Visión</h2>
            <hr />

            <p>Desde un inicio la visión de la empresa a sido la de generar una relación estrecha con nuestros clientes, pasando a ser un aliado y proveedor de servicios y soluciones.

            </p>
          </div>
        </div>

        <div className={styles.vision}>
          <div className={styles.vision_flex}>
            <div className={styles.vision_info}>

              <p>El proveer la solución a las necesidades del cliente</p>
              <p> El desarrollar tecnologías sustentables que puedan proveer soluciones a corto, mediano y largo plazo</p>
              <p>  Uso de la tecnología de software y Hardware para soportar los requerimientos de cada cliente</p>
              <p>Crear un vinculo con nuestros clientes y asociados</p>
            </div>
            <div className={styles.vision_img}>
              <Image src={visionImg} />
            </div>
          </div>
        </div>
        <div className={styles.vision}>
          <div className={styles.vision_flex}>
            <div className={styles.vision_img}>
              <Image src={misionImg} />

            </div>
            <div className={styles.vision_info}>

              <p>Crear alianzas estratégicas con otros proveedores para dar soluciones integradas a nuestros clientes</p>
              <p> Capacitación constante para estar siempre a la vanguardia en nuestro campo</p>
              <p>Capacitar a nuestros clientes en el uso de nuestras tecnologías u aplicaciones</p>


            </div>
          </div>
        </div>
      </div>

      <div className={styles.servicios} id='servicios'>
        <div className={styles.servicios_flex}>

          <div className={styles.asesoria_esp}><br /><br />
            <h1>Servicios</h1>
            <h2>Asesoría especializada en sistemas de prueba de productos<br />(EOL Testers)</h2><br />
            <p>-	Diseño y desarrollo de equipo<br />
              -	Implementación de equipo especializado<br />
              -	Integración de equipo<br />
              -	Automatización en sistema de prueba eléctrica<br />
              -	Automatización de pruebas de Radio Frecuencia (RF)<br /><br /><br />
            </p>
          </div>
          <div className={styles.servicios_img} >


          </div>

          <div className={styles.des_soft}>
            <h2>Ingeniería en el desarrollo de soluciones de Software</h2><br />
            <p>
              -	Aplicación de equipos de prueba en producción<br />
              -	Aplicaciones de software para rastreabilidad en productos terminados<br />
              -	Bases de datos
              -	Sistemas de control<br /><br />
            </p>
            <div className={styles.des_soft_flex}>
              <div className={styles.des_software_img}>
                <Image src={DesSoft7} width={300} height={200} />
              </div>
              <div className={styles.des_software_img}>
                <Image src={DesSoft6} width={300} height={200} />
              </div>
            </div>
          </div>

          <div className={styles.des_hardware}>
            <h2>Desarrollo de Hardware (Propietario)</h2>
            <br />
            <p>
              -	Desarrollo de PCB (circuitos impresos)
              -	Creación de Prototipos
              -	Creación de Firmware
              -	Implementación de productos
            </p>

            <div className={styles.des_hardware_flex}>
              <div className={styles.des_hardware_img}>
                <Image src={DesHardware} width={300} height={300} />
              </div>
              <div className={styles.des_hardware_img}>
                <Image src={DesHardware4} width={300} height={300} />
              </div>
              <div className={styles.des_hardware_img}>
                <Image src={DesHardware3} width={300} height={300} />
              </div>
              <div className={styles.des_hardware_img}>
                <Image src={DesHardware5} width={300} height={300} />
              </div>
            </div>
          </div>
          <div className={styles.cap_area_manufactura}>
            <br />
            <h2>Capacitación en áreas de Manufactura</h2>
          </div>
          <br />
          <div className={styles.cap_prog_estruct}>
            <h2>Capacitación en programación estructurada, <br /> instrumentación Virtual y PLC</h2>
            <br />

            <div className={styles.prog_estructurada}>
              <div className={styles.prog_estruct}>
                <Image src={progEstruct} width={300} height={200} />
              </div>
              <div className={styles.prog_estruct}>
                <Image src={progEstruct2} width={300} height={200} />
              </div>
              <div className={styles.prog_estruct}>
                <Image src={progEstruct8} width={300} height={200} />
              </div>
              <div className={styles.prog_estruct}>
                <Image src={progEstruct9} width={300} height={200} />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className={styles.electronica} style={{ padding: "50px" }}>
        <div className={styles.electronica_flex}>
        <h2 style={{ textAlign: "center" }}>Diseño de Electrónica Incorporada</h2>
        <hr /><br />

        <p>Diseño de placa: fuentes de alimentación, circuitos de alimentación, diseño analógico/digital/mixto, interfaces estándar de la industria (Ethernet, USB, PCIe, SPI, I2C, etc.)</p>
        <p>Diseño FPGA: Xilinx/Intel, SoCs, Verilog/SystemVerilog/VHDL, RTL y verificación</p>
        <p>Diseño de microcontroladores: 8 bits, ARM, gestores de arranque, bare-metal, RTOS, etc.</p>
        <br/>
        <div className={styles.electronica_imgs}>
          <div className={styles.electronica_img}><Image src={electronica1} width={350} height={250} /></div>
          <div className={styles.electronica_img}><Image src={electronica2} width={350} height={250} /></div>
        </div><br />
        <div style={{textAlign:"center"}}><br/>
        <p>Diseño de PCB: placas multicapa, enrutadas a mano, DFM</p>
        <p>Pruebas: accesorios de prueba personalizados, probadores funcionales, etc.</p>
        <p>Producción: prueba de concepto/diseños de referencia, baja producción y tiradas de volumen medio</p>
        <br/>
        </div>
        </div>
      </div>
      <Contact />
      <div className={styles.footer}>
        <div>
          <h1>Contacto</h1>
          <br />
          <p>Tel. 6622 48 84 84</p>
        </div>
        <div>
          <h1>Oficinas</h1>
          <br />
          <p>Blvd. Quiroja #45 Col. Las minitas</p>
        </div>
        <div>
          <h1>Redes sociales</h1>

          <p>Facebook</p>
          <p>Instagram</p>
        </div>
      </div>

    </main>
  )
}
