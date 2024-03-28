import React from "react";
//import {useState, useEffect, createContext} from 'react'
//import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
import SEO from "../components/Seo.jsx";


const Home = ()=>{

    return(
        <>
        <SEO title="Test Title" description = "Describing the test" name="Test Page"></SEO>
        <div>
            <Link to={"/dashboard"}>Dashboard</Link>
        </div>

        </>

    )
}
export default Home;