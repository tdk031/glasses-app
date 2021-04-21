import React, { Component } from "react";
import BtnGlasses from "./BtnGlasses";
import Model from "./Model";

export class ShowRoomGlasses extends Component {
  state = {
    glassImg: "./img/glassesImage/v1.png",
    names: "GUCCI G8850U",
    prices: "30",

    btnColorList: [
      {
        name: "GUCCI G8850U",
        price: "30",
        imgSrc: "./img/glassesImage/v1.png",
      },
      {
        name: "GUCCI G8759H",
        price: "50",
        imgSrc: "./img/glassesImage/v2.png",
      },
      {
        name: "DIOR D6700HQ",
        price: "30",
        imgSrc: "./img/glassesImage/v3.png",
      },
      {
        name: "DIOR D6005U",
        price: "30",
        imgSrc: "./img/glassesImage/v4.png",
      },
      {
        name: "PRADA P8750",
        price: "30",
        imgSrc: "./img/glassesImage/v5.png",
      },
      {
        name: "PRADA P9700",
        price: "30",
        imgSrc: "./img/glassesImage/v6.png",
      },
      {
        name: "FENDI F8750",
        price: "30",
        imgSrc: "./img/glassesImage/v7.png",
      },
      {
        name: "FENDI F8500",
        price: "30",
        imgSrc: "./img/glassesImage/v8.png",
      },
      {
        name: "FENDI F4300",
        price: "30",
        imgSrc: "./img/glassesImage/v9.png",
      },
    ],
  };

  renderBtnColor = () => {
    return this.state.btnColorList.map((btnColor) => {
      return (
        <BtnGlasses
          btnColor={btnColor}
          handleChoiColor={this.handleChoiColor}
        />
      );
    });
  };

  handleChoiColor = (glasses) => {
    this.setState({
      glassImg: glasses.imgSrc,
      names: glasses.name,
      prices: glasses.price,
    });
  };

  render() {
    return (
      <div>
        <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
          <h2 className="text-center h2 text-white py-1">Glasses App</h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="container row">
              <section className="model d-flex justify-content-center col-5">
                <Model
                  glassImg={this.state.glassImg}
                  names={this.state.names}
                  prices={this.state.prices}
                />
              </section>
              <section className="glasses__list mt-5 d-flex justify-content-around flex-wrap col-7">
                {this.renderBtnColor()}
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ShowRoomGlasses;
