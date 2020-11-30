import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import {WebDev, Learning, Design, Tools} from "./../../components/SkillsAnimate"

import './style.scss';

class SkillsView extends Component {	
	constructor(props) {
		super();
		this.state = {
		  bgPosition: "", //Change Background-Position to Center when someone clicks in any of the links
		  textshow : true,
		};
		this.BoxTextShow = this.BoxTextShow.bind(this);
	}

	navClick = (e) => {
		this.setState({
		  bgPosition: "Center"
		})
	}

	BoxTextShow = () => {
		this.setState((previousState) => {
		  return {
			textshow: false,
		  };
		});
	  };

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
						<Link className="Skills_Links Skills_Links_Hover" to="/webdev" onClick = {this.BoxTextShow}>WebDev</Link>
						<Link className="Skills_Links Skills_Links_Hover" to="/learning" onClick = {this.BoxTextShow}>Learning</Link>
						<Link className="Skills_Links Skills_Links_Hover" to="/design" onClick = {this.BoxTextShow}>Design</Link>
						<Link className="Skills_Links Skills_Links_Hover" to="/tools" onClick = {this.BoxTextShow}>Tools</Link>
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
		<article className="Skills_Article_End">
		{ this.state.textshow ?  <h1 className="Skills_TextEnd Skills_TextEnd_Left">In 2018 I decided to start learning how to code so I enrolled at the university in Computer Science. <br/><br/>
			In the meantime I took several online courses and watched some tutorials on the internet to get used to the syntax.<br/><br/>
			
			</h1>
		: null}			
		{ this.state.textshow ? <h1 className="Skills_TextEnd Skills_TextEnd_Right">I was mainly dedicated to web development so I made some websites to test my skills.<br/><br/>
			Later in 2020 I did a Web Development Bootcamp.<br/><br/>
			Beyond that I'm always trying to learn new languages ​​and improve the knowledge of the ones I'm already used to.<br/><br/>
			</h1> 
		: null}		
		</article>	
		{ this.state.textshow ? <h1 className="Skills_TextEnd_Final">Click on the links above to see my capabilities.
			</h1>
		: null}			
      </section>
    );
  }
}

export default SkillsView;



