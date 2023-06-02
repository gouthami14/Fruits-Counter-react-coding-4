import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0}

  eatMango = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  eatBanana = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="body-container">
          <h1 className="heading">
            Bob ate {count} mangoes {count} bananas
          </h1>
          <div className="img-container">
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>
          <div className="btn-container">
            <button
              className="btn"
              className="btn-mango"
              type="button"
              onClick={this.eatMango}
            >
              Eat Mango
            </button>
            <button
              className="btn"
              className="btn-banana"
              type="button"
              onClick={this.eatBanana}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
