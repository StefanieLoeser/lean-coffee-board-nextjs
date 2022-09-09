import { nanoid } from 'nanoid';

import styled from 'styled-components';
import { BsPlusCircleFill } from 'react-icons/bs';

export default function Form({ onAddCard }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const text = form.text.value;
    const name = form.name.value;

    const newCard = {
      id: nanoid(),
      text: text,
      name: name,
    };

    onAddCard(newCard);

    form.reset();
  }

  return (
    <EntryForm onSubmit={handleSubmit}>
      <InputWrapper>
        <label htmlFor="text">
          <ScreenReaderOnly>Enter text</ScreenReaderOnly>
        </label>
        <input placeholder={`Type your thoughts...`} name="text" id="text" />
        <label htmlFor="name">
          <ScreenReaderOnly>Enter your name</ScreenReaderOnly>
        </label>
        <input placeholder={`your name..`} name="name" id="name" />
      </InputWrapper>
      <Button>
        <ScreenReaderOnly>Create new entry</ScreenReaderOnly>
        <BsPlusCircleFill aria-hidden="true" />
      </Button>
    </EntryForm>
  );
}

const EntryForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
`;

const InputWrapper = styled.div`
  width: calc(100% - 100px);
  display: grid;
  grid-template-columns: 0 5fr 0 1fr;
  grid-template-rows: 100%;

  input {
    border: none;
    padding: 10px;
    border-top: 2px solid darkslategray;
    height: 100%;
  }
  input:focus {
    outline: none;
  }
`;

const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const Button = styled.button`
  background-color: white;
  color: #fe4b13;
  border: none;
  border-radius: 7px;

  svg {
    height: 48px;
    width: 48px;
  }
`;
