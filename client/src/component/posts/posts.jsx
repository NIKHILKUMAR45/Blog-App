import Post from "../../component/post/post";
import "./posts.css";

export default function posts({posts}) {
  return (
    <div className="posts">
      {posts.map((p,index)=>(
        <Post key={index} post={p}/>

      ))}

      
    </div>
  );
}
