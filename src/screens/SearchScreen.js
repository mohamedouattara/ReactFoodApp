import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, SearchApi, errorMessage] = useResults();

  const filterResultsByPrice = (priceIndicator) => {
    return results.filter((result) => {
      return result.price === priceIndicator;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => SearchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/*  <Text>We have found {results.length} result(s)</Text> */}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
