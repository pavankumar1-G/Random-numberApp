// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandomNumber = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: randomNum})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="random-number-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="generate-btn"
            type="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
