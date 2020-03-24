import React, { Component } from 'react';

import './style.scss';

class SkillsView extends Component {
  render() {
    return (
      <section className="Skills_Section container-fluid d-flex flex-column justify-content-center">
        <div className="Skills_Box align-self-center">
          <img className="Skills_MySkills_SVG" src="./images/svg/SkillSet.svg" alt="mySkills" />
        </div>
      </section>
    );
  }
}

export default SkillsView;
