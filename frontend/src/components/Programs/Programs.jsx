import './Programs.css'
import program_1 from '../../assets/programs_1.png'
import program_2 from '../../assets/programs_2.png'
import program_3 from '../../assets/programs_3.png'
import program__icon_1 from '../../assets/programs_icon_1.png'
import program__icon_2 from '../../assets/programs_icon_2.png'
import program__icon_3 from '../../assets/programs_icon_3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="Programa 1" />
            <div className="caption">
                <img src={program__icon_1} alt="" />
                <p>Coordinación de equipo.</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="Programa 2" />
            <div className="caption">
                <img src={program__icon_2} alt="" />
                <p>Preparación.</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="Programa 3" />
            <div className="caption">
                <img src={program__icon_3} alt="" />
                <p>Grandes resultados.</p>
            </div>
        </div>
    </div>
  )
}

export default Programs