import styled from "styled-components";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
function App() {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [message, setMessage] = useState(false);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTermsChange = () => {
    setTerms(!terms);
  };
  const handleLogin = () => {
    if (terms) {
      console.log("Name:", name);
      console.log("Password:", password);
    } else {
      setMessage(true);
    }
  };
  return (
    <Body>
      <Container>
        <Title>Login</Title>
        <Fields>
          <Input
            type="text"
            placeholder="Enter username"
            value={name}
            onChange={handleNameChange}
          />
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Fields>
        <CheckBoxLabel>
          <CheckBox
            type="checkbox"
            checked={terms}
            onChange={handleTermsChange}
          />
          I accept the terms and conditions
        </CheckBoxLabel>
        <LoginButton type="submit" onClick={handleLogin}>
          Login
        </LoginButton>
        {message && !terms && (
          <Message>Please accept the terms and conditions to log in.</Message>
        )}
        <Register>Dont have an account?</Register>
        <RegisterLink>Register here.</RegisterLink>
      </Container>
      <Options> Login with</Options>
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>
    </Body>
  );
}

export default App;

const Body = styled.body`
  background-image: url("./img/bg.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 90%;
  width: 30%;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  overflow: hidden;
  margin-top: 30px;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;
const Title = styled.h2`
  color: #333;
  margin-bottom: 50px;
  margin-top: 20px;
`;
const Message = styled.p`
  color: #881616;
  margin-top: 4px;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 35px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-top: 0;
  margin-bottom: 30px;
  background: transparent;
  outline: none;
  width: 250px;

  &::placeholder {
    color: #404040;
  }

  @media (max-width: 1000px) {
    padding: 5px;
    width: 95%;
  }
`;
const CheckBoxLabel = styled.label`
  display: flex;
  color: #333;
  margin: 5px 0;
  margin-top: 40px;
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;

const LoginButton = styled.button`
  background: #7b79d8;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
  font-size: 13px;
  margin-top: 10px;

  &:hover {
    background: #fff;
    color: #7b79d8;
  }
`;
const Register = styled.text`
  font-size: 15px;
  margin: 5px;
`;

const RegisterLink = styled.text`
  font-size: 15px;
  color: #232371;
  cursor: pointer;
  margin-bottom: 15px;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0 10px 0;
  width: 30%;
`;

const Icon = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  margin-top: 0;
  color: white;
  cursor: pointer;
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
const Options = styled.label`
  margin: 10px 0 0 0;
  font-size: 15px;
`;
