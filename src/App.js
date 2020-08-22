import React from 'react';
import ReactCardFlip from 'react-card-flip';
import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <div className="grid-container">
      <Box title="Malkhut" titleEng="Sovereignty" desc="Thou shalt share thyself with others by expressing your authentic emotions and thoughts"/>
      <Box title="Yesod" titleEng="Foundation" desc="Thou shalt live a life filled with balance and grounded staibility"/>
      <Box title="Tiferet" titleEng="Beauty" desc="Thow shalt recognize that there is true beauty in the world and that you are part of that beauty"/>
      <Box title="Netzach" titleEng="Victory" desc="Thou shalt work with passion and energy to achieve significance"/>
      <Box title="Chesed" titleEng="Loving-kindness" desc="Thou shalt treat all of God's creatures with loving-kindness so that the world may function in harmony"/>
      <Box title="Chochma" titleEng="Wisdom" desc="Thou shalt strive to elevate your thinking to a level characterized by intutive insight, deeper perception, knowledge and good judgement"/>
      <Box title="Hod" titleEng="Commitment" desc="Thou shalt be accountable for your values and live every day with determination and perseverance"/>
      <Box title="Gevurah" titleEng="Strength" desc="Thou shalt act with discipline, restraint, fortitude, and resilience in order to overcome obstacles and live life with integrity"/>
      <Box title="Binah" titleEng="Understanding" desc="Thou shalt listen to others' thoughts and feelings and work to fully comprehend other people's ideas and beliefs"/>
      <Box title="Keter" titleEng="Crown" desc="Thou shalt recognize that all people have within them a spark of the divine"/>
      </div>
    </div>
  );
}


class Box extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        isFlipped: false
      };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="grid-item" onClick={this.handleClick}>
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">

        <div className="titleDiv">
          <p className="titleHeb">{this.props.title}</p>
          <p className="titleEng">{this.props.titleEng}</p>
        </div>

        <div>
          <p className="desc">{this.props.desc}</p>
        </div>
      </ReactCardFlip>
      </div>
    );
  }

}

export default App;
