import posts from "../../../../data/posts.json"

export default function handler(req, res) {
    res.status(200).json(posts.sort((a, b) => {
        return a.dev_date - b.dev_date
    }));
}