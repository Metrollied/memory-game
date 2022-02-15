import Card from "./components/Card";
import { useState, useEffect } from "react";


function importAll(r) {
	let images = {};
	// eslint-disable-next-line array-callback-return
	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	return images;
};

const images = importAll(require.context('./icons', false, /\.(png|jpe?g|svg|webp)$/))

const originalCards = {
	0: {
		cardName: "Apple",
		imgSrc: images["apple.svg"],
		clicked: false,
	},
	1: {
		cardName: "Bird",
		imgSrc: images["bird.svg"],
		clicked: false,
	},
	2: {
		cardName: "Bowling",
		imgSrc: images["bowling.svg"],
		clicked: false,
	},
	3: {
		cardName: "Cricket",
		imgSrc: images["cricket.svg"],
		clicked: false,
	},
	4: {
		cardName: "Headphones",
		imgSrc: images["headphones.svg"],
		clicked: false,
	},
	5: {
		cardName: "House",
		imgSrc: images["house.svg"],
		clicked: false,
		picked: false
	},
	6: {
		cardName: "Music",
		imgSrc: images["music.svg"],
		clicked: false,
	},
	7: {
		cardName: "Ship",
		imgSrc: images["ship.svg"],
		clicked: false,
	},
	8: {
		cardName: "Snowflake",
		imgSrc: images["snowflake.svg"],
		clicked: false,
	},
	9: {
		cardName: "Star",
		imgSrc: images["star.svg"],
		clicked: false,

	},
	10: {
		cardName: "Train",
		imgSrc: images["train.svg"],
		clicked: false
	},
	11: {
		cardName: "Bat",
		imgSrc: images["tt-bat.svg"],
		clicked: false
	},
	12: {
		cardName: "UFO",
		imgSrc: images["ufo.svg"],
		clicked: false
	},
	13: {
		cardName: "Umbrella",
		imgSrc: images["umbrella.svg"],
		clicked: false
	},

}

function App() {

	useEffect(() => {
		document.title = "Memory Game"
	})

	const randomSort = (a, b) => {
		return (parseInt(Math.random() * 10) % 2);
	}


	let numbers = [...Array(14).keys()];
	const [random, setRandom] = useState(numbers.sort(randomSort));
	const [cards, setCards] = useState(originalCards);
	const [score, setScore] = useState(0);
	const [highScore, setHighscore] = useState(0);


	const randomise = () => {
		setRandom(numbers.sort(randomSort))
	}

	const reset = () => {
		setScore(0);
		setCards(originalCards);
		randomise();

	}

	const changeTextColor = (color, element) => {
		let text = document.getElementById(element);
		text.style.color = color;
		setTimeout(function () {
			text.style.color = "white"
		}, 1000)
	}

	useEffect(() => {
		if (score > highScore) {
			setHighscore(score)
			changeTextColor("#407f3c", "highScore")
		}
	}, [score])

	return (
		<div className="App">
			<div id="header" >Memory Game</div>
			<div id="scoreArea">
				<p id="score">Score: {score}</p>
				<p id="highScore">Highscore: {highScore} </p>
			</div>
			<div id="cardArea">
				{[...random].map((_, i) => <Card className="card"
					key={random[i]}
					id={random[i]}
					setCards={setCards}
					cardDetails={cards[random[i]]}
					score={score}
					setScore={setScore}
					randomise={randomise}
					reset={reset}
					changeTextColor={changeTextColor}
				/>)}
			</div>
			<div id="footer">Ⓒ Oliver Crawford</div>
		</div>
	);
}

export default App;
