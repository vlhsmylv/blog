import {Form, Button, Toast} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import Layout from "../../components/layout/Layout";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {toast, ToastContainer} from "react-toastify";
import toastConfig from "../../config/toast.config";
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        if(email !== "" && password !== "") {
            const {data} = await axios.post("/api/v1/admin/login", {
                email: email,
                password: password
            });

            if(data.isAuth !== undefined) {
                if(data.isAuth) {
                    router.push('/admin/dashboard')
                }
            } else {
                toast.error(data.message, toastConfig);
            }
        }
    }

    return (
        <Layout>
            <Form className="border rounded bg-light p-2 m-auto"
                style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        width: "500px"
                    }
            } onSubmit={handleLogin}>
                <Form.Group className="fs-4">
                    Login to Admin Panel
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required={true} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required={true} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group className="text-center mb-2">
                    <Button variant="dark" type="submit" className="fs-4"
                        style={
                            {width: "150px"}
                    }>
                        Login
                    </Button>
                </Form.Group>
            </Form>
            <ToastContainer limit={1} /> 
        </Layout>
    )
}

export default Admin;
