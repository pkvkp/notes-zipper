import React, { useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Form,Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const [loading,setLoading] = useState("")
    const navigate = useNavigate();
    

    const onSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true)
        try {
            const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,{
                email,
                password
            })
            console.log(data);
            localStorage.setItem('token',data.token)
            setLoading(false)
            navigate('/mynotes',{
              state:{id:data.id,name:data.name,email:data.email}
            })
        } catch (error) {
            setError(error.response.data.message)
            setLoading(false)
        }
    }

  return (
    <MainScreen title="Login">
      <Form onSubmit={onSubmit} className="position-relative">
        {
            error && <ErrorMessage variant="danger">{error}</ErrorMessage>
        }
        {loading && <Loading/>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
      <Row className="py-3">
        <Col>
        New User ? <Link to="/register" className="text-primary">Register Here</Link></Col>
      </Row>
    </MainScreen>
  );
};

export default Login;
