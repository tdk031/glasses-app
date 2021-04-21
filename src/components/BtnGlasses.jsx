import React, { Component } from "react";

export class BtnGlasses extends Component {
  render() {
    return (
      <div>
        <div className="col-5">
          <button
            className="btn btn-outline-secondary"
            onClick={() => this.props.handleChoiColor(this.props.btnColor)}
          >
            <img
              src={this.props.btnColor.imgSrc}
              alt="hinh"
              style={{ width: 100, borderRadius: 20 }}
            />
          </button>
        </div>
      </div>
    );
  }
}

export default BtnGlasses;
