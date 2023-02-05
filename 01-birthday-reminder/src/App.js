import React, { useState } from "react";
import { data } from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  let btnText = "clear all";
  if (!people.length) btnText = "get back";
  const handleClick = () => {
    people.length ? setPeople([]) : setPeople(data);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={handleClick}>{btnText}</button>
      </section>
    </main>
  );
}

export default App;
