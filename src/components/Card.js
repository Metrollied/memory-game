import { useEffect, useState } from "react";

const Card = (props) => {

	const [cardDetails, setCardDetails] = useState(props.cardDetails);

	const onClick = () => {
		props.randomise();
		if (!cardDetails.clicked) {
			props.changeTextColor("#407f3c", "score")
			props.setScore(props.score + 1)
			setCardDetails(cardDetails => {
				return { ...cardDetails, clicked: true }
			})
		}
		else {
			props.changeTextColor("#CB0600", "score")
			props.reset();
			setCardDetails(cardDetails => {
				return { ...cardDetails, clicked: false }
			})

		}
		console.log("I am called")
		props.setCards(prevCards => {
			return { ...prevCards, [props.id]: cardDetails }
		})
	}

	useEffect(() => {
		props.setCards(prevCards => {
			return { ...prevCards, [props.id]: cardDetails }
		})
	}, [cardDetails])

	useEffect(() => {
		setCardDetails(props.cardDetails)
	}, [])

	return (
		<button className="card" onClick={onClick}>
			<img src={cardDetails.imgSrc} alt={cardDetails.cardName} />
			<p>{props.cardDetails.cardName}</p>
		</button>

	)
}


export default Card;