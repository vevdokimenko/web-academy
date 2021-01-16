import React from "react";
import { RenderMisc } from "./renderMisc";
import { ingredientsList } from "./ingredientsList";
import "./meal.scss";

export class Meal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idMeal: null,
      strMeal: null,
      strInstructions: null,
      strMealThumb: null,
      strIngredients: null,
      strCategory: null,
      strArea: null,
      strTags: null,
      strYoutube: null,
      strSource: null,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h3>Feeling hungry?</h3>
          <h5>Get a random meal by clicking below</h5>
          <button className="button-primary" onClick={() => this.fetchData()}>
            Get Meal 🍔
          </button>
        </div>
        <div className="meal" id={this.state.idMeal}>
          <div className="meal__row">
            <div className="meal__column left">
              <img src={this.state.strMealThumb} alt={this.state.strMeal} />
              <RenderMisc
                miscName={"Category"}
                value={this.state.strCategory}
              />
              <RenderMisc miscName={"Area"} value={this.state.strArea} />
              <RenderMisc miscName={"Tags"} value={this.state.strTags} />
              <ul className="meal__ingredients">{this.state.strIngredients}</ul>
            </div>
            <div className="meal__column">
              <h4>{this.state.strMeal}</h4>
              <p>{this.state.strInstructions}</p>
            </div>
          </div>
          <RenderMisc
            miscName={"strYoutube"}
            value={this.state.strYoutube}
            title={this.state.strMeal}
          />
        </div>
      </div>
    );
  }

  fetchData() {
    if (this.props.serverUrl) {
      fetch(this.props.serverUrl)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          this.createMeal(data.meals[0]);
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      console.error("Server Url is not set!");
    }
  }

  createMeal(meal) {
    this.setState({ idMeal: meal.idMeal });
    this.setState({ strMeal: meal.strMeal });
    this.setState({ strInstructions: meal.strInstructions });
    this.setState({ strMealThumb: meal.strMealThumb });
    this.setState({ strIngredients: ingredientsList(meal) });
    this.setState({ strCategory: meal.strCategory });
    this.setState({ strArea: meal.strArea });
    this.setState({ strTags: meal.strTags });
    this.setState({ strYoutube: meal.strYoutube.slice(-11) });
  }
}
