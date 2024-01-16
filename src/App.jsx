import React, { Component } from 'react';
import './App.css';
import bg from "../public/images/bg-pattern-card.svg"

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'I\'m John Doe. Let\'s build something extraordinary together!',
      imgSrc: './images/image-victor.jpg',
      profession: 'Software Developer',
    },
    shows: false,
    lastMountedTime: 0,
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        lastMountedTime: this.state.lastMountedTime + 1,
      });
    }, 1000); // Update every 1000ms (1 second)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { person, shows, lastMountedTime } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>

        {shows && (
          <div className='card'>
            <img src={bg} alt="background" />
            <img src={person.imgSrc} alt={person.fullName} className='userImg'/>
            <div>
              <h2>{person.fullName}</h2>
              <p>{person.profession}</p>
            </div>
              <p className='bio'>{person.bio}</p>
          </div>
        )}
        <p className='timed'>Time since last mount: {lastMountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
