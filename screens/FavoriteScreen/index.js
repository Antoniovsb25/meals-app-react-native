import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FavoritesContext } from "../../store/context/favorites-context";
import MealsList from "../../components/MealsList";
import { MEALS } from "../../data/dummy-data";

function FavoriteScreen() {
  const { ids } = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));
  return (
    <>
      {favoriteMeals.length === 0 ? (
        <View style={styles.rootContainer}>
          <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
      ) : (
        <MealsList items={favoriteMeals} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default FavoriteScreen;
