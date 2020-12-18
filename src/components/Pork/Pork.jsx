import React from "react";
import "./Pork.css";
import RecipeCard from "../RecipeCard";
import honeyGarlicImage from "../../images/honeyGarlic.jpg";
import gingerGlazedImage from "../../images/gingerGlazed.jpg";

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

const gingerGarlicInstructions = [
  "In a bowl mix together honey, siracha, and white wine vinegar",
  "Pour olin into a pot over medium high heat then add pork strips with salt and pepper, cook pork in batches and set aside when complete",
  "Add ginger and garlic to pan, stir till fragrent",
  "Raise heat to high, pour in sauce and bring to boil, when sauce is bubbly toss bork back in and mix till pork is coated in sauce",
  "(Optional) serve over rice or with noodles, or just eat on its own"
];

const gingerGarlicIngredients = {
  "3 Pork Chops Cut into strips": "$6.85",
  "1 Tbsp Vegetable Oil": "$0.50",
  "5 Cloves Garlic": "$0.10",
  "2 Inch nob of Ginger": "$0.25",
  "1/2 Cups Honey": "$0.56",
  "2 Tbsp Siracha": "$0.15",
  "1 Tbsp White Wine Vinegar": "$0.08",
  "Number of Servings": "3",
  "Price Per Serving": "$2.83",
  "Calories Per Seving": "450"
};

const Pork = () => {
  return (
    <div className="recipeCardList">
      <RecipeCard
        title="Honey Garlic Pork Chops"
        imageSrc={honeyGarlicImage}
        description="A juicy pork chop covered in a sweet honey garlic glaze"
        arrayInstructions={honeyGarlicInstructions}
        ingredientsObject={honeyGarlicIngredients}
      />
      <RecipeCard
        title="Ginger Glazed Sticky Pork"
        imageSrc={gingerGlazedImage}
        description="Juciy chicken souvlaki served with a greek salad made with cucumber, tomatoes, and feta cheese dressing"
        arrayInstructions={gingerGarlicInstructions}
        ingredientsObject={gingerGarlicIngredients}
      />
    </div>
  );
};

export default Pork;
