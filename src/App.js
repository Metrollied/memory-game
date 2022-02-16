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
	renders: 0,
	0: {
		cardName: "Apple",
		imgSrc: images["apple.svg"],
	},
	1: {
		cardName: "Bird",
		imgSrc: images["bird.svg"],
	},
	2: {
		cardName: "Bowling",
		imgSrc: images["bowling.svg"],
	},
	3: {
		cardName: "Cricket",
		imgSrc: images["cricket.svg"],
	},
	4: {
		cardName: "Headphones",
		imgSrc: images["headphones.svg"],
	},
	5: {
		cardName: "House",
		imgSrc: images["house.svg"],
	},
	6: {
		cardName: "Music",
		imgSrc: images["music.svg"]
	},
	7: {
		cardName: "Ship",
		imgSrc: images["ship.svg"],
	},
	8: {
		cardName: "Snowflake",
		imgSrc: images["snowflake.svg"],
	},
	9: {
		cardName: "Star",
		imgSrc: images["star.svg"],

	},
	10: {
		cardName: "Train",
		imgSrc: images["train.svg"],
	},
	11: {
		cardName: "Bat",
		imgSrc: images["tt-bat.svg"],
	},
	12: {
		cardName: "UFO",
		imgSrc: images["ufo.svg"],
	},
	13: {
		cardName: "Umbrella",
		imgSrc: images["umbrella.svg"],
	},

}

const checkClickedArray = {
	0: false,
	1: false,
	2: false,
	3: false,
	4: false,
	5: false,
	6: false,
	7: false,
	8: false,
	9: false,
	10: false,
	11: false,
	12: false,
	13: false,
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
	const cards = originalCards;
	const [checkClicked, setCheckClicked] = useState(checkClickedArray)
	const [score, setScore] = useState(0);
	const [highScore, setHighscore] = useState(0);


	const randomise = () => {
		setRandom(numbers.sort(randomSort))
	}

	const reset = () => {
		setCheckClicked(checkClickedArray)
		setScore(0);
		console.log("Game lost")
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
	}, [score, highScore])

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
					checkClicked={checkClicked[random[i]]}
					setCheckClicked={setCheckClicked}
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
