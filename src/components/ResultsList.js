import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetail from "./ResultDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title} ( {results.length})
      </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => {
          result.id;
        }}
        data={results}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    marginBottom: 5,
    fontSize: 23,
    fontWeight: "bold",
    marginLeft: 15,
  },
  
});

export default ResultsList;
