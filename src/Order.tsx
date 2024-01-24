import arrowLeftIcon from './icons/arrow-left.svg'
const Order = () => (
  <>
    <header className="bg-[#140F0A] h-[120px]"></header>
    <main>
      {/* breadcrumb */}
      <div className="flex items-center font-bold">
        <img src={arrowLeftIcon} alt="arrowicon" className="h-10 w-10" />
        <p className="text-4xl">確認訂房資訊</p>
      </div>
      <section className="grid gap-y-10">
        <div className="font-bold text-3xl">訂房資訊</div>
        <div className="grid gap-y-6">
          <div className="flex justify-start">
            <div className="grid gap-y-2 flex-1">
              <div className="font-bold before:content-[''] before:border-l-4 before:h-full before:mr-3 before:border-[#BF9D7D] before:border-solid">選擇房型</div>
              <div className="">尊爵雙人房</div>
            </div>
            <div className="self-center">編輯</div>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-[##140F0A] h-[456px]"></footer>
  </>
);

export default Order
