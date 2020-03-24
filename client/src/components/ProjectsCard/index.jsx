import React from 'react';
import './style.scss';
import styled from '@emotion/styled/macro';

const ProjectsCard = props => {
  const Hover = styled.div({
    opacity: 0,
    transition: 'opacity 350ms ease'
  });

  const DisplayBox = styled.div({
    height: '100%',
    left: '0',
    position: 'absolute',
    top: '0',
    width: '100%',
    zIndex: 2,
    transition: 'background-color 350ms ease',
    backgroundColor: 'transparent',
    padding: '10px 20px 0 20px',
    boxSizing: 'border-box',
    webkitTouchCallout: 'none' /* iOS Safari */,
    webkitUserSelect: 'none' /* Safari */,
    khtmlUserSelect: 'none' /* Konqueror HTML */,
    mozUserSelect: 'none' /* Old versions of Firefox */,
    msUserSelect: 'none' /* Internet Explorer/Edge */,
    userSelect: 'none' /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
  });

  const MainTitle = styled.h2({
    textTransform: 'uppercase',
    color: 'cornflowerblue',
    fontWeight: '900'
  });

  const Span = styled.div({});

  const SubTitle = styled.h4({
    transform: 'translate3d(0,50px,0)',
    transition: 'transform 350ms ease'
  });

  const Paragraph = styled.p({
    transform: 'translate3d(0,50px,0)',
    transition: 'transform 350ms ease',
    fontWeight: '600'
  });

  const Background = styled.div({
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: '#FFF',
    position: 'relative',
    cursor: 'pointer',
    backgroundImage: `url(${props.image})`,
    ariaHidden: true,
    [`:hover ${MainTitle}`]: {
      display: 'flex,',
      justifyContent: 'flex-end'
    },
    [`:hover ${DisplayBox}`]: {
      backgroundColor: 'rgba(0,0,0,.5)'
    },
    [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
      transform: 'translate3d(0,0,0)'
    },
    [`:hover ${Hover}`]: {
      opacity: 1
    }
  });

  const CTA = styled.a({
    position: 'absolute',
    bottom: '30px',
    left: '20px',
    fontWeight: 'bold'
  });
  const CTA2 = styled.a({
    position: 'absolute',
    bottom: '30px',
    fontWeight: 'bold'
  });

  return (
    <div className="swiper-slide">
      <h4 className="ProjectsCard-ClickImg d-flex justify-content-center">
        Click the image to see content
      </h4>
      <Background className="ProjectsCard-Background">
        <DisplayBox>
          <MainTitle className="ProjectsCard-MainTitle">{props.name}</MainTitle>
          <Hover className="ProjectsCard-Hover">
            <Span className="ProjectsCard-Span">Made with:</Span>
            <SubTitle className="ProjectsCard-Languages"> {props.languages}</SubTitle>
            <SubTitle className="ProjectsCard-SomethingElse"> {props.somethingElse}</SubTitle>
            <Paragraph className="ProjectsCard-Paragraph">{props.description}</Paragraph>
            <Paragraph className="ProjectsCard-Paragraph-Responsive">
              Responsive: {props.responsive}
            </Paragraph>
            <CTA href={props.github} className="ProjectsCard-CTA">
              View Github
            </CTA>
            <CTA2 href={props.website} className="ProjectsCard-CTA2">
              View Page
            </CTA2>
          </Hover>
        </DisplayBox>
      </Background>
    </div>
  );
};

export default ProjectsCard;
