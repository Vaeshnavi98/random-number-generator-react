import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  Generate = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state

    return (
      <div className="main-div">
        <div className="div-deco">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button onClick={this.Generate} type="button">
            Generate
          </button>
          <p className="para-deco">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
