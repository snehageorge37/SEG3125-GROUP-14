import React from "react";
import Card from "react-bootstrap/Card";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class recipe_result_card extends Component {
  render() {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Recipe card description
            </Card.Text>
            <Button variant="primary">Recipe card button</Button>
        </Card.Body>
    </Card>
  );
}
}


export default recipe_result_card;