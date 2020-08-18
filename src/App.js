import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstText: "",
      img: "",
      secondText: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * 100);
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          img: data.data.memes[randNum].url,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    const randNum = Math.floor(Math.random() * 100);
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          img: data.data.memes[randNum].url,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstText"
            value={this.state.firstText}
            onChange={this.handleChange}
            placeholder="enter text here"
          />
          <input
            type="text"
            name="secondText"
            value={this.state.secondText}
            onChange={this.handleChange}
            placeholder="enter text here"
          />
          <button type="submit">submit</button>
        </form>
        <div>
          <h1>{this.state.firstText}</h1>
          <img src={this.state.img} alt="problem" />
          <h1>{this.state.secondText}</h1>
        </div>
      </div>
    );
  }
}

export default App;
