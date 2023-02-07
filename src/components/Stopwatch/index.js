import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, minutes: 0, seconds: 0}

  onTimerCountStart = () => {
    this.unique = setInterval(this.counting, 1000)
  }

  onStartTimer = () => {
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
    this.onTimerCountStart()
  }

  onStopTimer = () => {
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
    clearInterval(this.unique)
  }

  onResetTimer = () => {
    this.setState({seconds: 0, minutes: 0, isTimerRunning: false})
    clearInterval(this.unique)
  }

  counting = () => {
    const {seconds, isTimerRunning} = this.state
    if (seconds < 59 && isTimerRunning) {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    } else if (seconds >= 59 && isTimerRunning) {
      this.setState(prevState => ({minutes: prevState.minutes + 1, seconds: 0}))
    }
  }

  render() {
    const {minutes, seconds} = this.state
    const showMinutes = minutes < 10 ? `0${minutes}` : minutes
    const showSeconds = seconds < 10 ? `0${seconds}` : seconds
    return (
      <div className="main-bg-container">
        <div className="card-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-content">
            <div className="watch-styles">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="para">Timer</p>
            </div>
            <h1>{`${showMinutes}:${showSeconds}`}</h1>
            <div className="button-group-styles">
              <button
                type="button"
                className="start-button"
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
