import { useEffect, useState } from 'react'
import FoodSlider from '../component/home/FoodSlider'
import './home.css'
import { NewsType } from '@/types/news.model'
import axios from '@/utils/axios'
import useSWR from 'swr'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import aboutBg from '@/assets/home_page/about/about_bg.png'
import dot from '@/assets/home_page/dot.png'
import line from '@/assets/home_page/line.png'
import flow from '@/assets/home_page/flow_bg.png'
import straightLine from '@/assets/home_page/straight_line.png'
import transportationMap from '@/assets/home_page/transportation/transportation_map.png'
import iconCar from '@/assets/home_page/transportation/transportation_icon_car.png'
import iconTrain from '@/assets/home_page/transportation/transportation_icon_train.png'
import iconLuxurycar from '@/assets/home_page/transportation/transportation_icon_luxurycar.png'

const axiosGet = async (url: string) => {
  return axios.get(url).then((response) => {
    return response
  })
}

function Home() {
  const [canFetch, setCanFetch] = useState<boolean>(false)
  const [news, setNews] = useState<NewsType[]>([])
  const { data, error } = useSWR(canFetch ? `/home/news` : null, axiosGet)
  useEffect(() => {
    if (news) {
      setCanFetch(true)
    }
  }, [news])
  useEffect(() => {
    if (data) setNews(data.result)
  }, [data])

  useEffect(() => {
    if (error) console.error(error)
  }, [error])
  return (
    <>
      <div className="" style={{ overflowX: 'hidden' }}>
        <section className="w-full h-[812px] lg:h-[1080px] bg-blue-800 flex justify-center">
          <div
            className="
            h-full w-full
            bg-no-repeat object-center bg-cover bg-center 
            bg-[#00000099]
            bg-blend-multiply"
            style={{ backgroundImage: `url('./home_page/hero/hero_img.jpg')` }}
          ></div>
          <div className="container mt-[112px] lg:mt-[14.75rem] absolute top-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-center lg:items-center p-[20px] relative">
              <div className="left_col_block h-[169px] mb-10">
                <div className="hotel_name relative font-bold text-primary-100 text-center lg:text-left">
                  <h1 className="text-[28px] md:text-[32px] lg:text-[40px] m-0">享樂酒店</h1>
                  <h1 className="text-[16px] md:text-[20px] lg:text-[24px]">Enjoyment Luxury Hotel</h1>
                </div>
              </div>
              <div className="right_col_block h-[420px] lg:h-[678px]">
                <div
                  className="bg h-full w-full
                  border border-solid border-neutral-0 border-l-0 border-b-0 rounded-[80px]
                  backdrop-filter backdrop-blur-sm"
                ></div>
                <div className="main_block absolute top-2/3 lg:top-1/2 right-[9.5%] lg:right-[5%] -translate-y-1/2 p-[0.5rem]">
                  <div className="main_title text-neutral-0">
                    <div>
                      <h1 className="m-0 text-[3rem] md:text-[4.5rem] xl:text-[6.25rem] font-bold">高雄</h1>
                      <h1 className="m-0 text-[3rem] md:text-[4.5rem] xl:text-[6.25rem] font-bold">
                        豪華住宿之選
                      </h1>
                    </div>
                    <p className="m-0 text-[1rem] md:text-[1.5rem] xl:text-[2rem] font-semibold mb-[60px]">
                      我們致力於為您提供無與倫比的奢華體驗與優質服務
                    </p>
                  </div>
                  <Link
                    to="/rooms"
                    className="no-underline hover:text-neutral-0"
                  >
                    <Button
                      className="btn h-[64px] lg:h-[116px] w-full bg-neutral-0 rounded-lg
                      flex justify-end items-center"
                    >
                      <p className="m-0 btn_title relative mr-52 font-bold text-[16px] lg:text-[24px] mb-0">
                        立即訂房
                      </p>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="news w-[70%] mx-auto my-[80px] lg:my-[120px] px-4 bg-primary-10 relative">
          <img
            className="absolute w-[25%] md:w-[15%] right-[30px] lg:right-[-80px] top-[-38px] lg:top-[-8px] bg-cover"
            src={dot}
            alt="dot"
          />
          <div className="-mx-4 flex flex-wrap">
            <div className="right_col w-full lg:w-2/12 flex-none mb-[60px] lg:mb-0">
              <div className="subtitle font-bold text-3xl lg:text-5xl text-primary-100">
                <p className="m-0 leading-[37.6px] lg:leading-[57.6px] tracking-heading">最新</p>
                <p className="m-0 leading-[37.6px] lg:leading-[57.6px] tracking-heading">消息</p>
              </div>
            </div>
            <div className="w-full lg:w-10/12 flex-none">
              {news.map((item: NewsType) => {
                return (
                  <div key={item._id} className="flex flex-wrap mb-10">
                    <div className="lg:-ml-6 lg:pr-6 lg:w-5/12 w-full flex-none">
                      {/* <img className="w-full object-cover" src="./home_page/news/news_01.png" /> */}
                      <img className="w-full rounded-lg object-cover" src={item.image} />
                    </div>
                    <div className="lg:-mx-4 w-full lg:w-7/12 flex-none lg:px-4 grid content-center">
                      <p className="font-bold text-[28px] lg:text-[32px]">{item.title}</p>
                      <p className="font-medium text-[14px] lg:text-base text-neutral-80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <img
            className="absolute w-[25%] md:w-[15%] lg:left-[-80px] lg:bottom-[-180px] z-10 bg-cover"
            src={dot}
            alt="dot"
          />
        </section>
        <section className="about w-full h-[794px] lg:h-[992px] bg-neutral-120 relative">
          <div>
            <img
              className="w-full object-cover mt-[120px] mb-[200px]"
              src={aboutBg}
            />
            <div
              className="container h-[594px] lg:h-[672px] w-11/12 lg:w-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    border border-solid border-neutral-0 border-l-0 border-b-0 rounded-[80px] rounded-br-none
                    bg-gradient-to-b from-[#140F0ACC] to-[#BE9C7CCC]
                    backdrop-filter backdrop-blur-sm
                    flex justify-center items-center"
            >
              <div className="m-6 lg:m-20 text-neutral-0">
                <div className="about_title font-bold text-3xl lg:text-5xl lg:mb-20 relative">
                  <p className="m-0 leading-[37.6px] lg:leading-[57.6px] tracking-heading">關於</p>
                  <p className="m-0 leading-[37.6px] lg:leading-[57.6px] tracking-heading">我們</p>
                </div>
                <p className="mb-4 lg:mb-10 text-[14px] lg:text-base">
                  享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
                  <br />
                  我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
                </p>
                <p className="mb-4 lg:mb-10 text-[14px] lg:text-base">
                  我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
                  <br />
                  我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
                </p>
                <p className="mb-4 lg:mb-10 text-[14px] lg:text-base">
                  在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；
                  您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
                </p>
                <p className="mb-4 lg:mb-10 text-[14px] lg:text-base">
                  享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="rooms bg-neutral-120 pb-[120px] relative">
          <img
            className="absolute 
            top-[-90px] right-[calc(100vw-140vw)] h-[12%] w-[110%]
            lg:right-[5px] lg:top-[100px] lg:w-[52%] bg-cover"
            src={line}
            alt="line"
          />
          <img
            className="absolute right-[5px] bottom-[0px] w-full bg-cover"
            src={flow}
            alt="flow"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="left_col_block w-[95%] mx-auto mb-[24px] lg:w-full">
              <img
                className="w-full rounded-lg object-cover"
                src="./home_page/rooms/rooms_01.png"
              />
            </div>
            <div className="right_col_block w-[95%] mx-auto lg:w-3/4 xl:w-2/3 flex flex-col justify-end relative -top-24">
              <p className="m-0 mb-4 font-bold text-neutral-0 text-[40px]">
                尊爵雙人房
              </p>
              <p className="m-0 mb-10 font-medium text-neutral-0 text-base">
                享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
              </p>
              <p className="m-0 mb-10 font-medium text-neutral-0 text-[32px]">
                NT$ 10,000
              </p>
              <Link to="/rooms" className="no-underline hover:text-neutral-0">
                <Button
                  className="btn h-[64px] lg:h-[116px] w-full bg-neutral-0 rounded-lg
                      flex justify-end items-center"
                >
                  <p className="m-0 btn_title relative mr-52 font-bold text-[16px] lg:text-[24px] mb-0">
                    查看更多
                  </p>
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="food w-[95%] lg:w-[70%] mx-auto my-[120px] px-4 bg-primary-10 relative">
          <img
            className="absolute right-[-120px] top-[-146px] w-[12%] bg-cover"
            src={dot}
            alt="dot"
          />
          <img
            className="absolute left-[-220px] top-[-60px] w-[13.5%] bg-cover"
            src={straightLine}
            alt="straightLine"
          />
          <div className="subtitle_line_right font-bold text-5xl text-primary-100 mb-20">
            <p className="m-0 leading-[57.6px] tracking-heading">佳餚</p>
            <p className="m-0 leading-[57.6px] tracking-heading">美饌</p>
          </div>
          <FoodSlider />
        </section>
        <section className="transportation pt-[120px] pb-[267px] px-4 bg-neutral-120 relative">
          <div className="w-[95%] lg:w-[70%] mx-auto">
            <div className="subtitle_line_right font-bold text-5xl text-primary-100 mb-20">
              <p className="m-0 leading-[57.6px] tracking-heading">交通</p>
              <p className="m-0 leading-[57.6px] tracking-heading">方式</p>
            </div>
            <div className="w-full mb-10">
              <p className="text-neutral-0">台灣高雄市新興區六角路123號</p>
              <img
                className="w-full rounded-lg h-[360px] object-cover"
                src={transportationMap}
                alt="transportationMap"
              />
            </div>
            <div className="w-full grid grid-cols-1 xl:grid-cols-3 content-center gap-6">
              <div>
                <div className="w-[80px] h-[80px]">
                  <img
                    className="w-full object-cover"
                    src={iconCar}
                    alt="iconCar"
                  />
                </div>
                <div className="text-neutral-0">
                  <p className="text-base lg:text-[24px]">自行開車</p>
                  <p className="text-[14px] lg:text-base">
                    如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
                  </p>
                </div>
              </div>
              <div>
                <div className="w-[80px] h-[80px]">
                  <img
                    className="w-full object-cover"
                    src={iconTrain}
                    alt="iconTrain"
                  />
                </div>
                <div className="text-neutral-0">
                  <p className="text-base lg:text-[24px]">高鐵/火車</p>
                  <p className="text-[14px] lg:text-base">
                    如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
                  </p>
                </div>
              </div>
              <div>
                <div className="w-[80px] h-[80px]">
                  <img
                    className="w-full object-cover"
                    src={iconLuxurycar}
                    alt="iconLuxurycar"
                  />
                </div>
                <div className="text-neutral-0">
                  <p className="text-base lg:text-[24px]">禮賓車服務</p>
                  <p className="text-[14px] lg:text-base">
                    承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
                  </p>
                </div>
              </div>
            </div>
            <img
              className="absolute
              h-[9%]
              bottom-0 left-0 lg:w-full bg-cover"
              src="./home_page/full_line.png"
              alt=""
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
