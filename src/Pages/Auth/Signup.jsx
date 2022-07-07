import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Container, FormControl, Heading, Input, InputGroup, InputRightElement, Text, VStack, } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../Redux/AsyncThunk/AuthService/AuthServices";

const Signup = () => {
  const [show, setshow] = useState(false);
  const [signupForm, setSignupForm] = useState({ 
		username: "",
		email: "",
		password: "",
		firstName: "",
		lastName: ""
	});
  const { username, email, password, firstName, lastName } = signupForm;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authStatus = useSelector(state => state.auth.authStatus)

  const SignupHandler =  (e) => {
    if (username && firstName && lastName && email && password) {
      e.preventDefault();
      dispatch(signupUser(signupForm));
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
          <Heading color="primary">Register</Heading>
          <FormControl>
            <VStack spacing={4}>
							<Input
                placeholder='First name'
                fontFamily='Poppins, sans-serif'
                w="20rem"
                id="firstName"
                value={firstName}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, firstName: e.target.value })
                }
                required
              />
							<Input
                placeholder='Last name'
                fontFamily='Poppins, sans-serif'
                w="20rem"
                id="lastName"
                value={lastName}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, lastName: e.target.value })
                }
                required
              />
							<Input
                placeholder='Email address'
                fontFamily='Poppins, sans-serif'
                w="20rem"
                id="email"
                value={email}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, email: e.target.value })
                }
                required
              />
              <Input
                placeholder='Username'
                fontFamily='Poppins, sans-serif'
                w="20rem"
                id="username"
                value={username}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, username: e.target.value })
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
                  onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value }) }
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
              <Button w='100%' type="submit" bg='primary' color='white' onClick={SignupHandler}>  Register </Button>
              <Text fontSize="md"> Already registered ? 
                <NavLink to="/login"> <strong style={{ borderBottom: "2px solid blue" }}> Go to login </strong>  </NavLink>
              </Text>
            </VStack>
          </FormControl>
        </VStack>
    </Container>
  );
};

export default Signup;