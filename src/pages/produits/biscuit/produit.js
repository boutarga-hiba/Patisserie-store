import { Footer } from "../../../layouts/footer";
import { Header } from "../../../layouts/header";
// biscuit
import fruisec from "../../../assets/images/fruitsec.jpg"
import biscui from "../../../assets/images/biscuits.jpg"
import frambois from "../../../assets/images/framboise facile.jpg"
import frais from "../../../assets/images/fraisier facile.jpg"
import marocain from "../../../assets/images/cookies marocaine.jpg"
// cake
import CakeBerrie from "../../../assets/images/chocolate-cake-with-berries-crispy-waffles.jpg";
import CakeNoir from "../../../assets/images/categorie_cake.jpg";
import Glace from "../../../assets/images/ppp.jpg";
import Tranche from "../../../assets/images/tranche-gateau-creme-fraises-rouges-fraiches-interieur-plaque-obtenir-du-sucre-poudre-fond-sombre.jpg";
import Anniv from "../../../assets/images/gateau-anniversaire-decore-fleurs.jpg";
// chaude 
import TheCitron from "../../../assets/images/the citron.jpg"
import TheRose from "../../../assets/images/the rose.jpg"
import Caramel from "../../../assets/images/caramel.jpg"
import Bonbon from "../../../assets/images/p1.jpg"
import Citron from "../../../assets/images/chaude.jpg"
// froide
import Froide from "../../../assets/images/froide.jpg"
import Coocktail from "../../../assets/images/pot-cocktail-jaune-decore-herbes-seches-fils-dessus.jpg"
import Milkshake from "../../../assets/images/milkshake-rose-gros-plan.jpg"
import Jusfraise from "../../../assets/images/jus-litchi-fruit-litchi.jpg"
import Coock from "../../../assets/images/beverage-topped-with-dried-flowers.jpg"

import "./produit.scss"
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export const Produit=(props)=>
{

   const {id} = useParams();
    // const [tabPanier,setTabPanier]=useState([])
    class Produits{
        constructor(imgP,nomP,descriptionP,prixP,categorie,titre,qte)
        {
            this.imgP=imgP;
            this.nomP=nomP;
            this.descriptionP=descriptionP;
            this.prixP=prixP;
            this.categorie=categorie;
            this.titre=titre;
            this.qte=qte;
        }
        
    }

    // & les biscuits
    let fruitsec = new Produits (fruisec,"Fruit sec","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",100,"biscuit","Les Biscuits",0);
    let biscuits = new Produits (biscui,"Brownie","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",120,"biscuit","Les Biscuits",0);
    let framboise = new Produits (frambois,"Framboise Facile","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",130,"biscuit","Les Biscuits",0)
    let fraise = new Produits (frais,"Fraisier Facile","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",80,"biscuit","Les Biscuits",0)
    let marocaine = new Produits (marocain,"Biscuit Marocaine","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",90,"biscuit","Les Biscuits",0)


    // & Cake
    let cakeBerries = new Produits (CakeBerrie,"Gateau Berry","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",500,"cake","Les Cakes",0)
    let anniversaire = new Produits (Anniv,"Cake Chocolat Noir","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",420,"cake","Les Cakes",0)
    let glaces = new Produits (Glace,"Mini Cake Glacé","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",120,"cake","Les Cakes",0)
    let miniCake = new Produits (Tranche,"Mini Cake Framboise","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",150,"cake","Les Cakes",0)
    let cakeNoires = new Produits (CakeNoir,"Mini Cake Noire","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",180,"cake","Les Cakes",0)


    // &froide
    let froide = new Produits (Froide,"Jus Orange Fraise","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",70,"froide","Les Boissons Froides",0)
    let coocktail = new Produits (Coocktail,"Coocktail Fruits","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",90,"froide","Les Boissons Froides",0)
    let jusFraise = new Produits (Jusfraise,"Jus Dragon","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",60,"froide","Les Boissons Froides",0)
    let coock = new Produits (Coock,"Cookctail","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",97,"froide","Les Boissons Froides",0)
    let milkshake = new Produits (Milkshake,"Milkshake","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",50,"froide","Les Boissons Froides",0)

// &Chaude
let caramel = new Produits (Caramel,"Lait Caramel","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",80,"chaude","Les Boissons Chaudes",0)
let theRose = new Produits (TheRose,"Thé à Rose","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",80,"chaude","Les Boissons Chaudes",0)
let theCitron = new Produits (TheCitron,"Thé à Citron","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",70,"chaude","Les Boissons Chaudes",0)
let theTurky = new Produits (Bonbon,"Thé Turky","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",90,"chaude","Les Boissons Chaudes",0)
let Cafe = new Produits (Citron,"Café","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum maiores laborum consequatur, nobis autem animi amet ex quia, quaerat odio ut laboriosam",60,"chaude","Les Boissons Chaudes",0)

const [tabProduits,setTabProduits]=useState([fruitsec,biscuits,framboise,fraise,marocaine,cakeBerries,anniversaire,glaces,miniCake
    ,cakeNoires,froide,coocktail,jusFraise,coock,milkshake,caramel,theRose,theCitron,theTurky,Cafe]);

    const panier=(e,index)=>
    {
       
        if(e.qte>0){
            props.tabPanier.push(tabProduits[index]);
            
            const Prix = tabProduits[index].prixP;
            let prixTotal=Prix*e.qte;
            console.log(prixTotal);
            props.setSomme((prevTotal) => prevTotal + prixTotal );
            console.log(props.prevTotal);
        }
    }  
    
    
    const plus=(e,index)=>
    {
       const newTab= [...tabProduits]
        newTab[index].qte++;
        setTabProduits(newTab);
        console.log(newTab[index]);
    }

    const moins=(e,index)=>
    {
        if(e.qte>0)
        {
            const newTab= [...tabProduits]
            newTab[index].qte--;
            setTabProduits(newTab);
            console.log(newTab[index]);    
        }
        
    }

return(
<>
<Header tabInfo={props.tabInfo} setTabInfo={props.setTabInfo} matchFound={props.matchFound} setMatchFound={props.setMatchFound} />
<div className="biscui">

<div className="cartes">
{
    tabProduits.map((element,index)=>
    element.categorie==id?
    
    <>
    <div className="titre">
<h3>{element.titre}</h3>
</div>
<div className="carte">
    <h4>{element.nomP}</h4>
    <img src={element.imgP} alt="" srcset="" />
    <h5>{element.prixP} DH</h5>

    <p>{element.descriptionP}</p>

    <div className="qte">
        <button className="btn-qte" onClick={()=>
        {
            moins(element,index)
        }}>-</button>
        <h3 className="text-white">{element.qte}</h3>
        <button className="btn-qte" onClick={()=>
        {
            plus(element,index)
        }}>+</button>
    </div>

    
    <button onClick={()=>{
        panier(element,index)
    }}>Ajoutez au panier</button>

    </div>
   
    </>
    :
    <>
        
    </>
    )
}
</div>
</div>
<Footer/>
</>
);
}