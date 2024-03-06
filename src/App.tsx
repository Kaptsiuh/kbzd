import "./App.css";

function App() {
  return (
    <div className="App">
      <Rating />
      <Accordion />
    </div>
  );
}

function Rating() {
  return (
    <>
      <Star />
      <Star />
      <Star />
      <Star />
    </>
  );
}

function Star() {
  return <div>star</div>;
}

function Accordion() {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
