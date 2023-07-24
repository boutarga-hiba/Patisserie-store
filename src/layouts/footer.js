import { faCake, faCoffee, faKitchenSet, faLocationPinLock, faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./footer.scss"
export const Footer=()=>
{

    return(
        <>
    <div className="footer">
    <div className="icones">

    <FontAwesomeIcon icon={faCoffee} className='icone'/>
    <FontAwesomeIcon icon={faMapLocation} className='icone'/>
    <FontAwesomeIcon icon={faCake} className='icone'/>

 </div>
</div>
        </>
    )

}
