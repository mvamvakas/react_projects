import React, { useState } from "react";
import Title from "./components/Title";
import Menu from "./components/Menu";
import MenuCard from "./components/MenuCard";
import Poultry from "./components/Poultry";
import Pork from "./components/Pork";
import Fish from "./components/Fish";
import Vegetarian from "./components/Vegetarian";
import Salad from "./components/Salad";
import Bookmarks from "./components/Bookmarks";
import "./index.css";

// const sectionsObject = {
//   home: "Home",
//   poultry: "Poultry",
//   pork: "Pork",
//   fish: "fish",
//   vegetarian: "Vegetarian"
// };
const sections = [
  "Home",
  "Bookmarks",
  "Poultry",
  "Pork",
  "Fish",
  "Vegetarian",
  "Salads"
];
const sectionsWithoutHome = ["Poultry", "Pork", "Fish", "Vegetarian", "Salads"];

export default function BasicExample() {
  return (
    <div className="main-page">
      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <MainPage />
    </div>
  );
}

const MainPage = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [menuSection, setMenuSection] = useState(sections[0]);

  const changeMenuStatus = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <React.Fragment>
      <Title
        titleText="Economic Eats"
        openCloseMenu={changeMenuStatus}
        goToHome={() => setMenuSection(sections[0])}
      />
      {menuIsOpen && (
        <Menu
          array={sections}
          sectionChange={setMenuSection}
          currentPage={menuSection}
        />
      )}
      <div className="mainSection">
        {menuSection === "Home" && (
          <React.Fragment>
            <title>Home</title>
            <div className="content">
              Eating healthy can be very difficult, and even more difficult when
              you're on a budget. As a student who tries to eat healthy, I know
              just how expensive it can be. The goal of this website is to
              provide people eating on a budget healthy, delicious, and
              inexpensive meals. This website includes recipes featuring
              Poultry, Pork, and Fish. As well as Vegetarian meals and delicious
              Salads. The Recipes can be found through the menu off to the side
              or by clicking the options below
            </div>
            <div className="menuCards">
              {sectionsWithoutHome.map(title => (
                <MenuCard
                  key={title + "home"}
                  title={title}
                  sectionChange={setMenuSection}
                />
              ))}
            </div>
          </React.Fragment>
        )}
        {menuSection === "Bookmarks" && <Bookmarks />}
        {menuSection === "Poultry" && <Poultry />}
        {menuSection === "Pork" && <Pork />}
        {menuSection === "Fish" && <Fish />}
        {menuSection === "Vegetarian" && <Vegetarian />}
        {menuSection === "Salads" && <Salad />}
      </div>
    </React.Fragment>
  );
};
