import React, { useState } from "react";
import "./RecipeCard.css";

const RecipeCard = ({
  title,
  description,
  imageSrc,
  arrayInstructions,
  calories,
  numberServings,
  ingredientsObject
}) => {
  const [isSimple, setIsSimple] = useState(true);
  return (
    <React.Fragment>
      {isSimple ? (
        <div className="recipeCard" onClick={() => setIsSimple(!isSimple)}>
          <img src={imageSrc} alt="chicken curry" className="recipeImage" />
          <div className="recipeContent">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      ) : (
        <div
          className="recipeCardComplex"
          onClick={() => setIsSimple(!isSimple)}
        >
          <h2>{title}</h2>
          <div className="complexContent">
            <div className="complexContentInner">
              <h3> Ingredients </h3>
              <ul>
                {Object.keys(ingredientsObject).map(key => (
                  <React.Fragment>
                    <li>
                      {key}: {ingredientsObject[key]}
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <div className="complexContentInner">
              <h3> Instructions </h3>
              <ol>
                {arrayInstructions.map(instruction => (
                  <React.Fragment>
                    <li>{instruction}</li>
                  </React.Fragment>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default RecipeCard;
