import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TextArea from '../text-area/text-area';
import PageLayout from '../page-layout/page-layout';
import './App.css';

class App extends Component {
  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  changeText = text => {
    this.setState({
      text: text,
    });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="App">
        <h2>Some Title</h2>
        <Router>

        <Switch>
          <Route path="/layout">
            <PageLayout text={text} onHandleChange={this.changeText} />
          </Route>
          <Route path="/">

            <TextArea onHandleChange={this.handleChange} name='name' text={text} />
            <Link to="/layout" className='button'>Layout</Link>
          </Route>
        </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
