import { NavLink, useNavigate } from "react-router-dom";
import bgAuthentification from "../../assets/images/tour-muffins-au-sucre-poudre.jpg";
import "./authentification.scss"
import { useState } from "react";
import { Header } from "../../layouts/header";
export const Authentification=(props)=>
{
  const [inputs_email_authentification,setInputsAuthentification]=useState("")
  const [inputs_pwd_authentification,setInputsPwdAuthentification]=useState("")
  const [tableau,setTableau]=useState([]);
  const navigation=useNavigate();
  // navigation("/")
const identifier=(e)=>
{

  // let matchFound = false; // Flag variable to track if a match is found

  for (let i = 0; i < props.tabInfo.length; i++) {
    let element = props.tabInfo[i];
    // console.log(element);
    if(element.email==inputs_email_authentification && element.password==inputs_pwd_authentification)
    {
      
      // props.matchFound = true; // Set the flag to true if a match is found
      props.setMatchFound(true);
      element.etat=true;
      console.log(props.matchFound);
      navigation("/");

      break; // Exit the loop since a match is already found

    }
   
  }


  if (props.matchFound==true) {

    // console.log(e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.children[1].children[3]);
    // e.target.parentElement.parentElement.children[2].style.display="flex";

    navigation("/");
    // e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.children[1].children[3].style.display="none";
    // console.log(e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.children[1].children[4]);

    } else {
      setTimeout(() => {
        e.target.parentElement.parentElement.children[3].style.display="flex"
        // e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.children[1].children[2].style.display="none";

        setInputsAuthentification("")
        setInputsPwdAuthentification("")
        

      }, 100);
  }

}


return(
    <>
    <Header tabInfo={props.tabInfo} setTabInfo={props.setTabInfo} matchFound={props.matchFound} setMatchFound={props.setMatchFound}/>

        <div className="authentification">

        <div className="img">
          <img src={bgAuthentification} alt="" />
        </div>
        <div className="inputs_authentification">
          <h4>Inscrivez vous Maintenant</h4>

         

          <div className="email">
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" value={inputs_email_authentification} onChange={(e)=>
            {
              setInputsAuthentification(e.target.value)
            }}/>
          </div>

          <div className="pwd">
            <label htmlFor="">Mot de passe</label>
            <input type="password" name="" id="" value={inputs_pwd_authentification} onChange={(e)=>
            {
              setInputsPwdAuthentification(e.target.value)
            }}/>
          </div>

          <button onClick={(e)=>
          {
            identifier(e)
          }}>
          S'identifier
          </button>

          <div className="navigation">
            <h6>Bienvenu à Melissa Cake</h6>
            <NavLink to={"/inscrire"} className={"nav"}>Se Connecter</NavLink>
          </div>

        </div>

        <div className="finally">
            <h5>Bienvenu à Melissa Cake</h5>
            <h6> Pour accéder à la page home , veuillez cliquer sur le bouton OK</h6>
            <button><NavLink className={"btn_modal"} to={"/"}>OK</NavLink></button>
          </div>

          <div className="faux">
          <h5>Les champs sont incorrecte</h5>
            <h6> Pour essayez ecore , veuillez cliquer sur le bouton OK</h6>
            <button onClick={(e)=>
            {
              setInputsAuthentification("")
              setInputsPwdAuthentification("")
              e.target.parentElement.parentElement.children[3].style.display="none"
            }}>OK</button>
          </div> 
       
          {/* <button onClick={handleLogout}>Déconnexion</button> */}

      </div>

    </>
)
}