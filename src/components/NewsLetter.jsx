import React,{useState,useEffect} from "react";
import RenderAPI from '../axios/config'
import './NewsLetter.css'


const NewsLetter = () => {

const [newsLetterEmail, setNewsLetterEmail] = useState();


const emailSignUp = async (e) => {
  e.preventDefault();

  RenderAPI.post(`/Alunos`,
      {
        newsLetterEmail,
        "receiveNews":true
    }
      )
      .then(function(response){
        console.log(response)
      })
      .catch(function(error){
        console.log(error);
      })
};

  return (
    <div className="NewsLetter">
      
        <form onSubmit={(e)=> emailSignUp(e)} autoComplete="false" autoCorrect="false" spellCheck='false'>
          <label htmlFor="newsletterSignup"></label>
            <input onChange={(e)=> setNewsLetterEmail(e.target.value)}
              name="newsletterSignup"
              type="e-mail"
              placeholder="Seu melhor E-mail..."
            />
          
          <label className="animate__animated animate__fadeInRightBig" htmlFor="btn-newsletterSignup">Quero Receber as melhores Promoções...</label>
            <input
              type="submit"
              value="Cadastrar-se na NewsLetter"
            />
          
        </form>

      </div>
  );
};

export default NewsLetter;
