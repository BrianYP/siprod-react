import './Testimonials.css';
import next_icon from '../../assets/next_icon.png';
import back_icon from '../../assets/back_icon.png';
import user_1 from '../../assets/user-1.jpg';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import { useRef } from 'react';

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Mi experiencia con SIPROD ha sido verdaderamente transformadora. Como gerente de producción en Edusity, buscaba formas de optimizar nuestros procesos y mejorar la eficiencia en toda nuestra cadena de suministro. Gracias a las investigaciones y capacitaciones proporcionadas por SIPROD, pudimos implementar estrategias innovadoras que han llevado nuestra empresa al siguiente nivel.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Santiago Fernández</h3>
                                    <span>España, Madrid</span>
                                </div>
                            </div>
                            <p>
                                Desde que mi empresa, una pequeña fábrica de muebles en Madrid, comenzó a colaborar con SIPROD, hemos experimentado un cambio notable en nuestra eficiencia y productividad. La capacitación personalizada que recibimos nos proporcionó las herramientas necesarias para optimizar nuestros procesos de producción y mejorar la gestión de nuestro inventario.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>John Smith</h3>
                                    <span>Canadá, Toronto</span>
                                </div>
                            </div>
                            <p>
                                Como director de operaciones en una empresa de tecnología en Toronto, siempre estamos buscando formas de mejorar nuestra eficiencia y calidad. Gracias a la colaboración con SIPROD, pudimos identificar áreas de mejora en nuestros procesos de producción y logística.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Carlos Silva</h3>
                                    <span>Brasil, São Paulo</span>
                                </div>
                            </div>
                            <p>
                                Como gerente de una empresa de manufactura en São Paulo, encontré en SIPROD el aliado perfecto para potenciar nuestra producción y operaciones. Sus capacitaciones especializadas nos brindaron nuevas herramientas y enfoques para optimizar nuestros procesos, lo que resultó en una mejora significativa en la eficiencia y la calidad de nuestros productos.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
