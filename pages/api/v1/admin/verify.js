import {verify} from "jsonwebtoken";
import JWT_SECRET from "../../../../env/JWT_SECRET";

export default async function handler(req, res) {
    const response = verify(req.cookies.token, JWT_SECRET);

    if(response.accessToAll) {
        return res.status(200).json({
            isAuth: true
        })
    }
}