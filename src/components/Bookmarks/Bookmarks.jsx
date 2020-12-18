import React from "react";
import "./Bookmarks.css";
import RecipeCard from "../RecipeCard";
import buffaloCauliflowerImage from "../../images/buffaloCauliflower.jpg";
import chickenSouvlakiImage from "../../images/chickenSouvlaki.jpg";
import honeyGarlicImage from "../../images/honeyGarlic.jpg";

const chickenSouvlakiInstructions = [
  "Dice chicken into medium sized chunks",
  "In a bowl toss in chicken with olive oil, lemon juice, greek seasoning, then cover and let marinate in the fridge for 24 hours",
  "Bake chicken in oven at 420 for 22 minutes or bbq on skewars",
  "For salad, chop cucubmers and tomatoes into small pieces, then combine in bowl with feta dressing"
];

const chickenSouvlakiIngredients = {
  "4 Chicken Breast": "$2.50",
  "4 Tbsp Clubhouse Greek Seasoning": "$2.50",
  "1 Cup Olive Oil": "$1.40",
  "1 Cup Lemon Juice": "$0.50",
  "2 Cucumbers": "$2.94",
  "3 Tomatoes": "$3.63",
  "200 ml Kraft Greek Feta Dressing": "$1.16",
  "Number of Servings": "4",
  "Price Per Serving": "$3.66",
  "Calories Per Seving": "450"
};
const buffaloCauliflowerInstructions = [
  "Preheat oven to 450 degrees F and lighly grease baking sheet",
  "Mix flower, water, garlic podwer, and a little salt and pepper until you have a runny batter",
  "Toss cauliflower into batter and mix until well coated, then spread onto baking sheet",
  "bake in oven for 25 min",
  "while baking in a saucepan melt butter, then add honey and hotsauce",
  "After 25 minutes take out cauliflower, then brush sauce over chunks until they are well coated",
  "After coated in sauce, bake in oven for an additional 10 minutes"
];

const buffaloCauliflowerIngredients = {
  "Olive Oil Cooking Spray": "$0.03",
  "3/4 Cup of Flower": "$0.04",
  "1 Cup Water": "$0.00",
  "1/2 tsp garlic powder": "$0.02",
  "2 tbsp butter": "$0.56",
  "1/2 Cup Hot Pepper Sauce": "$1",
  "1 Tbsp Honey": "$0.07",
  "2 Heads of Cauliflower Chopped into Bite sized chunks": "$7.98",
  "Number of Servings": "4",
  "Price Per Serving": "$2.43",
  "Calories Per Seving": "218"
};

const honeyGarlicInstructions = [
  "In a bowl combin honey, minced garlic, and soysauce, mix until well combined",
  "Toss pork chops in to mixture, cover and let marinate for 15 minutes",
  "Toss pork chops with mixture into pan and panfry"
];

const honeyGarlicIngredients = {
  "2 Pork Chops": "$4.57",
  "1 Tbsp Honey": "$0.07",
  "2 cloves Garlic": "$0.04",
  "2 Tbsp Soy Sauce": "$0.04",
  "Number of Servings": "3",
  "Price Per Serving": "$2.37",
  "Calories Per Seving": "400"
};

const Bookmarks = () => {
  return (
    <div className="recipeCardList">
      <RecipeCard
        title="Chicken Souvlaki"
        imageSrc={chickenSouvlakiImage}
        description="Juciy chicken souvlaki served with a greek salad made with cucumber, tomatoes, and feta cheese dressing"
        arrayInstructions={chickenSouvlakiInstructions}
        ingredientsObject={chickenSouvlakiIngredients}
      />
      <RecipeCard
        title="Honey Garlic Pork Chops"
        imageSrc={honeyGarlicImage}
        description="A juicy pork chop covered in a sweet honey garlic glaze"
        arrayInstructions={honeyGarlicInstructions}
        ingredientsObject={honeyGarlicIngredients}
      />
      <RecipeCard
        title="Buffalo Cauliflower"
        imageSrc={buffaloCauliflowerImage}
        description="Spicy cauliflower bites that make for a great appetizer or meal"
        arrayInstructions={buffaloCauliflowerInstructions}
        ingredientsObject={buffaloCauliflowerIngredients}
      />
    </div>
  );
};

export default Bookmarks;
