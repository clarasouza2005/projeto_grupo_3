import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { LayoutComponents } from "../LayoutComponents";
import "./Global.css";
import RenderAPI from '../axios/config'
import axios from 'axios'


export const Cadastro = () => {

  const [Alunos, setAlunos] = useState([]);

  const getAlunos = async () => {
    try {
      const response = await RenderAPI.get("/Alunos");
      const data = response.data;
      setAlunos(data);
      setIndex(Alunos.length +1 )
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getAlunos();
  }, []);

   const [Index,setIndex] = useState()

  const envioDeCadastro = async (e)=> {
    e.preventDefault()
    
    RenderAPI.post('/Alunos',
        { 
          id:Index,
          Nome,
          Senha,
          Email
        }
        )
        .then(function(response){
          console.log(response)
        })
        .catch(function(error){
          console.log(error);
        })
        console.log(Nome,Senha,Email)
        console.log(Index)
        getAlunos()
    }
    

    

  const [Email, setEmail] = useState("");
  const [Senha, setPassword] = useState("");
  const [Nome, setName] = useState("")

  return (
    <LayoutComponents >
      <form className="login-form" onSubmit={(e)=>{envioDeCadastro(e)}}>
        <span className="login-form-title"> Criar Conta </span>

        <span className="login-form-title">
          
        </span>

        <div className="wrap-input">
          <input
            className={Nome !== "" ? "has-val input" : "input"}
            type="Nome"
            value={Nome}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
          <input
            className={Email !== "" ? "has-val input" : "input"}
            type="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={Senha !== "" ? "has-val input" : "input"}
            type="Senha"
            value={Senha}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/login">
            Acessar com Email e Senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  )
}

export default Cadastro