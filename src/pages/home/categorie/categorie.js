import "./categorie.scss"
import biscuit from"../../../assets/images/cookies marocaine.jpg"
import cake from"../../../assets/images/categorie_cake.jpg"
import froide from"../../../assets/images/froide.jpg"
import chaude from"../../../assets/images/chaude.jpg"
import { NavLink, useNavigate } from "react-router-dom"

export const Categorie=()=>
{

    let naviguer=useNavigate();

        const naviguation=()=>
        {
            naviguer("/produit/biscuit")
        }
    return(
        <>
        <div className="categorie">
        <h2>Catégorie</h2>
     
            <div className="categories">
        <div className="biscuit" onClick={
            naviguation
        }>
       
            <div className="img">
                <img src={biscuit} alt="" srcset="" />
            </div>

            <h4>Biscuit</h4>
            <p>Sans Gluten , Composé à 80% de cacoa</p>

        </div>

        <div className="cake" onClick={()=>
        {
            naviguer("/produit/cake")
        }}>
        <div className="img">
                <img src={cake} alt="" srcset="" />
            </div>
            <h4>Cake</h4>
            <p>Composé à 80% de chocolat noir</p>
        </div>

        <div className="froide" onClick={()=>
        {
            naviguer("/produit/froide")
        }
        }>
        <div className="img">
                <img src={froide} alt="" srcset="" />
            </div>
            <h4>Boisson Fraiche</h4>
            <p>Composé à 60% de chocolat noir</p>
        </div>

        <div className="chaude" onClick={()=>
        {
            naviguer("/produit/chaude")
        }
        }>
        <div className="img">
                <img src={chaude} alt="" srcset="" />
            </div>

            <h4>Boisson Chaude</h4>
            <p> Chocolat Noir 100 % Cacao sans Sucre</p>
        </div>
        </div>
        </div>
        </>
    )
}