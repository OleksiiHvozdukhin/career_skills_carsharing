import { List, ListElement, ListInput, ListDiv } from './Main.styled';

export const Main = () => {
  return (
    <div>
      <List>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>C</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>A</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>R</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>S</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>H</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>A</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>R</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>I</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>N</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>G</ListDiv>
        </ListElement>
      </List>
    </div>
  );
};
