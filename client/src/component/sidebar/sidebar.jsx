import "./sidebar.css";
import {useEffect, useState} from "react";
import axios from "axios"
import {Link} from "react-router-dom";

export default function Sidebar() {
    const [cats, setCats] =useState([]);

    useEffect(()=>{
        const getCats = async ()=>
        {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem"> 
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg"
                    src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c,index)=>(
                        <Link to={`/?cat=${c.name}`}  key={index} className="link">
                         <li className="sidebarListItem" >{c.name} </li>
                        </Link>
                       

                    ))}
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                </div>
            </div>
        </div>

    );

}