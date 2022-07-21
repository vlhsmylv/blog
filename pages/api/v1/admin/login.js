import users from "../../../../data/users.json";
import {sign} from "jsonwebtoken";
import JWT_SECRET from "../../../../env/JWT_SECRET";
import cookieCutter from "cookie-cutter";

export default async function handler(req, res) {
    const {email, password} = req.body;

    const foundByEmail = users[users.findIndex(user => (
        user.email === email
    ))]

    if(foundByEmail === undefined) {
        return res.status(200).json({
            err: true,
            message: "Email or password is wrong"
        })
    }

    if(password !== foundByEmail.password) {
        return res.status(200).json({
            err: true,
            message: "Email or password is wrong"
        })
    }

    const response = await sign(
        {
            accessToAll: true
        }
    , JWT_SECRET)

    return res.status(200).json({
        isAuth: true
    });
}