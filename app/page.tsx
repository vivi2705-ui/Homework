"use client"
import React from 'react'
import { useState } from "react";
import Fiche from "../component/Fiche";
import './globals.css';


const page = () => {
  const [mail, setmail] = useState("");

  const handleClick = () => {
    alert(mail);
  }
  return (
    
    
    <div className="container">
      <img src={"/OIP.webp"} className="img"/>

      <section>
        <Fiche
        nom = {"SAWADOGO"}
        prenom={"Jerielle"}
        genre={"Female"}
        competence={["React","Bootstrap","Java","Next"]}
        />

      </section>

      <div className="form-section">
        <span>Adresse mail</span>
        <input 
        type="text"
        placeholder="Email"
        value={mail}
        onChange={(e) => setmail(e.target.value)} 
        />
        <button onClick={handleClick}>Click</button>
       </div>


      </div>

  )
}
export default page;
