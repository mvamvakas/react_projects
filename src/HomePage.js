import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import HelloWorldPage from "./pages/HelloWorldPage";
import CalculatorPage from "./pages/CalculatorPage";
import IconBox from "./components/IconBox";
import helloWorldImage from "./images/helloWorld.PNG";
import calculatorImage from "./images/Calculator.png";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <div className="centered-horizontal-flex">
          <IconBox route="/hello" imageSrc={helloWorldImage} />
          <IconBox route="/calculator" imageSrc={calculatorImage} />
        </div>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/hello">
            <HelloWorldPage />
          </Route>
          <Route exact path="/calculator">
            <CalculatorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div className="tooltip">
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
