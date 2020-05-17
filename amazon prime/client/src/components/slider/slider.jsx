import React from "react";
import { connect } from "react-redux";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import "./slider.css";
import Slider from "react-slick";
import styled from "@emotion/styled/macro";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import ExplicitIcon from '@material-ui/icons/Explicit';
import { IconButton } from "@material-ui/core";
import axios from "axios";

class APSlider extends React.Component {
  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 1500,
      slidesToShow: 6,
      slidesToScroll: 5,
      touchMove: true,
    };
    return (
      <div className="mt-3">
        <div className="slider " >
          <Slider {...settings}>
            {this.props.contents &&
              this.props.contents.map((content) => {
                return (
                  <div className="zoom ">
                    <img
                      className="mr-1"
                      src={`https://image.tmdb.org/t/p/w500${content.posterPath}`}
                      alt="Alps"
                      style={{ width: "14.5vw", height : "26vh" ,"border-radius": "5px" , margin : "" }}
                    />
                    <div className="overlay">
                      <IconButton
                        aria-lable="delete"
                        href={ content.releaseDate ?`/movies/${content.id}` : `/shows/${content.id}`}
                        className="mt-5 p-1"
                      >
                        <PlayCircleFilledIcon
                          fontSize="large"
                          className="play-button"
                          // style={{ color: "white" }}
                        />
                      </IconButton>
                      <p className="text-white font font-weight-bolder p-1 my-text-title" style={{"fontSize" : "1.1rem"}}>
                        {content.name}
                      </p>
                      <p
                        className="text-white font-weight-bold my-text ml-2 mb-2"
                        style={{ textAlign: "left", fontSize: "0.7rem" }}
                      >
                        {content.overview}
                      </p>
                     
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    );
  }
}

const stateMapper = (state) => {
  return state;
};

export default connect(stateMapper)(APSlider);

{
  /* <Background className="">
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
          </Background> */
}

// const DisplayOver = styled.div({
//   height: "100%",
//   left: "0",
//   position: "absolute",
//   top: "0",
//   width: "100%",
//   transition: "background-color 350ms ease",
//   backgroundColor: "transparent",
// });
// const Hover = styled.div({
//   opacity: 0,
//   transition: "opacity 350ms ease",
// });

// const SubTitle = styled.h4({
//   fontFamily: "Helvetica",
//   transform: "translate3d(0,50px,0)",
//   transition: "transform 350ms ease",
//   paddingTop: "20%",
// });
// const Paragraph = styled.p({
//   transform: "translate3d(0,50px,0)",
//   transition: "transform 350ms ease",
//   position: "absolute",
//   bottom: "0",
// });
// const CTA = styled.a({
//   position: "absolute",
//   bottom: "20px",
//   left: "20px",
// });
// const Background = styled.div({
//   height: "100px",
//   // Other background code
//   [`:hover ${DisplayOver}`]: {
//     backgroundColor: "rgba(0,0,0,.5)",
//   },
//   [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
//     transform: "translate3d(0,0,0)",
//   },
//   [`:hover ${Hover}`]: {
//     opacity: 1,
//   },
// });
