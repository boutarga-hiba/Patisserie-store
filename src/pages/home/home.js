import { Footer } from "../../layouts/footer"
import { Header } from "../../layouts/header"
import { Carousel } from "../../pages/home/component1/carousel"
import { Cartes } from "./cartes/carte"
import { Categorie } from "./categorie/categorie"

export const Home=(props)=>
{
    return(
        <>
    <Header tabInfo={props.tabInfo} setTabInfo={props.setTabInfo} matchFound={props.matchFound} setMatchFound={props.setMatchFound}/>
    <Carousel/>
    <Categorie tabInfo={props.tabInfo} setTabInfo={props.setTabInfo} matchFound={props.matchFound} setMatchFound={props.setMatchFound}/>
    <Cartes/>
    <Footer/>

        </>
    )
}