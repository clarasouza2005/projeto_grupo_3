import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { LayoutComponents } from "../LayoutComponents";
import RenderAPI from '../axios/config'
import {useNavigate} from 'react-router-dom'
import "./Global.css";


export const Login = () => {
const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [Alunos, setAlunos] = useState([]);

  const getAlunos = async () => {
    try {
      const response = await RenderAPI.get("/Alunos");
      const data = response.data;
      setAlunos(data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getAlunos();
  }, []);

const [state,setstate]= useState({})
  const validateUser = (e) => {
    e.preventDefault()

    const map =
    Alunos.map((user,i)=>
    {
      if(email === user.email && password === user.senha)
      {
        
      alert(`Seja Bem vindo : 
      ${user.nome}`)
      navigate('/produtos')
      setstate(user)
      return true
      }
      else
      {
        return false
      }
      
    })
    if(!(map.includes(true)))
      {
        alert('Usuário ou senha Inválido')
      }
  }
  const ApagarUsuario = (e)=> {
    e.preventDefault()

      RenderAPI.delete(`/Alunos/${state.id}`,
          
          )
          .then(function(response){
            console.log(response)
          })
          .catch(function(error){
            console.log(error);
          })
          getAlunos()
      
  }
  return (
    <LayoutComponents>
      <form className="login-form" onSubmit={(e)=>validateUser(e)} >
        <span className="login-form-title"> Bem-vindo </span>

       

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta? </span>
          <Link className="txt2" to="/cadastro">
            Criar conta.
          </Link>
          <span className="txt1">Apagar Conta </span>
          <button type='button' className="txt2 vermelho" onClick={(e)=>ApagarUsuario(e)}>
            Desejo apagar minha conta.
          </button>
        </div>
      </form>
    </LayoutComponents>
  );
};

export default Login