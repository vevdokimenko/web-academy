export const ingredientsList = (meal) => {
  const items = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      items.push(meal[`strIngredient${i}`] + " - " + meal[`strMeasure${i}`]);
    } else {
      break;
    }
  }
  return items.map((item) => <li key={item.toString()}>{item}</li>);
};
