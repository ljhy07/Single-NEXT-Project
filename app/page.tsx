import Banner from "./components/banner/banner";
import Navigation from "./Navigation";

export default function Home() {
  return (
    <div id="home">
      <div id="header" className="relative z-50">
        <Navigation />
        <Banner imgSrc="/icons/배경2.jpg" /> { /* Hook 사용해서 설정에서 변경 가능하게 하기. */ }
      </div>
      {/* <div id="news-section"></div>
      <div id="plan-section"></div>
      <div id="email-section"></div> */}
    </div>
  );
}
