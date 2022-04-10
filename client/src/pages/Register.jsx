import styled from "styled-components";
import Footer from "../components/Footer";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url(https://images.pexels.com/photos/1467165/pexels-photo-1467165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	padding: 25px;
	width: 40%;
	background-color: white;
	border-radius: 10px;
	${(mobile, tablet({ width: "75%" }))}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	border-radius: 10px;
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder="first name"></Input>
					<Input placeholder="last name"></Input>
					<Input placeholder="username"></Input>
					<Input placeholder="email"></Input>
					<Input placeholder="password"></Input>
					<Input placeholder="confirm password"></Input>
					<Agreement>
						By creating n account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
