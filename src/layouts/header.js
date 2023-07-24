import { Link, useNavigate } from "react-router-dom"
import "./header.scss"
import logo from "../assets/images/rm.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

export const Header=(props)=>
{
    const [userName,setUserName]=useState("");
    let nav =useNavigate();
    let newTab=[...props.tabInfo];
    console.log(newTab);
    console.log(...props.tabInfo);
    console.log(props.matchFound);
    console.log(props.matchFound);

        const deconnexion =(e)=>
        {
            for (let i = 0; i < newTab.length; i++) {
                let element = newTab[i];
                if(element.etat==true)
                {
                    element.etat=false;
                    props.setMatchFound(false);

                }
                setUserName(element.nom);
            }
            console.log(newTab);
        }



return(
<>
<div className="headers">
<div className="header">

<div className="logo">
<img src={logo} alt="" srcset="" onClick={()=>{nav("/")}}/>
</div>

<div className="parent">

<div className="profil">
{
newTab.map((e,i)=>
<>
{
    e.etat==true?
    <>
       {e.nom} {e.prenom}
    </>
    :
    <>
    </>
}
</>
)
}

</div>

<div className="panier" onClick={()=>
    nav("/panier")

}
>
<FontAwesomeIcon icon={faBasketShopping} />
</div>

<div className= {
    props.matchFound==false?
    "deconnexion d-none"
    :
    "deconnexion"
}
 onClick={

    deconnexion

}>
    Deconnexion
</div>

<div className={props.matchFound==true?
"login d-none"
:
"login"
} onClick={(e)=>
{
    nav("/authentification")
    console.log(e.target.parentElement.children[3]);
    // e.target.style.display="none"
    // props.matchFound==false?
    // e.target.parentElement.children[3].style.display="none"
    // :
    // e.target.parentElement.children[3].style.display="flex"

}}>
Login
</div>

<div className={props.matchFound==true?
"signup d-none"
:
"signup"
}  onClick={()=>
{
    nav("/inscrire")
}}>
Sign up
</div>
<div className="search">

</div>
</div>


</div>

</div>
</>
)
}