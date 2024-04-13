
import './Hero.css'
import flecha from '../../assets/right-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Conoce la mejor manera de capacitar a tu empresa</h1>
            <p>Nuestro innovador semillero de investigación en producción y operaciones está diseñado para capacitar a los participantes con las herramientas y el conocimiento necesarios para destacarse en este campo dinámico.</p>
            <button className='btn'>Explora mas <img src={flecha} alt="Flecha" /></button>
        </div>
    </div>
  )
}

export default Hero