import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";

function App() {
  return (
    <div className="App">
      <input type="date" />
      <PageTitle title={"Hell yeeep"} />
      Article 1
      <Rating value={3} />
      <Accordion title={"Menu"} />
      <Accordion title={"Description"} />
      Article 2
      <Rating value={4} />
      <Rating value={1} />
      <Rating value={5} />
      <Rating value={0} />
    </div>
  );
}

function PageTitle(props: any) {
  return <h1>{props.title}</h1>;
}

export default App;
