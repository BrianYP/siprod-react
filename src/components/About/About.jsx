import './About.css';
import about_img from '../../assets/about_img.png';
import play_icon from '../../assets/play_icon.png';

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>Sobre la Universidad</h3>
        <h2>Politecnico Colombiano Jaime Isaza Cadavid</h2>
        <p>
          En la universidad del <strong>Politecnico Jaime Isaza Cadavid</strong>, nuestro semillero de investigación en producción y operaciones ofrece sus mejores servicios para capacitar a su empresa en la producción, proporcionando una ardua investigación para definir los mejores métodos y estrategias que permitan que su empresa se coordine adecuadamente y pueda <strong>aprovechar el 100% del potencial de sus empleados,</strong> permitiendo un ámbito laboral excelente y adecuado el cual estará organizado y preparado para su gestión.
        </p>
        <br />
        <p>
          Prepárate para las mejores capacitaciones con ejemplos prácticos y comprensibles para su equipo de trabajo. Aseguraremos la mejor experiencia de aprendizaje y capacitación que podemos brindar como semillero de investigación en producción y operaciones.
        </p>
      </div>
    </div>
  );
};

export default About;
