import React from "react";
//import {useState, useEffect, createContext} from 'react'
//import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
import SEO from "../components/Seo.jsx";


const Dashboard = ()=>{

    return(
        <>
        <SEO title="Second Test Title" description = "Describing new the test" name="Another Page"></SEO>
        <div>
            <Link to={"/home"}>Home</Link>
        </div>

        </>

    )
}
export default Dashboard;