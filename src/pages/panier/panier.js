import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../layouts/header";
import biscuit from "../../assets/images/biscuits.jpg"
import imgp from "../../assets/images/tour-muffins-au-sucre-poudre.jpg"
import "./panier.scss"
import { faX } from "@fortawesome/free-solid-svg-icons";
export const Panier=(props)=>
{
console.log(props.tabPanier);

const navig = useNavigate();
const RemoveCommande=(e,i)=>
{
    const newTab=[...props.tabPanier];
    newTab.splice(i,1);
    props.setTabPanier(newTab);
    console.log(newTab);

    const Prix = props.tabPanier[i].prixP;
            let prixTotal=Prix*e.qte;
            console.log(prixTotal);
            props.setSomme((prevTotal) => prevTotal - prixTotal );
            console.log(props.prevTotal);
}

const checkout=()=>
{
if(props.matchFound==false)
{
    navig("/authentification");
}
}

return(
<>
<Header tabInfo={props.tabInfo} setTabInfo={props.setTabInfo} matchFound={props.matchFound} setMatchFound={props.setMatchFound} />
<div className="p ">
<div className="test d-flex">
    <div className="panie w-75 h-100 overflow-y-auto">
{
    props.tabPanier.map((e,i)=>
    <>
<div className="paniez">
    <div className="product">
        <h1>Produit</h1>
        <img src={e.imgP} alt="" />
    </div>

    <div className="product">
        <h1>Prix</h1>
        <p>{e.prixP}</p>
    </div>

    <div className="product">
        <h1>Quantité</h1>
        <p>{e.qte}</p>
    </div>

    <div className="product">
        <h1>Total</h1>
        <p>{(e.prixP)*(e.qte)}</p>
    </div>
    <div className="product">
        <h1>Annulez</h1>
        <div className="cercle" onClick={()=>
        {
            RemoveCommande(e,i)
        }}>
        X
        </div>
    </div>
</div>

    </>
    
    )
}

    </div>

    <div className="img w-25 h-100 ">
    <img src={imgp} alt="" srcset="" className="h-100 w-100" />
    </div>

</div>
<div className="somme d-flex align-items-center justify-content-evenly p-2">

    <div className="w-75 h-100 d-flex align-items-center justify-content-between total p-3">
    <p className="mt-3 style">Total :
</p>
<p className="mt-3 prix">{props.somme} DH</p>
    </div>
        <button className=" h-75 rounded-pill btn-checkout" onClick={checkout}>Checkout</button>
</div>











{/* <div className="panie bg-danger">
{
    props.tabPanier.map((e,i)=>
    <>
<div className="paniez">
    <div className="product">
        <h1>Produit</h1>
        <img src={e.imgP} alt="" />
    </div>

    <div className="product">
        <h1>Prix</h1>
        <p>{e.prixP}</p>
    </div>

    <div className="product">
        <h1>Quantité</h1>
        <p>5</p>
    </div>

    <div className="product">
        <h1>Total</h1>
        <p>676 DH</p>
    </div>
    <div className="product">
        <h1>Annulez</h1>
        <div className="cercle" onClick={()=>
        {
            RemoveCommande(i)
        }}>
        X
        </div>
    </div>
</div>

    </>
    
    )
}

 </div>

<div className="img">
    <img src={imgp} alt="" srcset="" />
</div>

{/* <div className="carta">
    
</div> */} 
</div>

</>
);
}