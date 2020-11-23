import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import {Frontend, Backend, Design, Tools} from "./../../components/SkillsAnimate"

import './style.scss';

class SkillsView extends Component {
  render() {
    return (
      <section className="Skills_Section container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center">Skills</h3>
            <p className="lead"></p>
          </div>
        </div>
        <BrowserRouter>
			{/* 	<div className="row">

					<nav className="col-12">
						<Link className="btn gsap-btn mr-2" to="/frontend">FrontEnd</Link>
						<Link className="btn gsap-btn mr-2" to="/backend">BackEnd</Link>
						<Link className="btn gsap-btn" to="/design">Design</Link>
						<Link className="btn gsap-btn" to="/tools">Tools</Link>
					</nav>

					<div className="col-12">
						<Route path="/frontend" exact>
							{ ({ match }) => <Frontend show={match !== null} /> }
						</Route>
						
						<Route path="/backend">
							{ ({ match }) => <Backend show={match !== null} /> }
						</Route>
						<Route path="/design">
							{ ({ match }) => <Design show={match !== null} /> }
						</Route>
						<Route path="/tools">
							{ ({ match }) => <Tools show={match !== null} /> }
						</Route>
					</div>

				</div> */}
			</BrowserRouter>
      </section>
    );
  }
}

export default SkillsView;



