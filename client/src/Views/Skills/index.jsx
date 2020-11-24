import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import {WebDev, Learning, Design, Tools} from "./../../components/SkillsAnimate"

import './style.scss';

class SkillsView extends Component {
	//Change Background-Position to Center when someone clicks in any of the links
	constructor(props) {
		super(props);
		this.state = {
		  bgPosition: ""
		}
	}

	navClick = (e) => {
		this.setState({
		  bgPosition: "Center"
		})
	  }

  render() {
    return (
      <section className="Skills_Section container">
        <div className="">
          <div className="">
            <h1 className="Skills_Main_Name">Skills</h1>
          </div>
        </div>
        <BrowserRouter>
		<div className="Skills_Main_Box" style={{backgroundPosition: this.state.bgPosition}}
           onClick={this.navClick}>
			<div className="Skills_Main_Box_Inner">
					<nav className="Skills_Nav">	
						<Link className="Skills_Links" to="/webdev">WebDev</Link>
						<Link className="Skills_Links" to="/learning">Learning</Link>
						<Link className="Skills_Links" to="/design">Design</Link>
						<Link className="Skills_Links" to="/tools">Tools</Link>
					</nav> 

					<div className="">
						<Route path="/webdev" exact>
							{ ({ match }) => <WebDev show={match !== null} /> }
						</Route>
						
						<Route path="/learning">
							{ ({ match }) => <Learning show={match !== null} /> }
						</Route>
						<Route path="/design">
							{ ({ match }) => <Design show={match !== null} /> }
						</Route>
						<Route path="/tools">
							{ ({ match }) => <Tools show={match !== null} /> }
						</Route>
					</div>
			</div>
		</div>
			</BrowserRouter>
      </section>
    );
  }
}

export default SkillsView;



