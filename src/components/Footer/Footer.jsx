import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <p>© {new Date().getFullYear()} SIPROD. Todos los derechos reservados.</p>
        <ul>
            <li>Terminos de Servicios</li>
            <li>Politica de Privacidad</li>
        </ul>
    </div>
  )
}

export default Footer