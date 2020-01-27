import React, { useState, useEffect } from "react";
import "./styles.css";

const Login = ({ gotoDashboard, executeLogin }) => {
  return (
    <div className="login">
      <div>Login page</div>
      <button onClick={gotoDashboard}>GO TO DASHBOARD</button>
      <button onClick={executeLogin}>LOGIN</button>
    </div>
  );
};

const Dashboard = ({ isLoggedIn, gotoLogin, executeLogout }) => {
  useEffect(() => {
    if (!isLoggedIn) gotoLogin();
  }, [isLoggedIn, gotoLogin]);

  return (
    <div className="dashboard">
      <di>Dashboard</di>
      <button onClick={executeLogout}>Logout</button>
    </div>
  );
};

export default function App() {
  const [current, setCurrent] = useState("LOGIN");
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    if (isLoggedin) setCurrent("DASHBOARD");
    else setCurrent("LOGIN");
  }, [isLoggedin]);

  const renderRoute = currentRoute => {
    switch (currentRoute) {
      case "LOGIN":
        return (
          <Login
            gotoDashboard={() => setCurrent("DASHBOARD")}
            executeLogin={() => setIsLoggedin(true)}
          />
        );
      case "DASHBOARD":
        return (
          <Dashboard
            isLoggedIn={isLoggedin}
            gotoLogin={() => setCurrent("LOGIN")}
            executeLogout={() => setIsLoggedin(false)}
          />
        );
      default:
        return null;
    }
  };

  return <div className="Apps">{renderRoute(current)}</div>;
}
