import {useEffect, useState} from "react";
import Header from "../../component/header/header"
import Posts from "../../component/posts/posts";
import Sidebar from "../../component/sidebar/sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";


export default function Home(){
    const [posts, setPosts] = useState([]);
    const {search}= useLocation();


    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/posts"+search);
        setPosts(res.data);
        
      };
      fetchPosts();
    }, [search]);
    
    return(
        <>
      
        <Header />
        <div className="homepage">
            <Posts posts={posts} />
            <Sidebar />
            
        </div>
        </>
        
        );
}