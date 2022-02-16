import { useEffect, useState } from "react";

const Card = (props) => {

	const [cardDetails, setCardDetails] = useState(props.cardDetails);
	const [clicked, setClicked] = useState(props.checkClicked)

	const onClick = () => {
		props.randomise();
		if (!clicked) {
			props.changeTextColor("#407f3c", "score")
			props.setScore(props.score + 1)
			props.setCheckClicked(index => {
				return { ...index, [props.id]: true }
			})

		}
		else {
			props.changeTextColor("#CB0600", "score")
			props.reset();
		}
	}

	useEffect(() => {
		setCardDetails(props.cardDetails)
	}, [props.cardDetails])

	useEffect(() => {
		setClicked(props.checkClicked)
	}, [props.checkClicked])

	return (
		<button className="card" onClick={onClick}>
			<img src={cardDetails.imgSrc} alt={cardDetails.cardName} />
			<p>{props.cardDetails.cardName}</p>
		</button>

	)
}


export default Card;