import "./cartes.scss"
import map from "../../../assets/images/map.jpg"
export const Cartes=()=>
{
    return(
        <>
        <div className="cartes">
            <div className="carte1">
                <h3>Melisa Cake</h3>
                <p>
            Boulevard Ghandi, Casablanca
+212 787 898 656
MelisaCake@example.com
© 2017 Qode Interactive,
All Rights Reserved
                </p>
            </div>

            <div className="carte2">
                <h3>
à propos de nous</h3>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde aperiam laudantium mollitia, sint beatae laborum, accusamus quas earum sequi ex ducimus pariatur, libero ipsum atque corporis officia voluptatem ipsa soluta.</p>
            </div>

<div className="carte3">
<h3>Notre patisserie partout au maroc</h3>
    <img src={map} alt="" srcset="" />
</div>
        </div>
        </>
    )
}