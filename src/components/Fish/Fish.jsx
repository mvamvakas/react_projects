import React from "react";
import "./Fish.css";
import RecipeCard from "../RecipeCard";
import tunaPastaImage from "../../images/tunaPasta.jpg";

const tunaPastaInstructions = [
  "Boil salted water and cook spagetti according to package instructions",
  "When pasta is almost ready, add oil to small pan over medium heat then mince and add garlic",
  "Add to pan tuna, lemon juice, peas, and parsley cook until warm",
  "Once pasta is done add a few Tbsp of pasta water to sauce, then drain pasta and add to sauce",
  "Season with salt and pepper to taste then serve"
];

const tunaPastaIngredients = {
  "2 Tbsp Olive Oil": "$0.18",
  "1 Can Tuna": "$1.47",
  "2 Cloves Garlic": "$0.04",
  "1 Tsp Lemon Juice": "$0.04",
  "1 Tbsp Parsley": "$0.07",
  "1 cup frozen peas": "$0.50",
  "4 Ounces Spagetti": "$0.13",
  "Number of Servings": "2",
  "Price Per Serving": "$1.23",
  "Calories Per Seving": "425"
};

const Fish = () => {
  return (
    <div className="recipeCardList">
      <RecipeCard
        title="Tuna and Pea Pasta"
        imageSrc={tunaPastaImage}
        description="A refreshing tuna pasta with peas"
        arrayInstructions={tunaPastaInstructions}
        ingredientsObject={tunaPastaIngredients}
      />
    </div>
  );
};

export default Fish;
