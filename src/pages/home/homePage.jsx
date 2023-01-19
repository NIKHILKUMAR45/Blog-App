import Header from "../../component/header/header"
import Posts from "../../component/posts/posts";
import Sidebar from "../../component/sidebar/sidebar";
import "./homepage.css";
export default function homePage(){
    return(
        <>
        <Header />
        <div className="homepage">
            <Posts />
            <Sidebar />
            
        </div>
        </>
        
        );
}