import React from 'react'
import "./Landing01.css"
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

const Landing01 = () => {
  return (
    <div className='cont'>

        <div className='photo'></div>

        <div className='landingText'>

            <h2 className='h2Desktop'>
              Aqui seu shape fala
            </h2>
            
            <h2 className='h2Mobile'>
              Deixe o shape on
            </h2>

            <div className='sliderBody'>
              <div className="slider"></div>
            </div>
            
            <span>Em pleno 2023, e você ainda não pôs o shape em dia ? Deixa com a gente, nossa missão é fazer você viver o seu melhor. Temos planos que se adapitam as suas nescessidades e disponibilidade. Além de profissionais e sumplementação ao seu alance. </span>
            <Link to={"/planos"} className='btn1'><button className='btn11'>Conheça</button></Link>
        </div>

    </div>
  )
}

export default Landing01