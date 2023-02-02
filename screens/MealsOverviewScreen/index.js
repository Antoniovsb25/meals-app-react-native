import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../../components/MealItem";
import { MEALS } from "../../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(
    // array of ids, if it has the id returns >= 0
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;