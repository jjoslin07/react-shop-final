import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
	WhatsApp,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
	display: flex;
	${(mobile, tablet({ flexDirection: "column" }))}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
	${tablet({ margin: "0px 50px" })}
`;

const Logo = styled.h1`
	${(mobile, tablet({ textAlign: "center" }))}
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const SocialContainer = styled.div`
	display: flex;
	${(mobile, tablet({ justifyContent: "center" }))}
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	cursor: pointer;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
	${(mobile, tablet({ backgroundColor: "#FCF5F6" }))}
`;

const Title = styled.h3`
	margin-bottom: 30px;
	${(mobile, tablet({ textAlign: "center" }))}
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	${mobile({ justifyContent: "center" })}
	${tablet({ textAlign: "center" })}
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
	cursor: pointer;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${tablet({
		textAlign: "center",
	})}
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	cursor: pointer;
	${tablet({ justifyContent: "center" })}
`;

const Payment = styled.img`
	width: 50%;
	${mobile({ width: "100%" })}
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>SHOP.</Logo>
				<Desc>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis veniam
					dolorum maiores, a autem similique eius? Sapiente in assumenda fugiat.
					Ipsa a enim sit fugit minima cum eligendi nulla laboriosam!
				</Desc>
				<SocialContainer>
					<SocialIcon color="4267B2">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E1306C">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="1DA1F2">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="E60023">
						<Pinterest />
					</SocialIcon>
					<SocialIcon color="25D366">
						<WhatsApp />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Men's Fashion</ListItem>
					<ListItem>Women's Fashion</ListItem>
					<ListItem>Gender Neutral</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
					<ListItem>FAQ</ListItem>
					<ListItem>Contact Us</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: "10px" }} />
					1125 Watson Street, Pleasantville NJ, 08232
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} />
					+1 234-567-8910
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: "10px" }} />
					contact@react.shop
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;
