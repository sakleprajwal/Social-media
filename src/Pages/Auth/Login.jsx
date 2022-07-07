import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Container, FormControl, Heading, Input, InputGroup, InputRightElement, Text, VStack, } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/AsyncThunk/AuthService/AuthServices";

const Login = () => {
	const [show, setshow] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const { username, password } = loginForm;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authStatus = useSelector(state => state.auth.authStatus)

  const testCredentials = {
    username: "Prajwal",
    password: "Prajwal"
  }

  const loginWithTest = () => {
    dispatch(loginUser(testCredentials));
  }

  const LoginHandler =  (e) => {
    if (username && password) {
      e.preventDefault();
      dispatch(loginUser(loginForm));
    } else {
      console.log("Fill all fields")
    }
  };

  useEffect(()=>{
    if(authStatus === "success"){
      navigate("/", {replace: true});
    }
}, [authStatus])

  return (
    <Container height="100vh" centerContent>
        <VStack my="auto" w="max-content" spacing={4}>
          <Heading color="primary">Login</Heading>
          <FormControl>
            <VStack spacing={4}>
              <Input
                placeholder='Username'
                fontFamily='Poppins, sans-serif'
                w="20rem"
                id="username"
                value={username}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, username: e.target.value })
                }
                required
              />
              <InputGroup>
                <Input
                placeholder='Password'
                fontFamily='Poppins, sans-serif'
                  w="20rem"
                  id="password"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value }) }
                  required
                />
                <InputRightElement 
                  fontSize="1.2rem"
                  cursor="pointer"
                  onClick={() => setshow(!show)}
                  children={
                    show ? ( <ViewIcon /> ) : ( <ViewOffIcon /> )
                  }
                />
              </InputGroup>
              <Button w='100%' type="submit" bg='primary' color='white' onClick={LoginHandler}>  Login </Button>
              <Button w='100%' onClick={loginWithTest}> Enter Guest Credentials </Button>
              <Text fontSize="md"> Not a user yet ? 
                <NavLink to="/signup"> <strong style={{ borderBottom: "2px solid blue" }}> Creat Account </strong>  </NavLink>
              </Text>
            </VStack>
          </FormControl>
        </VStack>
    </Container>
  );
};

export default Login;