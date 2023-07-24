import "./carousel.scss"
import p1 from "../../../assets/images/p1.jpg"
import p2 from "../../../assets/images/p2.jpg"
import p3 from "../../../assets/images/p3.jpg"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

export const Carousel=()=>
{
return(
<>

<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={4000}>
            <img src={p1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={4000}>
            <img src={p2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={4000}>
            <img src={p3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="visually-hidden ">Previous</span>
        </button>
        
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="visually-hidden ">Next</span>
        </button>
        
        <div className="titre text-center">
            {/* Bon 
            appetit ! */}
            <p>            Bienvenu à Melissa Cake
</p>
        </div>
      </div>

</>
);
}