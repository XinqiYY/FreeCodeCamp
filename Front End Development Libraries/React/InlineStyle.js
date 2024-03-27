class Colorful extends React.Component {
	render() {
		return (
			<div style={ {color: "red", fontSize: 72} }>
					Big Red
			</div>
		);
	}
};


// Change code above this line
const styles = {
	color: 'purple',
	fontSize: 40,
	border: '2px solid purple',
};
  
class Colorful extends React.Component {
	render() {
		// Change code below this line
		return (
		<div style={styles}>Style Me!</div>
		);
		// Change code above this line
	}
};