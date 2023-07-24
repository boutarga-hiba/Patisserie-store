import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Inscription } from "./pages/inscription/inscription";
import { Authentification } from "./pages/authentification/authentification";
import { useState } from "react";
import { tab } from "@testing-library/user-event/dist/tab";
import { Header } from "./layouts/header";
import { Produit } from "./pages/produits/biscuit/produit";
import { Panier } from "./pages/panier/panier";

function App() {
  const [tabInfo,setTabInfo]=useState([{
    nom:"hiba",
    prenom:"hiba",
    email:"hiba",
    password:"hiba",
    etat:false
  }]);
  const [tabPanier,setTabPanier]=useState([])


let [matchFound,setMatchFound]=useState(false);
let [somme,setSomme]=useState(0)
  return (
    <>
    <Routes>
    <Route path="/" element={<Home tabInfo={tabInfo} setTabInfo={setTabInfo} matchFound={matchFound} setMatchFound={setMatchFound} />}></Route>
      <Route path="/produit/:id" element={<Produit tabInfo={tabInfo} setTabInfo={setTabInfo} matchFound={matchFound} setMatchFound={setMatchFound} tabPanier={tabPanier} setTabPanier={setTabPanier} somme={somme} setSomme={setSomme}/>}></Route>
      <Route path="/inscrire" element={<Inscription tabInfo ={tabInfo} setTabInfo={setTabInfo} matchFound={matchFound} setMatchFound={setMatchFound}/>}></Route>
      <Route path="/authentification" element={<Authentification tabInfo={tabInfo} setTabInfo={setTabInfo} matchFound={matchFound} setMatchFound={setMatchFound}/>}></Route>
      <Route path="/panier" element={<Panier tabInfo={tabInfo} setTabInfo={setTabInfo} matchFound={matchFound} setMatchFound={setMatchFound} tabPanier={tabPanier} setTabPanier={setTabPanier} somme={somme} setSomme={setSomme}/>}></Route>
    </Routes>
    </>
  )
}

export default App;
