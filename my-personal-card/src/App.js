import "./index.css";
import "./components/Avatar";
import Avatar from "./components/Avatar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import cardData from "./data/cardData";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <div className="container">
          {cardData.map((card, index) => (
            <Skills
              key={index}
              skill={card.skill}
              emoji={card.emoji}
              color={card.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
