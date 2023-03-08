import { useLayoutEffect } from "react";
import MealItem from "../../components/MealItem";
import MealsList from "../../components/MealsList";
import { MEALS, CATEGORIES } from "../../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(
    // array of ids, if it has the id returns >= 0
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />
}

export default MealsOverviewScreen;
