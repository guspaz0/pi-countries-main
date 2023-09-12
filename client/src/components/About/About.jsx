import { AboutStyle } from "../../CSS"
import {IMAGES} from '../../assets/aptitudes';


export default function About(){

    const linkedinURL = 'https://www.linkedin.com/in/gustavo-rodolfo-paz-767951118/'
    const githubURL = 'https://github.com/guspaz0'

    const aptitudes = ['javascript', 'postgres', 'sequelize', 'react', 'redux', 'node', 'express']

    return(
    <AboutStyle>
        <h1>About</h1>
        <div className='about'>
            <div className='aboutMe'>
                <h2>About App</h2>
                <p>Este es un proyecto individual destinado a aplicar todos los conocimientos adquiridos durante el curso de Desarrollador web Full Stack de "Soy Henry".
                Dispone de un Landing page con una imagen de fondo representativa al proyecto y una breve descripcion e incluye un boton que redirigira al usuario al Home Page.
                el Home page esta compuesto por un componente "SideBar" y Home. el Sidebar contiene los menus desplegables tanto para ordenar como para filtrar. se puede ordenar los paises por orden alfabetico y por poblacion, de menor a mayor o mayor a menor.
                Contiene dos filtros el cual el primero filtra por contienente y el segundo filtra por actividades disponibles dentro de los contienentes que esten presentes en el primer filtro.
                
                </p>
                <h3>Tecnologias usadas en esta App:</h3>
            <span className='aptitudes'>
                {aptitudes.map((e,index) => {return <h5 key={index} className='imgtext'>{e}{"\n"}<img src={IMAGES[e]} alt={e}/></h5>})}
            </span>
            </div>
        </div>
        <div className='about'>
            <div className='aboutMe'>
                <h2>About Me</h2>
                <h4 lang='es'> Hola, soy un apasionado de la tecnologia de la informacion, Soy programador Full Stack Developer Junior. Puedo decir que la gran mayoria de mi experiencia laboral fue en el ambito administrativo privado en tareas relacionados a la informacion y toma de deciciones, por lo cual me identifico mas como un desarrollador orientado al Backend, aunque estoy siempre predispuesto a aprender algo nuevo</h4>
            
                <p lang='en'> Hi, i am a passionate of information tecnology, i am q full stack web developer. i can say than a lot of my labor experience belongs to private administrative enviroments in tasks relationed with information and decisions choice, after then i am more oriented to backend developer, but always im open to learn new habilities</p>
                <div className='aptitudes'>
                    <button><h5 className='imgtext'>Estoy en {"\n"}<a href={linkedinURL}><img src={IMAGES.linkedin} style={{width: '150px'}}alt='Linkedin'/></a></h5></button>
                    <button><h5 className='imgtext'>GitHub{"\n"}<a href={githubURL}><img src={IMAGES.github} alt='Linkedin'/></a></h5></button>
                </div>
            </div>
            
        </div>
    </AboutStyle>
    )
}