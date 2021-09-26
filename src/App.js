import Profile from './BeforeLaunch/Profile'
import Logo from './images/Logo.svg'
import Subscribe from './BeforeLaunch/Subscribe';
import './App.css';
import MissionStatement from './BeforeLaunch/MissionStatement';

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={Logo} alt="Logo for HerTechConnect"></img>
      </div>
      <p>In 2021, a group of women came together to celebrate International Women's Day with a hackathon.</p> 
        <p>Motivated by that weekend, we decided to take the leap and set up our own business.</p>
        <p>It would be a platform which would help women change careers and diversify the technology industry.</p>
      <Profile/>
      <p>While we are in the early stages we are reaching out for help.</p>
      <MissionStatement/>
      <p>If you would like to help with our initial research check out our survey here:</p>
      <div className="smallBtn"><a href="https://forms.gle/4ptsui5h8k72AoQVA">Survey</a></div>
      <p>For anyone interested in helping, either with building the platform, volunteering as a mentor or signing up as a mentee reach out to our team.</p>
      <p>You can keep up to date with our social media, blog and we even have a newsletter you can subscribe to!</p>
      <Subscribe/>
    </div>
  );
}

export default App;
