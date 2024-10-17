import Banner from "./components/banner/banner";
import Calendar from "./components/calender/calender";
import Email from "./components/email/email";
import News from "./components/news/news";
import Todo from "./components/todo/todo";
import Navigation from "./Navigation";

export default function Home() {
  return (
    <div id="home">
      <div id="header" className="relative z-50">
        <Navigation />
        <Banner imgSrc="/icons/배경2.jpg" /> { /* Hook 사용해서 설정에서 변경 가능하게 하기. */ }
      </div>
      <div id="news-section">
        <News />
      </div>
      <div id="plan-section">
        <Calendar />
        <br></br>
        <Todo />
      </div>
      <div id="email-section">
        <Email />
      </div>
    </div>
  );
}
