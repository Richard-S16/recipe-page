import "./App.css";
import imageOmelette from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <div className="outer_container">
      <img
        src={imageOmelette}
        alt="image-omelette"
        className="image_omelette"
      />
      <div className="inner_container">
        <h1>Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <section className="section_preparation">
          <h3 className="section_preparation_header">Preparation time</h3>

          <ul className="section_preparation_ul">
            <li className="section_preparation_ul_li">
              <b>Total</b>: Approximately 10 minutes
            </li>
            <li className="section_preparation_ul_li">
              <b>Preparation</b>: 5 minutes
            </li>
            <li className="section_preparation_ul_li">
              <b>Cooking</b>: 5 minutes
            </li>
          </ul>
        </section>

        <h2>Ingredients</h2>
        <ul className="ingredients_ul">
          <li className="ingredient_ul_li">2-3 large eggs</li>
          <li className="ingredient_ul_li">Salt, to taste</li>
          <li className="ingredient_ul_li">Pepper, to taste</li>
          <li className="ingredient_ul_li">1 tablespoon of butter or oil</li>
          <li className="ingredient_ul_li">
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>

        <h2>Instructions</h2>
        <ol className="instructions_ol">
          <li className="instructions_ol_li">
            <b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of salt
            and pepper until they are well mixed. You can add a tablespoon of
            water or milk for a fluffier texture.
          </li>

          <li className="instructions_ol_li">
            <b>Heat the pan</b>: Place a non-stick frying pan over medium heat
            and add butter or oil.
          </li>

          <li className="instructions_ol_li">
            <b>Cook the omelette</b>: Once the butter is melted and bubbling,
            pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
            surface.
          </li>

          <li className="instructions_ol_li">
            <b>Add fillings (optional)</b>: When the eggs begin to set at the
            edges but are still slightly runny in the middle, sprinkle your
            chosen fillings over one half of the omelette.
          </li>

          <li className="instructions_ol_li">
            <b>Fold and serve</b>: As the omelette continues to cook, carefully
            lift one edge and fold it over the fillings. Let it cook for another
            minute, then slide it onto a plate.
          </li>

          <li className="instructions_ol_li">
            <b>Enjoy</b>: Serve hot, with additional salt and pepper if needed.
          </li>
        </ol>

        <h2>Nutrition</h2>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>

        <table className="nutrition_table">
          <tbody>
            <tr className="nutrition_table_row">
              <td className="nutrition_table_col_left">Calories</td>
              <td className="nutrition_table_col_right">277kcal</td>
            </tr>

            <tr className="nutrition_table_row">
              <td className="nutrition_table_col_left">Carbs</td>
              <td className="nutrition_table_col_right">0g</td>
            </tr>

            <tr className="nutrition_table_row">
              <td className="nutrition_table_col_left">Protein</td>
              <td className="nutrition_table_col_right">20g</td>
            </tr>

            <tr className="nutrition_table_row">
              <td className="nutrition_table_col_left">Fat</td>
              <td className="nutrition_table_col_right">22g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
