import React from "react";
import "./Poultry.css";
import RecipeCard from "../RecipeCard";
import chickenCurryImage from "../../images/chickenCurry.jpg";
import chickenSouvlakiImage from "../../images/chickenSouvlaki.jpg";

const chickenCurryInstructions = [
  "Add vegetable oil into pan and sear chicken for about 3 minutes on each side.",
  "Take out chicken then add diced onions and sautee until fragrent",
  "Dice and add garlic until fragrent.",
  "Add curry powder, stir for 30 seconds then add tomatoe puree, 1 cup water, and coconut milk.",
  "Cube potatoes then add to pot along with seared chicken.",
  "Bring the pot to a light boil and stir occationally for 15-20 minutes.",
  "(Optional) add corn startch to thicken mixture.",
  "Serve in a bowl either on its own or optionally with side of naan."
];

const chickenCurryIngredients = {
  "4 Boneless Skinless Chicken Thighs": "$6.70",
  "3 Tbsp Curry Powder": "$0.21",
  "1 Can of Coconut Milk": "$1.17",
  "1 Can Tomatoe Puree": "$0.97",
  "3 Cloves Garlic": "$0.07",
  "2 Pounds Yellow Potatoes": "$1.43",
  "1 Large Yellow Onion": "$1.60",
  "1 Tbsp Vegetable Oil": "$0.08",
  "Number of Servings": "4",
  "Price Per Serving": "$3.37",
  "Calories Per Seving": "400"
};

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

const Poultry = () => {
  return (
    <div className="recipeCardList">
      <RecipeCard
        title="Coconut Chicken Curry"
        imageSrc={chickenCurryImage}
        description="A simple to prepare chicken curry using coconut milk for creamyness"
        arrayInstructions={chickenCurryInstructions}
        ingredientsObject={chickenCurryIngredients}
      />
      <RecipeCard
        title="Chicken Souvlaki"
        imageSrc={chickenSouvlakiImage}
        description="Juciy chicken souvlaki served with a greek salad made with cucumber, tomatoes, and feta cheese dressing"
        arrayInstructions={chickenSouvlakiInstructions}
        ingredientsObject={chickenSouvlakiIngredients}
      />
    </div>
  );
};

export default Poultry;
