import posts from "../../../../data/posts.json";

export default function handler(req, res) {
    const id = req.query.id;

    res.status(200).json(posts[posts.findIndex(post => (
        post.id === id
    ))]);
}