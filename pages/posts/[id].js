import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import "bootstrap/dist/css/bootstrap.css"

const Post = () => {
    const router = useRouter();

    const [post, setPost] = useState({});

    const getPost = async (id) => {
        const {data} = await axios.get(`/api/v1/posts/${id}`);

        setPost(data);
    }

    useEffect(() => {
        if(router.isReady) {
            getPost(router.query.id);
        }
    }, [router.isReady])

    return (
        <Layout>
            {Object.keys(post).length === 0 ? (
                <div className="text-center"> Loading... </div>
            ) : (
                <article className="m-auto" style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "600px"
                }}>
                    <div>
                        <img src={post.image} className="border rounded" alt={post.title} style={{
                            width: "100%"
                        }} />
                    </div>
                    <div className="fs-2">{post.title}</div>
                    <div className="fs-6">{post.content}</div>
                    <small>{post.date}</small>
                </article>
            )}
        </Layout>
    )
}

export default Post;