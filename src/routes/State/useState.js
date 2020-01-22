import React, { useState } from "react";
import "./styles.css";

const Button = ({ setCount }) => {
  return (
    <div>
      <button onClick={() => setCount(count => count +1)}>klik</button>
    </div>
  );
};

const ChildComponent2 = ({ count }) => {
  console.log("child 2 rendered");
  return <div className="child_dua">{count}</div>;
};

const ChildComponent1 = ({ setCount }) => {
  console.log("child 1 rendered");
  return (
    <div className="child_satu">
      <Button setCount={setCount} />
    </div>
  );
};

const ParentComponent2 = ({ count }) => {
  console.log("parent 2 rendered");
  return (
    <div className="parent_dua">
      <ChildComponent2 count={count} />
    </div>
  );
};

const ParentComponent1 = ({ setCount }) => {
  console.log("parent 1 rendered");
  return (
    <div className="parent_satu">
      <ChildComponent1 setCount={setCount} />
    </div>
  );
};

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <ParentComponent1 setCount={setCount} />
      <ParentComponent2 count={count} />
    </div>
  );
}
