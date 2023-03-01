import React from 'react'
import "./Landing2.css"
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

const Landing2 = () => {
  return (
    <div className='land'>
        <div className='lading2Text'>
            <h2>Dê um gás no seu treino</h2>
            <span>
                Quer uma ajudar para crescer, Frangolino? Não é pó de pirili pimpim, mas faz mágica. Com nossos suplementos você Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis similique quas totam sed quos provident voluptatum! Ipsum odio non earum fugiat? Iusto quo expedita dolorem molestias, asperiores suscipit quia a.
            </span>
            <Link to={"/produtos"} className='btn2'><button className='btn22'>Compre</button></Link>
        </div>
    </div>
  )
}

export default Landing2