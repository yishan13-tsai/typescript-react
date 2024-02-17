function RoomsHead() {
    return (
        <>
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
                                <h1 className="text-[28px] md:text-[32px] lg:text-[40px] m-0">
                                    享樂酒店
                                </h1>
                                <h1 className="text-[16px] md:text-[20px] lg:text-[24px]">
                                    Enjoyment Luxury Hotel
                                </h1>
                            </div>
                        </div>
                        <div className="right_col_block h-[420px] lg:h-[678px]">
                            <div
                                className="bg h-full w-full
                                border border-solid border-neutral-0 border-l-0 border-b-0 rounded-[80px]
                                backdrop-filter backdrop-blur-sm"
                            ></div>
                            <div className="main_block absolute top-2/3 lg:top-1/2 right-[22%] lg:right-[5%] -translate-y-1/2 p-[0.5rem]">
                                <div className="main_title text-neutral-0">
                                    <div>
                                        <h1 className="m-0 text-[3rem] sm:text-[6.25rem] font-bold">
                                            客房旅宿
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default RoomsHead
