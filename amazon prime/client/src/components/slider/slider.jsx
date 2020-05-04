import React from "react";
import { connect } from "react-redux";
import { Container, Col, Row, Card ,Button } from "react-bootstrap";
import "./slider.css";
import Slider from "react-slick";
import styled from "@emotion/styled/macro";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { IconButton } from '@material-ui/core';

class APSlider extends React.Component {
  render() {

    const settings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 5,
      touchMove: true,
    };

    const DisplayOver = styled.div({
      height: "100%",
      left: "0",
      position: "absolute",
      top: "0",
      width: "100%",
      transition: "background-color 350ms ease",
      backgroundColor: "transparent",
    });
    const Hover = styled.div({
      opacity: 0,
      transition: "opacity 350ms ease",
    });

    const SubTitle = styled.h4({
      fontFamily: "Helvetica",
      transform: "translate3d(0,50px,0)",
      transition: "transform 350ms ease",
      paddingTop : "20%"
    });
    const Paragraph = styled.p({
      transform: "translate3d(0,50px,0)",
      transition: "transform 350ms ease",
      position : "absolute",
      bottom : '0'
    });
    const CTA = styled.a({
      position: "absolute",
      bottom: "20px",
      left: "20px",
    });
    const Background = styled.div({
      height : "100px",
      // Other background code
      [`:hover ${DisplayOver}`]: {
        backgroundColor: "rgba(0,0,0,.5)",
      },
      [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
        transform: "translate3d(0,0,0)",
      },
      [`:hover ${Hover}`]: {
        opacity: 1,
      },
    });

    return (
      <div class="slider">
        <Slider {...settings}>
          <Background className="item">
            <Card className="mr-2 bg-primary" style={{height: "150px"}}>
              <Card.Body>
                <DisplayOver>
                  <Hover>
                    <SubTitle>
                      <IconButton aria-lable="delete" href="/new">
                        <PlayCircleOutlineIcon/>
                      </IconButton>
                    </SubTitle>
                    <Paragraph>kjacbjajcbkjabckjakjcjkabcakjcbajkcb</Paragraph>
                  </Hover>
                </DisplayOver>
              </Card.Body>
            </Card>
          </Background>
          <Background className="item">
            <Card className="mr-2 bg-primary" style={{height: "150px"}}>
              <Card.Body>
                <DisplayOver>
                  <Hover>
                    <SubTitle>
                    <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
                    </SubTitle>
                    <Paragraph>kjacbjajcbkjabckjakjcjkabcakjcbajkcb</Paragraph>
                  </Hover>
                </DisplayOver>
              </Card.Body>
            </Card>
          </Background>
          <Background className="item">
            <Card className="mr-2 bg-primary" style={{height: "150px"}}>
              <Card.Body>
                <DisplayOver>
                  <Hover>
                    <SubTitle>
                    <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
                    </SubTitle>
                    <Paragraph>kjacbjajcbkjabckjakjcjkabcakjcbajkcb</Paragraph>
                  </Hover>
                </DisplayOver>
              </Card.Body>
            </Card>
          </Background>
          <Background className="item">
            <Card className="mr-2 bg-primary" style={{height: "150px"}}>
              <Card.Body>
                <DisplayOver>
                  <Hover>
                    <SubTitle>
                    <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
                    </SubTitle>
                    <Paragraph>kjacbjajcbkjabckjakjcjkabcakjcbajkcb</Paragraph>
                  </Hover>
                </DisplayOver>
              </Card.Body>
            </Card>
          </Background>
          <Background className="item">
            <Card className="mr-2 bg-primary" style={{height: "150px"}}>
              <Card.Body>
                <DisplayOver>
                  <Hover>
                    <SubTitle>
                    <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
                    </SubTitle>
                    <Paragraph>kjacbjajcbkjabckjakjcjkabcakjcbajkcb</Paragraph>
                  </Hover>
                </DisplayOver>
              </Card.Body>
            </Card>
          </Background>
          <Background className="item">
            <Card className="mr-2 bg-primary" style={{height: "150px"}}>
              <Card.Body>
                <DisplayOver>
                  <Hover>
                    <SubTitle>
                    <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
                    </SubTitle>
                    <Paragraph>kjacbjajcbkjabckjakjcjkabcakjcbajkcb</Paragraph>
                  </Hover>
                </DisplayOver>
              </Card.Body>
            </Card>
          </Background>
          <Background className="item">
            <Card className="mr-2 bg-primary" style={{height: "150px"}}>
              <Card.Body>
                <DisplayOver>
                  <Hover>
                    <SubTitle>
                    <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
                    </SubTitle>
                    <Paragraph>kjacbjajcbkjabckjakjcjkabcakjcbajkcb</Paragraph>
                  </Hover>
                </DisplayOver>
              </Card.Body>
            </Card>
          </Background>
          <Background className="item">
            <Card className="mr-2 bg-primary" style={{height: "150px"}}>
              <Card.Body>
                <DisplayOver>
                  <Hover>
                    <SubTitle>
                    <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
                    </SubTitle>
                    <Paragraph>kjacbjajcbkjabckjakjcjkabcakjcbajkcb</Paragraph>
                  </Hover>
                </DisplayOver>
              </Card.Body>
            </Card>
          </Background>
        </Slider>
      </div>
    );
  }
}

const stateMapper = (state) => {
  return state;
};

export default connect(stateMapper)(APSlider);
