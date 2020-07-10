import React from 'react';
import './QuoteBox.css';
import QuotesList from '../QuoteBox/QuotesList.json';
import { Container, Button } from 'react-bootstrap';

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        let initialQuote = this.randomQuote();
        this.state = {
            quote: initialQuote.quote,
            author: initialQuote.author
        };
        this.handleClick = this.handleClick.bind(this);
    }
    // get a random quote
    randomQuote() {
        let randomIndex = Math.floor(Math.random() * QuotesList.length);
        return QuotesList[randomIndex];
    }
    // handle clicks
    handleClick() {
        let newQuote = this.randomQuote();
        this.setState({
            quote: newQuote.quote,
            author: newQuote.author
        });
    }
    // render the final quote box
    render () {
        return (
            <Container fluid={true} id="container">
                <div id="quote-box" className="card col-6">
                    <h1 id="text">"{this.state.quote}"</h1>
                    <p id="author">- {this.state.author}</p>
                    <div className="row">
                        <a className="col-2" variant="light" id="tweet-quote" href="www.twitter.com/intent/tweet">twitter-icon</a>
                        <Button onClick={this.handleClick} className="col-3" variant="light" id="new-quote">New quote</Button>
                    </div>
                </div>                  
            </Container>
        );
    }
}

export default QuoteBox;