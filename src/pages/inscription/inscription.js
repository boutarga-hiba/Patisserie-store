import "./inscription.scss";
import bgInscription from "../../assets/images/cupcake-nature-morte.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Header } from "../../layouts/header";
export const Inscription = (props) => {

    const [inputNom,setInputNom]=useState("");
    const [inputPrenom,setInputPrenom]=useState("");
    const [inputEmail,setInputEmail]=useState("");
    const [inputPwd,setInputPwd]=useState("");
    const [etat,setEtat]=useState(false);

    console.log(inputNom);
    console.log(inputPrenom);
    console.log(inputEmail);
    console.log(inputPwd);
    const naviguer = useNavigate();
let newTab=[];


    const inscrit=(e)=>
    {
       

        if(inputEmail !="" && inputNom !="" && inputPrenom !="" && inputPwd != "")
        {
            const ObjetInscrire = {
                nom:inputNom,
                prenom:inputPrenom,
                email:inputEmail,
                password:inputPwd,
                etat:false
            }
         
                newTab=[...props.tabInfo];
                newTab.push(ObjetInscrire);
                props.setTabInfo(newTab);
                console.log(newTab);
                console.log(props.tabInfo);
                e.target.parentElement.parentElement.lastElementChild.style.display="flex";
        }else{
            e.target.parentElement.parentElement.children[2].style.display="flex";
        }
      
        for (let i = 0; i < props.tabInfo.length; i++) {
            let element = props.tabInfo[i];
            console.log(element);
            if(element.email==inputEmail)
            {
                e.target.parentElement.parentElement.children[3].style.display="flex";
                e.target.parentElement.parentElement.lastElementChild.style.display="none";
                // console.log(e.target.parentElement.parentElement.children[3]);
                setTimeout(() => {
                    e.target.parentElement.parentElement.children[3].style.display="none";
                    setInputEmail("")
                    setInputNom("")
                    setInputPwd("")
                    setInputPrenom("")
                }, 3000);
            }

        }
        
    }
  return (
    <>
        <Header tabInfo={props.tabInfo} setTabInfo={props.setTabInfo} matchFound={props.matchFound} setMatchFound={props.setMatchFound}/>

      <div className="inscrire">
        <div className="img">
          <img src={bgInscription} alt="" />
        </div>
        <div className="inputs_inscription">
          <h4>Inscrivez vous Maintenant</h4>

          <div className="nom">
            <label htmlFor="">Nom</label>
            <input type="text" name="" id="" value={inputNom}  required onChange={(e)=>
            {
                setInputNom(e.target.value);
            }
            }/>
          </div>

          <div className="prenom">
            <label htmlFor="">Prénom</label>
            <input type="text" name="" id="" value={inputPrenom} onChange={(e)=>
            {
                setInputPrenom(e.target.value);
            }}/>
          </div>

          <div className="email">
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" value={inputEmail} onChange={(e)=>
            {
                setInputEmail(e.target.value);
            }}/>
          </div>

          <div className="pwd">
            <label htmlFor="">Mot de passe</label>
            <input type="password" name="" id="" value={inputPwd} onChange={(e)=>
            {
                setInputPwd(e.target.value);
            }}/>
          </div>

          <button onClick={(e)=>
            {
                inscrit(e)
            }}>S'inscrire</button> 

          <div className="navigation">
            <h6>Bienvenu à Melissa Cake</h6>
            <NavLink to={"/authentification"} className={"nav"}>Se Connecter</NavLink>
          </div>
        </div>

       <div className="vide">
                <p>Oups! Veillez essayez de remplir toute les champs</p>
                <button onClick={(e)=>
                {
                    e.target.parentElement.parentElement.children[2].style.display="none";

                }}> OK</button>
        </div> 

        <div className="modal-existe">
                <p>Oups! le compte est déja existe , Veillez essayez encore une fois</p>
                <button onClick={()=>
                {
                    setInputEmail("")
                    setInputNom("")
                    setInputPwd("")
                    setInputPrenom("")
                    // window.location.reload()
                }}>OK</button>
        </div>

        <div className="modal_Inscription">
            <h5>Bravo Vous Avez Bien inscris</h5>
            <h6> Pour accéder à la page de connexion, veuillez cliquer sur le bouton OK</h6>
            <button><NavLink className={"btn_modal"} to={"/authentification"}>OK</NavLink></button>
          </div>
      </div>
      
    </>
  );
};
