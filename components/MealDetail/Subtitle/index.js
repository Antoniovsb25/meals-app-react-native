import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        color: "#e2b397",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
      subtitleContainer: {
        borderBottomColor: "#e2b397",
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
      },
});

export default Subtitle;