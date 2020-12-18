import React from "react";
import "./Vegetarian.css";
import RecipeCard from "../RecipeCard";
import buffaloCauliflowerImage from "../../images/buffaloCauliflower.jpg";

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

const Vegetarian = ({}) => {
  return (
    <div className="recipeCardList">
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

export default Vegetarian;
