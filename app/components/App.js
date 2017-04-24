import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stuff: null
    };
  }

  async getChange() {
    const stuff = await change();

    this.setState({
      stuff
    });
  }

  componentWillMount() {
    this.getChange();
  }

  render() {
    return (
      <div>
        <h1>I'm App!</h1>
        {
          this.state.stuff ? (
            <span>{this.state.stuff}</span>
          ) : null
        }
      </div>
    )
  }
}

function change() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hey!');
    }, 500);
  });
}
