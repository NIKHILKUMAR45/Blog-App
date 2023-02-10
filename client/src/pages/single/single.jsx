import "./single.css";
import Sidebar from "../../component/sidebar/sidebar";

import SinglePost from "../../component/singlepost/singlePost";

export default function single(){
    return(
        <div className="single">
            <SinglePost />
            <Sidebar />
        
        </div>

    );
}