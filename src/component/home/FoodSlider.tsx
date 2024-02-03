import { FoodType } from "@/types/culinary.model";
import axios from "@/utils/axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import useSWR from "swr";

const axiosGet = async (url: string) => {
  return axios.get(url).then((response) => {
    return response
  })
}
const settings = {
  className: "food",
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true
};
const MultipleItems = () => {
  const [canFetch, setCanFetch] = useState<boolean>(false)
  const [foods, setFoods] = useState<FoodType[]>([])
  const { data, error } = useSWR(
    canFetch ? `/home/culinary` : null,
    axiosGet,
  )
  useEffect(() => {
    if (foods) {
      setCanFetch(true)
    }
  }, [foods])
  useEffect(() => {
    if (data) setFoods(data.result)
  }, [data])

  useEffect(() => {
    if (error) console.error(error)
  }, [error])
  return (
    <>
      <Slider {...settings}>
        {foods.map((food: FoodType, index: number) => {
          return <div className="w-[416px] h-[calc(100vh-38vh)]" key={index}>
            <div
              className="
              food_bg
              w-full h-full
              bg-no-repeat object-cover bg-cover"
              style = {{ backgroundImage: `url('${food.image}')` }}
            >
              <div className="frosted_glass text-neutral-0 p-6">
                <div className="flex justify-between items-center">
                  <p className="text-xl">{food.title}</p>
                  <p className="text-base">{food.diningTime}</p>
                </div>
                <p className="text-base">{food.description}</p>
              </div>
            </div>
          </div>
        })}
      </Slider>
    </>
  );
};

export default MultipleItems;
