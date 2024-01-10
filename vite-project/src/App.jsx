import "./App.css";
import Button from "./ui/Button";
import Profile from "./components/Profile";
import teamVitalityImg from "./img/team_vitality.png";
import fazeImg from "./img/FaZe.png";
import G2Img from "./img/G2.png";

function App() {
  return (
    <>
      <Button text="КОНОПОЧКА" />
      <Button text="тут ничего не написано" />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <h1>КиберСпортивные КоМаНдЫ</h1>
      <Profile img={teamVitalityImg} name="Vitality"/>
      <Profile img={G2Img} name="G2"/>
      <Profile img={fazeImg} name="FaZe"/>
    </>
  );
}

export default App;
