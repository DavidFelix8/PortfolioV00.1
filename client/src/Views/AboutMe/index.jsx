import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import ReactHover from 'react-hover';

import RainDrop from './../../components/RainDrop';

import './style.scss';

class AboutMeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textContent: true,
      contactShow: false,
    };
    this.updateContent = this.updateContent.bind(this);
  }

  updateContent = () => {
    this.setState((previousState) => {
      return {
        textContent: !this.state.textContent,
      };
    });
  };

  MoreAbout = () => {
    this.setState((previousState) => {
      return {
        contactShowMore: !this.state.contactShowMore,
      };
    });
  };

  render() {
    const optionsCursorTrueWithMargin = {
      followCursor: true,
      shiftX: 20,
      shiftY: 0,
    };
    return (
      <section id="AboutMe-Section">   
      <RainDrop/>
        <article className="AboutMe-Article d-flex">
          {this.state.textContent ? (
            <div className="AboutMe-Text-First">            
              <h3>
                <strong>
                  Hi, {'\n'}
                  My name is David Félix.
                </strong>
                {'\n'} I’m a Computer Science Student,
                {'\n'} And I’m a passionate for Web Development,
                {'\n'} I’m always looking to increase my skills, my creativity,
                {'\n'} and learn new technologies
                {'\n'} so I can create amazing projects!
              </h3>
              <h2 className="AboutMe-ContactMeHere">You can contact me here:</h2>
              <button className="AboutMe-btn-ArrowDown" onClick={this.updateContent}>
                <img
                  src="./images/arrow-circle-down-solid.svg"
                  alt="ArrowDown"
                  className="AboutMe-ArrowDown"
                />
              </button>
            </div>
          ) : (
            <div className="AboutMe-Text-Second">
              <img
                className="AboutMe-WorkingOnTheGround"
                src="./images/svg/WorkingOnTheGround.svg"
                alt="Working On The Ground"
              />
              <h2 className="AboutMe-FindMe">There are your ways to Find Me:</h2>
              <div className="AboutMe-Social d-flex justify-content-around">
                <a href="https://www.linkedin.com/in/davidmcfelix/">
                  <Image
                    className="AboutMe-Social-img"
                    src="./images/social-icons/linkedin-icon.png"
                    alt="LinkedIn"
                  />
                </a>
                <a href="https://github.com/DavidFelix8">
                  <Image
                    className="AboutMe-Social-img"
                    src="./images/social-icons/github-icon.png"
                    alt="Github"
                  />
                </a>
                <a href={`mailto:davidmcfelix@gmail.com`} target="_top">
                  <Image
                    className="AboutMe-Social-img"
                    src="./images/social-icons/email-icon.png"
                    alt="Email"
                  />
                </a>
              </div>

              <ReactHover options={optionsCursorTrueWithMargin}>
                <ReactHover.Trigger type="trigger">
                  <button className="AboutMe-btn-KnowMore" onClick={this.MoreAbout}>
                    <h5 className="AboutMe-KnowMore">In case you want to know more about me</h5>
                  </button>
                </ReactHover.Trigger>
                <ReactHover.Hover type="hover">
                  <h1 className="AboutMe-Hover-ClickMe"> Click Me </h1>
                </ReactHover.Hover>
              </ReactHover>
              {this.state.contactShowMore ? (
                <div className="AboutMe-KnowMore-Links-div">
                  <a
                    className="AboutMe-KnowMore-Links"
                    href="https://drive.google.com/file/d/1YXqwG1rPlsVzePq6SU9ShyNMjSldVJXv/view?usp=sharing"
                  >
                    Resume
                  </a>
                  <a
                    className="AboutMe-KnowMore-Links"
                    href="https://drive.google.com/file/d/1WQreTjMv0ufxzusLBi2e-bu9_mziA5Mu/view?usp=sharing"
                  >
                    Goals
                  </a>
                </div>
              ) : null}
            </div>
          )}
          <img
            className="AboutMe-SittingDesk"
            src="./images/svg/SittingDesk.svg"
            alt="SittingDesk"
          />
        </article>
      </section>
    );
  }
}

export default AboutMeView;
