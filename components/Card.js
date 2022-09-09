import { RiDeleteBinLine } from 'react-icons/ri';
import styled from 'styled-components';

export default function Card({ name, text, onRemoveCard, id }) {
  return (
    <CardWrapper>
      <IconWrapper>
        <RiDeleteBinLine onClick={() => onRemoveCard(id)} />
      </IconWrapper>
      <p>{text}</p>
      <Name>{name}</Name>
    </CardWrapper>
  );
}

const CardWrapper = styled.li`
  display: grid;
  margin: 0 10px 0 10px;
  align-content: space-between;
  border-radius: 7px;
  padding: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

const Name = styled.div`
  text-transform: uppercase;
  font-size: 0.8em;
  margin-top: 10px;
  color: darkslategray;
`;

const IconWrapper = styled.span`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  color: #fe4b13;
`;
