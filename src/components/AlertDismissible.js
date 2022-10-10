import { Alert, Button } from "react-bootstrap";

const AlertDismissible = (props) => {
	const {
		showAlert,
		setShowAlert,
		word,
		prefix,
		suffix,
		prefixDef,
		suffixDef,
	} = props;
	return (
		<Alert show={showAlert} variant="info">
			<Alert.Heading>{word}</Alert.Heading>
			{prefix && (
				<p>
					{prefix}: {prefixDef}
				</p>
			)}
			{suffix && (
				<p>
					-{suffix}: {suffixDef}
				</p>
			)}
			<hr />
			<div className="text-center">
				<Button onClick={() => setShowAlert(false)} variant="outline-dark">
					Close
				</Button>
			</div>
		</Alert>
	);
};

export default AlertDismissible;
