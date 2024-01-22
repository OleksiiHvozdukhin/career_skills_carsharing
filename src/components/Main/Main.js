import {
  List,
  ListElement,
  ListInput,
  ListDiv,
  VideoBackground,
  VideoIframe,
} from './Main.styled';

export const Main = () => {
  return (
    <div>
      <VideoBackground>
        <VideoIframe
          src={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`}
          title="YouTube Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </VideoBackground>
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
