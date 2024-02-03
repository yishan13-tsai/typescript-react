
function RoomsHead() {
    return (
        <>
            <section className="w-full h-[1080px] bg-blue-800 flex justify-center">
                <div className="
                    h-full w-full
                    bg-no-repeat object-center bg-cover
                    bg-[#00000099]
                    bg-blend-multiply"
                    style={{ backgroundImage: `url('./home_page/hero/hero_img.jpg')` }}
                    >
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
                                    <p className="m-0 text-[6.25rem] font-bold">客房旅宿</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default RoomsHead;