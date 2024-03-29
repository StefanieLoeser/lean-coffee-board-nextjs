import { useState } from "react";

import styled from "styled-components";
import Card from "../components/Card";
import Form from "../components/Form";
import { getAllCards } from "../services/cardsService";


export async function getServerSideProps() {
  const cards = await getAllCards(); 

  return {
    props: {
      cards: cards,
    },
  };
}

export default function Home({cards}) {
  const [cardList, setCardList] = useState(cards);

  function addCard(newCard) {
    setCardList([newCard, ...cardList]);
  }

  async function removeCard(id) {
    await fetch(`api/cards/${id}`, {
      method: 'DELETE',
    });
    setCardList(cardList.filter((card) => card.id !== id));
  }

  return (
    <BoardWrapper>
      <CardGrid>
        <Card name="Niklas" text="Wie schreibe ich nochmal Imports?" />
        <Card name="Lene" text="Können wir noch mehr Testing machen?!" />
        <Card name="Merle" text="Wo ist mein Fahrrad?" />
        <Card name="Thomas" text="Können wir Tailwind machen?" />
        {cardList.map((card) => {
          return (
            <Card
              key={card.id}
              name={card.name}
              text={card.text}
              onRemoveCard={removeCard}
              id={card.id}
            />
          );
        })}
      </CardGrid>
      <Form onAddCard={addCard} />
    </BoardWrapper>
  );
}

const BoardWrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
`;

const CardGrid = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-content: start;
  margin: 0;
  padding: 20px;
  overflow-y: auto;
`;
