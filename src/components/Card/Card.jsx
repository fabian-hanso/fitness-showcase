import React from "react";
import "./Card.scss";
import FitnessImage from "../../images/Weights.jpeg";
import BikeImage from "../../images/Bike.jpeg";
import SwimImage from "../../images/Swim.jpeg";
import TennisImage from "../../images/Tennis.jpg";
import HandballImage from "../../images/Handball.jpeg";
import LocationImage from "../../images/location.svg";

import TennisIcon from "../../images/tennis.svg";
import FitnessIcon from "../../images/fitness.svg";
import SwimIcon from "../../images/swim.svg";
import BikeIcon from "../../images/bike.svg";
import HandballIcon from "../../images/handball.svg";

function Card({ content }) {
  const ItemData = content;

  // console.log(ItemData);

  const date = content.date.toDate();

  // const date = new Date(ItemData.date);

  const year = date.getFullYear();

  const month = getMonthInWords(date);

  function getMonthInWords(date) {
    if (date.getMonth() === 0) {
      return "Januar";
    } else if (date.getMonth() === 1) {
      return "Februar";
    } else if (date.getMonth() === 2) {
      return "März";
    } else if (date.getMonth() === 3) {
      return "April";
    } else if (date.getMonth() === 4) {
      return "Mai";
    } else if (date.getMonth() === 5) {
      return "Juni";
    } else if (date.getMonth() === 6) {
      return "Juli";
    } else if (date.getMonth() === 7) {
      return "August";
    } else if (date.getMonth() === 8) {
      return "September";
    } else if (date.getMonth() === 9) {
      return "Oktober";
    } else if (date.getMonth() === 10) {
      return "November";
    } else if (date.getMonth() === 11) {
      return "Dezember";
    }
  }

  const day = date.getDate();

  console.log(date);

  return (
    <div className="Card">
      <div className="Card__Image">
        <div className="Card__Image__BackgroundGradient"></div>
        <div className="Card__Image__Icon">
          <img
            src={
              ItemData.category === "Fitness"
                ? FitnessIcon
                : ItemData.category === "Fahrrad"
                ? BikeIcon
                : ItemData.category === "Schwimmen"
                ? SwimIcon
                : ItemData.category === "Handball"
                ? HandballIcon
                : TennisIcon
            }
            alt="Sport Icon"
          />
        </div>
        <img
          src={
            ItemData.category === "Fitness"
              ? FitnessImage
              : ItemData.category === "Fahrrad"
              ? BikeImage
              : ItemData.category === "Schwimmen"
              ? SwimImage
              : ItemData.category === "Handball"
              ? HandballImage
              : TennisImage
          }
          alt="Sport Bild"
        />
      </div>
      <div className="Card__Items">
        <h2 className="Card__Items__Headline">{ItemData.headline}</h2>
        <p className="Card__Items__SubHeadline">
          {day + ". " + month + " " + year}
        </p>
      </div>
      <div className="Card__Location">
        <img
          className="Card__Location__Image"
          src={LocationImage}
          alt="Activity"
        />
        <p>{ItemData.location}</p>
      </div>
      <div className="Card__Content">{content.description}</div>
    </div>
  );
}

export default Card;
