import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "../../styles/Posts.module.css";

const Posts = ({limit, maxLengthOfContent}) => {
    const [posts, setPosts] = useState([]);
    
    const getPosts = async () => {
        let {data} = await axios.get("/api/v1/posts");

        if(limit !== "unlimited") {
            data.length = limit;
        }

        setPosts(data);
    }
    
    useEffect(() => {
        getPosts();
        console.log(limit)
    }, [])
    
    return (
        <div>
            {posts.length === 0 ? (
                <div>Loading</div>
            ) : (
                <div className={styles.container}>
                    {posts.map((post, i) => (
                        <Link key={i} href={`/posts/${post.id}`}>
                        <article className="bg-light border rounded" style={{
                            cursor: "pointer",
                            width: "300px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px"
                        }}>
                            <div>
                                <img src={post.image} className="border rounded" alt={post.title} style={{
                                    width: "100%",
                                    height: "140px"
                                }} />
                            </div>
                            <div className="m-2 text-center fs-4">{post.title}</div>
                            <div style={{
                                height: "50px"
                            }} className="m-2">{post.content.substring(0, maxLengthOfContent)}{post.content.length>maxLengthOfContent ? <>...</> :  <>{console.log(post.content.length)}</>}</div>
                            <small className="m-2 mb-4">{post.date}</small>
                        </article>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Posts;