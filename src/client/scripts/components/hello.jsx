import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button />
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.text);
    this.setState({ text: '' });
  }
}


ReactDOM.render(<Hello />, document.getElementById('hello'));
