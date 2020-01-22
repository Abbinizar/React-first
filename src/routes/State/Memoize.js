import React, { useState, useContext, memo, useCallback } from "react";
import "./styles.css";

const CountContext = React.createContext(0);

const Button = ({ add }) => {
  return (
    <div>
      <button onClick={add}>klik</button>
    </div>
  );
};

const ChildComponent2 = () => {
  console.log("child 2 rendered");
  const count = useContext(CountContext);
  return <div className="child_dua">{count}</div>;
};

const ChildComponent1 = memo(({ add }) => {
  console.log("child 1 rendered");
  return (
    <div className="child_satu">
      <Button add={add}/>
    </div>
  );
});

const ParentComponent2 = () => {
  console.log("parent 2 rendered");
  return (
    <div className="parent_dua">
      <ChildComponent2 />
    </div>
  );
};

const ParentComponent1 = memo(({ add }) => {
  console.log("parent 1 rendered");
  return (
    <div className="parent_satu">
      <ChildComponent1 add={add} />
    </div>
  );
});

export default function App() {
  const [count, setCount] = useState(0);

  const add = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  return (
    <CountContext.Provider value={count}>
      <div className="App">
        <ParentComponent1 add={add} />
        <ParentComponent2 />
      </div>
    </CountContext.Provider>
  );
}
