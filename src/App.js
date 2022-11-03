import {
	Nav,
	NavDropdown,
	Navbar,
	Container,
	Button,
	Form,
	ListGroup,
} from "react-bootstrap";
import "./App.css";
import wordsData from "./words.json";
import React, { useState, useEffect } from "react";
import AlertDismissible from "./components/AlertDismissible";

function App() {
	// Change this to the right lesson per week
	const lesson = 1;
	const [showAlert, setShowAlert] = useState(false);
	const [alertWord, setAlertWord] = useState("");
	const [rootWord, setRootWord] = useState(wordsData.roots[lesson].root);
	const [guesses, setGuesses] = useState([]);
	const [answers, setAnswers] = useState(
		wordsData.roots[lesson].words.map((e) => e.word)
	);
	const [answersInfo, setAnswersInfo] = useState(wordsData.roots[lesson].words);
	const [text, setText] = useState("");

	useEffect(() => {
		document.title = "Word Sandwich";
	});

	const startNewGame = (word) => {
		setRootWord(word);
		setGuesses([]);
		setAnswers(
			wordsData.roots
				.find((e) => e.root.toUpperCase() === word.toUpperCase())
				.words.map((e) => e.word)
		);
		setAnswersInfo(
			wordsData.roots.find((e) => e.root.toUpperCase() === word.toUpperCase())
				.words
		);
		setText("");
	};
	const onSubmit = () => {
		const newGuess = text.toUpperCase();
		if (
			answers.find((word) => word.toUpperCase() === newGuess) &&
			!guesses.find((word) => word.toUpperCase() === newGuess)
		) {
			guesses.unshift(formattedWord(newGuess));
			setText("");
		}
	};

	const formattedWord = (word) => {
		if (!word) {
			return "";
		}
		return word[0].toUpperCase() + word.substring(1).toLowerCase();
	};

	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="">Word Sandwich</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							{wordsData.roots
								.map((element, index) => {
									return (
										<NavDropdown.Item
											key={index}
											onClick={() => startNewGame(element.root)}
										>
											Lesson {Math.floor(index / 2) + 1}-{(index % 2) + 1}
										</NavDropdown.Item>
									);
								})
								.filter((element, index) => index == lesson)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<AlertDismissible
				showAlert={showAlert}
				setShowAlert={setShowAlert}
				word={formattedWord(alertWord)}
				prefix={
					answersInfo.find(
						(e) => e.word.toUpperCase() === alertWord.toUpperCase()
					)?.prefix
				}
				prefixDef={
					wordsData.prefixes.find(
						(t) =>
							t.prefix ===
							answersInfo.find(
								(e) => e.word.toUpperCase() === alertWord.toUpperCase()
							)?.prefix
					)?.definition
				}
				suffix={
					answersInfo.find(
						(e) => e.word.toUpperCase() === alertWord.toUpperCase()
					)?.suffix
				}
				suffixDef={
					wordsData.suffixes.find(
						(t) =>
							t.suffix ===
							answersInfo.find(
								(e) => e.word.toUpperCase() === alertWord.toUpperCase()
							)?.suffix
					)?.definition
				}
			/>
			<div className="text-center">
				<br />
				<span>The base/root word is:</span>
				<h1 className="red">{formattedWord(rootWord)}</h1>
				<Form.Control
					placeholder="Type here"
					className="d-inline-flex p-2"
					style={{ maxWidth: "170px" }}
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>{" "}
				<Button className="d-inline-flex p-2" onClick={() => onSubmit()}>
					Submit
				</Button>
				<br /> <br />
				<span>
					You've found {guesses.length} out of {answers.length} words.
				</span>
				<br /> <br />
				<ListGroup>
					{answersInfo.map((answer) => {
						if (guesses.find((guess) => guess === answer.word)) {
							return (
								<ListGroup.Item
									className="list-group-item-info"
									key={answer.word}
									onClick={() => {
										setAlertWord(answer.word);
										setShowAlert(true);
									}}
								>
									{answer.word}
								</ListGroup.Item>
							);
						} else {
							const hint =
								answer.prefix && answer.suffix
									? `(prefix + suffix)`
									: answer.prefix
									? `(prefix)`
									: `(suffix)`;
							return (
								<ListGroup.Item
									className="list-group-item-light"
									key={answer.word}
								>
									{hint}
								</ListGroup.Item>
							);
						}
					})}
				</ListGroup>
			</div>
		</>
	);
}

export default App;
