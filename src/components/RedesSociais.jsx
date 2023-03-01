import React from 'react'
import { Link } from 'react-router-dom';
import './RedesSociais.css'
import GitDark from '../assets/icons/git-dark.png';
import TtLight from '../assets/icons/tt-light.png';
import InstaLight from '../assets/icons/insta-light.png';
import FbLogo from '../assets/icons/facebook-logo.svg';
import WppLight from '../assets/icons/wpp-light.svg'
import CTLogo from '../assets/icons/CT.png'


const RedesSociais = () => {
  return (
    <div className="redes-sociais">
        <h4> Nossas Redes Sociais</h4>
        <p> Venha conhecer nossa Rede de Academias e acompanhe nossos stories para receber <strong><em>Dicas de treino</em></strong> <strong><em>Promoções</em></strong>,<strong><em> Novidades</em></strong> e<strong><em> muito mais</em></strong>.</p>
        <div className="logos">
            <a className="logo" href="https://twitter.com/senacbonsucesso"><img src={TtLight} alt="Twitter"/></a>
            <a className="logo" href="https://www.instagram.com/explore/locations/501792117/senac-rj-bonsucesso/"><img src={InstaLight} alt="Instagram"/></a>
            <a className="logo" href="https://www.whatsapp.me/+5521965762671"><img src={WppLight} alt="Whatsapp"/></a>
            <a className="logo" href="https://www.github.com/squad-10-dev/"><img src={GitDark} alt="Github"/></a>
        </div>
        <div className="containerLogo-redes-sociais">
            <Link to={'/Planos'}><img id='CT-LOGO'src={CTLogo} /></Link>
        </div>
    </div> 
  )
}

export default RedesSociais