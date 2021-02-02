import React from "react";
import styles from "./Slider.module.scss";
import { sliderScroll } from "./SliderEngine";
import { SliderFull } from "./SliderFull";
import { SliderItem } from "./SliderItem";

export class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isActive: false,
    };
  }

  sliderFullState = (index, isActive) => {
    this.setState({ index: index });
    this.setState({ isActive: isActive });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2>Follow me on Instagram</h2>
        </div>
        <div className={styles.slider}>
          <button
            id={styles.leftArrow}
            className={styles.sliderControls}
            onClick={() =>
              sliderScroll(styles.sliderId, "left", this.props.images)
            }
          ></button>
          <SliderItem
            images={this.props.images}
            sliderFullState={this.sliderFullState}
          />
          <button
            id={styles.rightArrow}
            className={styles.sliderControls}
            onClick={() =>
              sliderScroll(styles.sliderId, "right", this.props.images)
            }
          ></button>
        </div>
        <SliderFull
          index={this.state.index}
          images={this.props.images}
          socialIcons={this.props.socialIcons}
          isActive={this.state.isActive}
          sliderFullState={this.sliderFullState}
        />
      </div>
    );
  }
}
