import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax, TweenLite } from "gsap/all";

import './style.scss';

const startState = { autoAlpha: 0, y: -50 }; /*Height where it comes from*/

export const WebDev = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={ node => TweenMax.set(node, startState) }
	addEndListener={ (node, done) => {
		TweenMax.to(node, 0.5, { /*Bar time to reach local*/
			autoAlpha: props.show ? 1 : 0,
			y: props.show ? 0 : 50,
			onComplete: done
		});
	}}
>
	<div className="SkillsAnimate_Box_All_Main">
		<div className="SkillsAnimate_Box_All_Inner">
			<div className="SkillsAnimate_Box_Text_Outside">
				<h2 className="SkillsAnimate_Box_Text">Web Development</h2>
			</div>
				<h3 className="SkillsAnimate_List_Text">These are the languages that I've worked with <br /> during my time as a Student and Web Developer</h3>
					<div className="SkillsAnimate_List_All">
						<ul className="SkillsAnimate_List_UL SkillsAnimate_List_UL_Web">
							{/* First Row First Column*/}
							<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/WebDev/FrontEnd/HTML.svg" alt="HTML-Icon" className="SkillsAnimate_Icons"/>HTML</li>
							{/* Second Row First Column*/}					
							<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/WebDev/FrameWorks.Libraries.RunTimeEnv/React.svg" alt="React-Icon" className="SkillsAnimate_Icons"/>React</li>
							{/* Third Row First Column*/}	
							<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/WebDev/FrameWorks.Libraries.RunTimeEnv/NodeJs.svg" alt="NodeJs-Icon" className="SkillsAnimate_Icons"/>NodeJs</li>		
							{/* ... */}					
							<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/WebDev/DB/JSON.svg" alt="JSON-Icon" className="SkillsAnimate_Icons"/>JSON</li>		
						</ul>
						<ul className="SkillsAnimate_List_UL SkillsAnimate_List_UL_Web">
							{/* First Row Second Column */}
							<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/WebDev/FrontEnd/CSS.svg" alt="CSS-Icon" className="SkillsAnimate_Icons"/>CSS</li>
							{/* Second Row Second Column*/}					
							<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/WebDev/FrameWorks.Libraries.RunTimeEnv/Express.svg" alt="Express-Icon" className="SkillsAnimate_Icons"/>Express</li>
							{/* Third Row Second Column*/}	
							<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/WebDev/BackEnd/C.svg" alt="C-Icon" className="SkillsAnimate_Icons"/>C</li>		
							{/* ... */}	
							<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/WebDev/DB/SQL.svg" alt="SQL-Icon" className="SkillsAnimate_Icons"/>SQL</li>									
						</ul>
						<ul className="SkillsAnimate_List_UL SkillsAnimate_List_UL_Web">
							{/* First Row Third Column */}
							<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/WebDev/FrontEnd/Javascript.svg" alt="JavaScript-Icon" className="SkillsAnimate_Icons"/>JavaScript</li>		
							{/* Second Row Third Column*/}					
							<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/WebDev/FrameWorks.Libraries.RunTimeEnv/Bootstrap.svg" alt="Bootstrap-Icon" className="SkillsAnimate_Icons"/>Bootstrap</li>
							{/* Third Row Third Column*/}	
							<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/WebDev/BackEnd/C++.svg" alt="C++-Icon" className="SkillsAnimate_Icons"/>C++</li>
							{/* ... */}					
							<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/WebDev/DB/MongoDB.svg" alt="MongoDB-Icon" className="SkillsAnimate_Icons"/>MongoDB</li>		
						</ul>
						<ul className="SkillsAnimate_List_UL SkillsAnimate_List_UL_Web">
							{/* First Row Third Column */}
							<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/WebDev/FrontEnd/Sass.svg" alt="Sass-Icon" className="SkillsAnimate_Icons"/>Sass</li>		
							{/* Second Row Third Column*/}					
							<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/WebDev/FrameWorks.Libraries.RunTimeEnv/HandleBars.svg" alt="HandleBars-Icon" className="SkillsAnimate_Icons"/>HandleBars</li>
							{/* Third Row Third Column*/}	
							<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/WebDev/BackEnd/Csharp.svg" alt="C#-Icon" className="SkillsAnimate_Icons"/>C#</li>
							{/* ... */}						
						</ul>
					</div>			
		</div>
	</div> 
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
	
