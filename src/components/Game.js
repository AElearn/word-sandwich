import React, { useState, useEffect } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";

const Game = (props) => {
	const { rootWord, setRootWord } = props;
	const [guessedSet, setGuessedSet] = useState(new Set());

	const onSubmit = () => {};

	return (
		<div className="text-center">
			<br />
			<span>The root word is:</span>
			<h1 className="red">{rootWord.toUpperCase()}</h1>
			<Form.Control
				placeholder="Type here"
				className="d-inline-flex p-2"
				style={{ maxWidth: "170px" }}
			/>{" "}
			<Button className="d-inline-flex p-2" onClick={onSubmit}>
				Submit
			</Button>
			<br /> <br />
			<span>You've found 0 out of 4 words.</span>
			<br /> <br />
			<ListGroup>
				<ListGroup.Item>HAPPILY</ListGroup.Item>
				<ListGroup.Item>UNHAPPY</ListGroup.Item>
				<ListGroup.Item>UNHAPPILY</ListGroup.Item>
			</ListGroup>
		</div>
	);
};

export default Game;
