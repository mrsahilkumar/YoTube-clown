import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import CardTwo from "../components/CardTwo";
import CardThree from "../components/CardThree";
import CardFour from "../components/CardFour";
import CardFive from "../components/CardFive";
import CardSix from "../components/CardSix";




const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  return (

    <Container>
      <Card />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive />
      <CardSix />
    </Container>
  );
};

export default Home;
