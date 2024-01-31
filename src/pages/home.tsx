import FoodSlider from '../component/home/FoodSlider'
import './home.css'

function home() {
  return (
    <>
      <div className="">
        <section className="w-full h-[1080px] bg-blue-800 flex justify-center">
          <div className="
            h-full w-full
            bg-[url('./home_page/hero/hero_img.jpg')]
            bg-no-repeat object-center bg-cover
            bg-[#00000099]
            bg-blend-multiply">
          </div>
          <div className="container mt-[14.75rem] p-[0.5rem] absolute top-0">
            <div className="grid grid-cols-2 relative justify-center items-center h-[678px]">
              <div className="left_col_block">
                <div className="hotel_name relative font-bold text-primary-100">
                  <h1 className="text-[40px] m-0">享樂酒店</h1>
                  <h1 className="text-[24px]">Enjoyment Luxury Hotel</h1>
                </div>
              </div>
              <div className="right_col_block h-full">
                <div className="bg h-full w-full
                  border border-solid border-neutral-0 border-l-0 border-b-0 rounded-[80px]
                  backdrop-filter backdrop-blur-sm"></div>
                <div className="main_block absolute top-1/2 right-[9.5%] -translate-y-1/2">
                  <div className="main_title text-neutral-0">
                    <div>
                      <h1 className="m-0 text-[6.25rem] font-bold">高雄</h1>
                      <h1 className="m-0 text-[6.25rem] font-bold">豪華住宿之選</h1>
                    </div>
                    <p className="m-0 text-[2rem] font-semibold mb-[60px]">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                  </div>
                  <div className="btn h-[116px] w-full bg-neutral-0 rounded-lg
                    flex justify-end items-center">
                    <p className="m-0 btn_title relative mr-52 font-bold text-[24px] mb-0">立即訂房</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="news w-[70%] mx-auto my-[120px] px-4 bg-primary-10 relative">
          <img className="absolute right-[-80px] top-[20px] w-[12%] bg-cover" src="./home_page/dot.png" alt="" />
          <div className="-mx-4 flex flex-wrap">
            <div className="right_col w-2/12 flex-none">
              <div className="subtitle font-bold text-5xl text-primary-100">
                <p className="m-0 leading-[57.6px] tracking-heading">最新</p>
                <p className="m-0 leading-[57.6px] tracking-heading">消息</p>
              </div>
            </div>
            <div className="w-10/12 flex-none">
              <div className="flex flex-wrap mb-10">
                <div className="-ml-6 pr-6 w-5/12 flex-none">
                  <img className="w-full object-cover" src="./home_page/news/news_01.png"/>
                </div>
                <div className="-mx-4 w-7/12 flex-none px-4 grid content-center">
                  <p className="font-bold text-[32px]">秋季旅遊，豪華享受方案</p>
                  <p className="font-medium text-base text-neutral-80">秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。</p>
                </div>
              </div>
              <div className="flex flex-wrap mb-10">
                <div className="-ml-6 pr-6 w-5/12 flex-none">
                  <img className="w-full object-cover" src="./home_page/news/news_02.png"/>
                </div>
                <div className="-mx-4 w-7/12 flex-none px-4 grid content-center">
                  <p className="font-bold text-[32px]">輕鬆住房專案</p>
                  <p className="font-medium text-base text-neutral-80">我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。</p>
                </div>
              </div>
              <div className="flex flex-wrap mb-10">
                <div className="-ml-6 pr-6 w-5/12 flex-none">
                  <img className="w-full object-cover" src="./home_page/news/news_03.png"/>
                </div>
                <div className="-mx-4 w-7/12 flex-none px-4 grid content-center">
                  <p className="font-bold text-[32px]">耶誕快樂，住房送禮</p>
                  <p className="font-medium text-base text-neutral-80">聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！</p>
                </div>
              </div>
            </div>
          </div>
          <img className="absolute left-[-80px] bottom-[-180px] z-10 w-[12%] bg-cover" src="./home_page/dot.png" alt="" />
        </section>
        <section className="about w-full bg-neutral-120 relative">
          <div>
            <img className="w-full object-cover mt-[120px] mb-[200px]" src="./home_page/about/about_bg.png"/>
            <div className="container h-[672px] w-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    border border-solid border-neutral-0 border-l-0 border-b-0 rounded-[80px] rounded-br-none
                    bg-gradient-to-b from-[#140F0ACC] to-[#BE9C7CCC]
                    backdrop-filter backdrop-blur-sm
                    flex justify-center items-center">
              <div className="m-20 text-neutral-0">
                <div className="about_title font-bold text-5xl mb-20 relative">
                  <p className="m-0 leading-[57.6px] tracking-heading">關於</p>
                  <p className="m-0 leading-[57.6px] tracking-heading">我們</p>
                </div>
                <p className="mb-10">
                  享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。<br/>
                  我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
                </p>
                <p className="mb-10">
                  我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。<br/>
                  我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。 
                </p>
                <p className="mb-10">
                  在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；
                  您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。 
                </p>
                <p className="mb-10">
                  享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="rooms bg-neutral-120 pb-[120px] relative">
          <img className="absolute right-[5px] top-[100px] w-[52%] bg-cover" src="./home_page/line.png" alt="" />
          <img className="absolute right-[5px] bottom-[0px] w-full bg-cover" src="./home_page/flow_bg.png" alt="" />
          <div className="grid grid-cols-2 gap-20">
              <div className="left_col_block w-full">
                <img className="w-full object-cover" src="./home_page/rooms/rooms_01.png"/>
              </div>
              <div className="right_col_block w-2/3 flex flex-col justify-end relative -top-24">
                <p className="m-0 mb-4 font-bold text-neutral-0 text-[40px]">尊爵雙人房</p>
                <p className="m-0 mb-10 font-medium text-neutral-0 text-base">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
                <p className="m-0 mb-10 font-medium text-neutral-0 text-[32px]">NT$ 10,000</p>
                <div className="btn h-[116px] w-full bg-neutral-0 rounded-lg
                  flex justify-end items-center">
                  <p className="m-0 btn_title relative mr-52 font-bold text-[24px] mb-0">查看更多</p>
                </div>
              </div>
            </div>
        </section>
        <section className="food w-[70%] mx-auto my-[120px] px-4 bg-primary-10 relative">
        <img className="absolute right-[-120px] top-[-146px] w-[12%] bg-cover" src="./home_page/dot.png" alt="" />
        <img className="absolute left-[-220px] top-[-60px] w-[13.5%] bg-cover" src="./home_page/straight_line.png" alt="" />
          <div className="subtitle_line_right font-bold text-5xl text-primary-100 mb-20">
            <p className="m-0 leading-[57.6px] tracking-heading">佳餚</p>
            <p className="m-0 leading-[57.6px] tracking-heading">美饌</p>
          </div>
          <FoodSlider/>
        </section>
        <section className="transportation pt-[120px] pb-[267px] px-4 bg-neutral-120 relative">
          <div className="w-[70%] mx-auto">
            <div className="subtitle_line_right font-bold text-5xl text-primary-100 mb-20">
              <p className="m-0 leading-[57.6px] tracking-heading">交通</p>
              <p className="m-0 leading-[57.6px] tracking-heading">方式</p>
            </div>
            <div className="w-full mb-10">
              <p className="text-neutral-0">台灣高雄市新興區六角路123號</p>
              <img className="w-full object-cover" src="./home_page/transportation/transportation_map.png" alt="" />
            </div>
            <div className="w-full grid grid-cols-3 content-center gap-6">
              <div>
                <div className="w-[80px] h-[80px]">
                  <img className="w-full object-cover" src="./home_page/transportation/transportation_icon_car.png" alt="" />
                </div>
                <div className="text-neutral-0">
                  <p>自行開車</p>
                  <p>如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。</p>
                </div>
              </div>
              <div>
                <div className="w-[80px] h-[80px]">
                  <img className="w-full object-cover" src="./home_page/transportation/transportation_icon_train.png" alt="" />
                </div>
                <div className="text-neutral-0">
                  <p>高鐵/火車</p>
                  <p>如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。</p>
                </div>
              </div>
              <div>
                <div className="w-[80px] h-[80px]">
                  <img className="w-full object-cover" src="./home_page/transportation/transportation_icon_luxurycar.png" alt="" />
                </div>
                <div className="text-neutral-0">
                  <p>禮賓車服務</p>
                  <p>承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567</p>
                </div>
              </div>
            </div>
            <img className="absolute bottom-0 left-0 w-full bg-cover" src="./home_page/full_line.png" alt="" />
          </div>
        </section>
      </div>
    </>
  );
}

export default home;
