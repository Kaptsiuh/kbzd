import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";

type PageTitlePropsType = {
  title: string;
};

function App() {
  return (
    <div className="App">
      <input type="date" />
      <PageTitle title={"Hell yeeep"} />
      <Rating value={3} />
      <Accordion titleValue={"Menu"} collapsed={true} />
      <Accordion titleValue={"Description"} collapsed={false} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}

export default App;
