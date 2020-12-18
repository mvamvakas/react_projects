import React from "react";
import "./Salad.css";
import RecipeCard from "../RecipeCard";
import beanSaladImage from "../../images/beanSalad.jpg";

const beanSaladInstructions = [
  "Add Chopped Vegetables together in large bowl",
  "Mix olive oil, lime juice, corriander, cumin, salt, cayenne pepper in a bowl then add to salad",
  "Toss salad with ingredients",
  "Eat as a salad, or as a salsa with chips, or use as a topping. This recipe is very versitile"
];

const beanSaladIngredients = {
  "15 Ounce Can Black Beans": "$0.87",
  "1 Red Bell Pepper Diced": "$1.32",
  "1 Green Bell Pepper Diced": "$1.32",
  "3 Cooked Corns of Cob": "$2.97",
  "2 Medium Tomatoes Diced": "$2.42",
  "2 Diced Jalepenos": "$0.25",
  "1/3 Cup Olive Oil": "$0.36",
  "1/3 Cup Lime Juice": "$0.17",
  "1/3 Cup Corriander Chopped": "$0.47",
  "1/2 Tsp cumin": "$0.02",
  "1 Tsp salt": "$0.01",
  "1/2 Tsp Cayenne Pepper": "$0.02",
  "Number of Servings": "4",
  "Price Per Serving": "$2.55",
  "Calories Per Seving": "200"
};

const Salad = () => {
  console.log("TEST");
  return (
    <div className="recipeCardList">
      <RecipeCard
        title="Chopped Salad"
        imageSrc={beanSaladImage}
        description="A regreshing bean and corn vegetable medly to be enjoyed as either a salad on its own or as a salsa"
        arrayInstructions={beanSaladInstructions}
        ingredientsObject={beanSaladIngredients}
      />
    </div>
  );
};

export default Salad;