<div className="SkillsAnimate_Box_All_Main">
		<div className="SkillsAnimate_Box_All_Inner">
			<div className="SkillsAnimate_Box_Text_Outside">
				<h2 className="SkillsAnimate_Box_Text">Learning New Languages</h2>
			</div>
			<h3 className="SkillsAnimate_List_Text">Languages that I had a contact at University <br /> or I'm currently learning</h3>
			<div className="SkillsAnimate_List_All">
				<ul className="SkillsAnimate_List_UL SkillsAnimate_List_UL_Learning">
					{/* First Row First Column*/}
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Learning/PHP.svg" alt="PHP-Icon" className="SkillsAnimate_Icons"/>PHP</li>
					{/* Second Row First Column*/}					
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Learning/Java.svg" alt="Java-Icon" className="SkillsAnimate_Icons"/>Java</li>
					{/* Third Row First Column*/}	
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Learning/Swift.svg" alt="Swift-Icon" className="SkillsAnimate_Icons"/>Swift</li>		
				</ul>
				<ul className="SkillsAnimate_List_UL">
					{/* First Row Second Column*/}
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Learning/MySQL.svg" alt="MySQL-Icon" className="SkillsAnimate_Icons"/>MySQL</li>
					{/* Second Row Second Column*/}					
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Learning/ASP.NET.svg" alt="ASP.NET-Icon" className="SkillsAnimate_Icons"/>ASP.NET</li>					
				</ul>
			</div>
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
<div className="SkillsAnimate_Box_All_Main">
		<div className="SkillsAnimate_Box_All_Inner">
			<div className="SkillsAnimate_Box_Text_Outside">
				<h2 className="SkillsAnimate_Box_Text">Design</h2>
			</div>
			<h3 className="SkillsAnimate_List_Text">Programs that I use to Design and have a template of the website</h3>
			<div className="SkillsAnimate_List_All">
				<ul className="SkillsAnimate_List_UL SkillsAnimate_List_UL_Design">
					{/* First Row First Column*/}
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Design/Figma.svg" alt="Figma-Icon" className="SkillsAnimate_Icons "/>Figma</li>
					{/* Second Row First Column*/}					
				</ul>
				<ul className="SkillsAnimate_List_UL SkillsAnimate_List_UL_Design">
					{/* First Row First Column*/}
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Design/Photoshop.svg" alt="Photoshop-Icon" className="SkillsAnimate_Icons"/>Photoshop</li>
					{/* Second Row First Column*/}					
				</ul>
			</div>
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
<div className="SkillsAnimate_Box_All_Main">
		<div className="SkillsAnimate_Box_All_Inner">
			<div className="SkillsAnimate_Box_Text_Outside">
				<h2 className="SkillsAnimate_Box_Text">Tools</h2>
			</div>
			<h3 className="SkillsAnimate_List_Text">Tools I use daily to write code, deploy or manage tasks</h3>
			<div className="SkillsAnimate_List_All">
				<ul className="SkillsAnimate_List_UL SkillsAnimate_List_UL_Tools">
					{/* First Row First Column*/}
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Tools/VSCode.svg" alt="VSCode-Icon" className="SkillsAnimate_Icons"/>VS Code</li>
					{/* Second Row First Column*/}					
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Tools/GitHub.svg" alt="GitHub-Icon" className="SkillsAnimate_Icons"/>GitHub</li>
					{/* Third Row First Column*/}	
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Tools/Netlify.svg" alt="Netlify-Icon" className="SkillsAnimate_Icons"/>Netlify</li>		
					{/* ... */}					
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Tools/Trello.svg" alt="Trello-Icon" className="SkillsAnimate_Icons"/>Trello</li>		
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Tools/Agile/Scrum.svg" alt="Scrum-Icon" className="SkillsAnimate_Icons"/>Scrum</li>		
				</ul>
				<ul className="SkillsAnimate_List_UL">
					{/* First Row Second Column */}
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Tools/VSStudio.svg" alt="VSStudio-Icon" className="SkillsAnimate_Icons"/>VStudio</li>
					{/* Second Row Second Column*/}					
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Tools/GitBash.svg" alt="GitBash-Icon" className="SkillsAnimate_Icons"/>GitBash</li>
					{/* Third Row Second Column*/}	
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Tools/Heroku.svg" alt="Heroku-Icon" className="SkillsAnimate_Icons"/>Heroku</li>		
					{/* ... */}	
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Tools/Slack.svg" alt="Slack-Icon" className="SkillsAnimate_Icons"/>Slack</li>		
					<li className="SkillsAnimate_List_LI"><img src="./images/skills-icons/Tools/Agile/Kanban.svg" alt="Kanban-Icon" className="SkillsAnimate_Icons"/>Kanban</li>							
				</ul>					
			</div>
		</div>
	</div> 
</Transition>;
