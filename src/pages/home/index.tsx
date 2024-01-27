import {PrimaryButton} from "./primaryButton.tsx";

const Index = () => (
  <>
    <h1 className="text-3xl underline">
      測試字體
    </h1>
    <p className="text-xl">字體大小示範: test-xl</p>
    <p className="text-lg">字體大小示範: text-lg</p>
    <p className="leading-heading">字體line height示範: leading-heading</p>
    <p className="leading-normal">字體line height示範: leading-normal</p>
    <p className="tracking-heading">字體letter spacing示範: tracking-heading</p>
    <p className="tracking-normal">字體letter spacing示範: tracking-normal</p>
    <p className="text-primary-100">字體顏色示範: color-primary-100</p>
    <p className="bg-info-20">背景顏色示範: bg-info-20</p>
    <PrimaryButton>Button</PrimaryButton>
  </>
);
export default Index;
