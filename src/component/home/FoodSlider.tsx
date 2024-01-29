import { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      className: "food",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <>
        <Slider {...settings}>
          <div className="w-[416px] h-[calc(100vh-38vh)]">
            <div className="
              food_bg
              w-full h-full
              bg-[url('./home_page/food/food_01.png')]
              bg-no-repeat object-cover bg-cover"
            >
              <div className="frosted_glass text-neutral-0 p-6">
                <div className="flex justify-between items-center">
                  <p className="text-xl">海霸</p>
                  <p className="text-base">SUN-MON  11:00 - 20:30</p>
                </div>
                <p className="text-base">
                  以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。
                </p>
              </div>
            </div>
          </div>
          <div className="w-[416px] h-[calc(100vh-38vh)]">
            <div className="
              food_bg
              w-full h-full
              bg-[url('./home_page/food/food_02.png')]
              bg-no-repeat object-cover bg-cover"
            >
              <div className="frosted_glass"></div>
            </div>
          </div>
          <div className="w-[416px] h-[calc(100vh-38vh)]">
            <div className="
              food_bg
              w-full h-full
              bg-[url('./home_page/food/food_03.png')]
              bg-no-repeat object-cover bg-cover"
            >
              <div className="frosted_glass"></div>
            </div>
          </div>
          <div className="w-[416px] h-[calc(100vh-38vh)]">
            <div className="
              food_bg
              w-full h-full
              bg-[url('./home_page/food/food_04.png')]
              bg-no-repeat object-cover bg-cover"
            >
              <div className="frosted_glass"></div>
            </div>
          </div>
          <div className="w-[416px] h-[calc(100vh-38vh)]">
            <div className="
              food_bg
              w-full h-full
              bg-[url('./home_page/food/food_05.png')]
              bg-no-repeat object-cover bg-cover"
            >
              <div className="frosted_glass"></div>
            </div>
          </div>
        </Slider>
      </>
    );
  }
}