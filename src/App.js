import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { TagCloud } from "react-tagcloud";
import logo from './images/logo.png';
import './App.css';
import globalkitchen from '..public/images/global-kitchen_gameplay.png';
import artmood from '..public/images/artmood.png';
import twitchvue from '..public/images/twitchvue.png';

const style = {
  width: '300px',
  margin: '1em',
  icon: {
    borderRadius: '100px'
  }
}

const overlayContentStyle = {
  textShadow: '1px 1px 1px #000',
  background: 'linear-gradient(to bottom, rgba(114,38,38,0), rgba(114,38,38,1))'
}

const data = [
  { value: "JavaScript", count: 35 },
  { value: "React", count: 34 },
  { value: "Nodejs", count: 28 },
  { value: "Express.js", count: 32 },
  { value: "HTML5", count: 32 },
  { value: "Redux", count: 30 },
  { value: "Sequelize", count: 30},
  { value: "CSS3", count: 32 },
  { value: "Material-UI", count: 26},
  { value: "Materialize", count: 24},
  { value: "Agile Workflow", count: 25},
  { value: "RESTful APIs", count: 28},
  { value: "Socket.io", count: 22},
  { value: "Nunjucks", count: 22},
  { value: "Vue.js", count: 27},
  { value: "PostgreSQL", count: 24},
  { value: "Git", count: 33},
  { value: "Axios", count: 28},
  { value: "Pixi.js", count: 25}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} width="300px" className="App-logo" alt="logo" />
          <div className="nav-links"><FlatButton><a href='#projects'> projects </a></FlatButton> <FlatButton style={{paddingLeft: '15px', paddingRight: '15px'}}><a href='#exp'> experience </a></FlatButton> <FlatButton><a href='#blog'> blog</a></FlatButton> <FlatButton><a href='#about'> about </a></FlatButton> <FlatButton><a href='#contact'> contact</a></FlatButton> <FlatButton><a href='#home'>home</a></FlatButton></div>
        </header>
        <div className="content">
        <div id="home" className="home">
        <img style={style.icon} src="https://pbs.twimg.com/profile_images/926275625853206529/hD08V-Lm_400x400.jpg" width="150px" />
    Hi! I'm Layla, a Javascript developer, gamer and pop culture enthusiast.<br />
    <div className="social-icons">
    <a href="https://twitter.com/laylawrote"><i className="fa fa-twitter"></i></a> <a href="https://github.com/N7Layla"><i className="fa fa-github"></i></a> <a href="https://www.linkedin.com/in/laylahedges/"><i className="fa fa-linkedin"></i></a> <a href="https://stackoverflow.com/users/8887158/layla-h?tab=profile"><i className="fa fa-stack-overflow"></i></a> <a href="https://angel.co/layla-hedges"><i className="fa fa-angellist"></i></a> <a href="https://www.twitch.tv/laylawrote"><i className="fa fa-twitch"></i></a>
    </div>
        </div>
        <div id="projects" className="projects">
        <div className="project-cards">
        <Card style={style}>
              <CardMedia
                overlayContentStyle={overlayContentStyle}
                overlay={<CardTitle title="Global Kitchen" subtitle="A restaurant simulator game celebrating international cuisines." />}>
                <img src={globalkitchen} alt="Global Kitchen" />
              </CardMedia>
              <CardTitle subtitle="Co-Developer" />
              <CardText>
                Made for web and mobile using Pixi.js and Redux.<br />
              </CardText>
              <CardActions>
                <a href="http://global-kitchen.herokuapp.com"><FlatButton label="Live" /></a>
                <a href="https://github.com/GH-FoodNetwork/Global-Kitchen"><FlatButton label="Github" /></a>
              </CardActions>
            </Card>
              <Card style={style}>
              <CardMedia
                overlayContentStyle={overlayContentStyle}
                overlay={<CardTitle title="ARTmood" subtitle="Art on demand, by mood." />}>
                <img src={artmood} alt="ARTmood" />
              </CardMedia>
              <CardTitle subtitle="Developer" />
              <CardText>
                Made using React.js, React-Redux, Material-UI and Harvard Art Museums API.
              </CardText>
              <CardActions>
                <a href="http://art-mood.herokuapp.com"><FlatButton label="Live" /></a>
                <a href="https://github.com/N7Layla/artmood"><FlatButton label="Github" /></a>
              </CardActions>
            </Card>
            <Card style={style}>
              <CardMedia
                overlayContentStyle={overlayContentStyle}
                overlay={<CardTitle title="Twitch Explorer" subtitle="Single page Twitch viewer." />}>
                <img src={twitchvue} alt="Twitch Explorer" />
              </CardMedia>
              <CardTitle subtitle="Developer" />
              <CardText>
                Made as an example for a tutorial based blog post using Vue.js, HTML, and the Twitch API.
              </CardText>
              <CardActions>
                <a href="https://medium.com/@laylawrote/exploring-the-new-twitch-api-65069fada72c"><FlatButton label="Tutorial" /></a>
                <a href="https://github.com/N7Layla/twitch-explorer"><FlatButton label="Github" /></a>
              </CardActions>
            </Card>
            <Card style={style}>
              <CardMedia
                overlayContentStyle={overlayContentStyle}
                overlay={<CardTitle title="Grace Shopper" subtitle="An e-commerce web app." />}>
                <img src="https://s8.postimg.org/7ci5snxjp/Screen_Shot_2017-11-11_at_8.26.59_PM.png" alt="Grace Shopper" />
              </CardMedia>
              <CardTitle subtitle="Co-Developer" />
              <CardText>
                Made using React.js, React-Redux, Express, Sequelize and Material-UI.<br /><br />
              </CardText>
              <CardActions>
                <a href="http://dundermifflininc.herokuapp.com/"><FlatButton label="Live" /></a>
                <a href="https://github.com/N7Layla/dunder_mifflin"><FlatButton label="Github" /></a>
              </CardActions>
            </Card>
            </div>
        </div>
        <div id="exp" className="experience">
        <h2>skills & experience</h2>
          <TagCloud minSize={20}
            maxSize={45}
            tags={data}
            style={style.tags} />
        </div>
        <div id="blog" className="blog">
        <h2>recent blog posts</h2>
        <div className="blog-posts">
           <div><h4>Exploring the new Twitch API</h4> • <a href="https://medium.com/@laylawrote/exploring-the-new-twitch-api-65069fada72c">Read on Medium!</a></div>
          </div>
        </div>
        <div id="about" className="about">
        <h2>a little about me</h2>
        <div className="about-top">
    <div className="about-stuff">
    Art appreciator •
    Animal lover •
    Font hoarder<br />
    Avid consumer of media and ice cream<br />
    Hufflepuff meets Ravenclaw
</div>
    </div>
    <div className="about-text">
    <p>
    A soon-to-be graduate of Fullstack Academy's Grace Hopper Program, I came into the computer science realm from a non-technical background that often allows me to see code from a fresh perspective. Upon completion of my Bachelor's degree in Art History and Classical Civilization from Univerisity of Richmond, I spent years working in historic tourism and later experienced the rollercoaster that is working customer service for in the financial sector. I began to crave something more, and thought back to my teenage years spent teaching myself HTML and CSS in the name of fandom and Photoshop. A decision was made and I haven't looked back since.
    </p>
    <p>
    When not in front of a computer screen, I can occasionally be found playing fetch with my cat, reading on a train or pretending I'm in an adventure RPG.
    </p>
    </div>
        </div>
         <div id="contact" className="contact">
          <h2>get in touch</h2>
          Whether you have a professional inquiry or just want to say hello, I'd love to hear from you.<br/>
          <a href="mailto: laylawrote@gmail.com">Send an email.</a>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
