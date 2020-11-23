import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax, TweenLite } from "gsap/all";

import './style.scss';

const startState = { autoAlpha: 0, y: -50 };

export const WebDev = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={node => TweenMax.set(node, startState)}
	addEndListener={ (node, done) => {
		TweenMax.to(node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			y: props.show ? 0 : 50,
			onComplete: done
		});
	}}
>
	{/* <div className="SkillsAnimate_Box_All_Main">
		<div className="SkillsAnimate_Box_All_Inner">
			<div className="SkillsAnimate_Box_Text">
				<h2 className="text-center mb-0">Web Development</h2>
			</div>
			<ul className="SkillsAnimate_List_UL">
				<li className="SkillsAnimate_List_LI">Js</li>
				<li className="SkillsAnimate_List_LI">Mongo</li>
				<li className="SkillsAnimate_List_LI">Bla bla</li> 
			</ul>
		</div>
	</div> */}
</Transition>;

export const Learning = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={ node => TweenLite.set(node, startState) }
	addEndListener={ (node, done) => {
		TweenLite.to(node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			y: props.show ? 0 : 50,
			onComplete: done
		});
	}}
>
	<div className="position-absolute col-12">
		<div className="col-12 mt-5">
			<div className="alert alert-success">
				<h2 className="text-center mb-0">Learning New Languages</h2>
			</div>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, suscipit consequuntur repellendus qui harum, cumque facilis quisquam, consectetur saepe doloremque ducimus? Suscipit repudiandae aut fuga.</p>
			<p>Explicabo ut ea, hic delectus iste error illo tempora molestiae facilis amet officia, repudiandae impedit praesentium labore enim doloremque optio quae sunt odit possimus repellendus.</p>
		</div>
	</div>
</Transition>;

export const Design = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={ node => TweenLite.set(node, startState) }
	addEndListener={ (node, done) => {
		TweenLite.to(node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			y: props.show ? 0 : 50,
			onComplete: done
		});
	}}
>
	<div className="position-absolute col-12">
		<div className="col-12 mt-5">
		
			<div className="alert alert-success">
				<h3 className="text-center mb-0">Design</h3>
			</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, suscipit consequuntur repellendus qui harum, cumque facilis quisquam, consectetur saepe doloremque ducimus? Suscipit repudiandae aut fuga.</p>
			<p>Explicabo ut ea, hic delectus iste error illo tempora molestiae facilis amet officia, repudiandae impedit praesentium labore enim doloremque optio quae sunt odit possimus repellendus.</p>		
		</div>
	</div>
</Transition>;

export const Tools = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={ node => TweenLite.set(node, startState) }
	addEndListener={ (node, done) => {
		TweenLite.to(node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			y: props.show ? 0 : 50,
			onComplete: done
		});
	}}
>
	<div className="position-absolute col-12">
		<div className="col-12 mt-5">
			<div className="alert alert-success">
				<h2 className="text-center mb-0">Tools</h2>
			</div>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, suscipit consequuntur repellendus qui harum, cumque facilis quisquam, consectetur saepe doloremque ducimus? Suscipit repudiandae aut fuga.</p>
			<p>Explicabo ut ea, hic delectus iste error illo tempora molestiae facilis amet officia, repudiandae impedit praesentium labore enim doloremque optio quae sunt odit possimus repellendus.</p>
		</div>
	</div>
</Transition>;
