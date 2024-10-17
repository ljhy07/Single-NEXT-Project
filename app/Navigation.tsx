'use client'

export default function Navigation() {
    const homeHandleClick = () => {
        document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' });
    }

    const newsHandleClick = () => {
        document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' });
    }

    const planHandleClick = () => {
        document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' });
    }

    const emailHandleClick = () => {
        document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' });
    }

    const DimHandleClick = () => {

    }

    return (
        <nav>
            <p id="home" onClick={homeHandleClick}>Lee jhyeon</p>
            <p id="news" onClick={newsHandleClick}>news</p>
            <p id="plan" onClick={planHandleClick}>plan</p>
            <p id="email" onClick={emailHandleClick}>email</p>
            <div id="hamburger" onClick={DimHandleClick}></div>
        </nav>
    );
}