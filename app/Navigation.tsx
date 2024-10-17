'use client'

import { montserrat } from 'app/util/fonts'

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
            <p id="home" className={`${montserrat.variable} font-montserrat text-white`} onClick={homeHandleClick}>Lee jhyeon</p>
            <p id="news" className={`${montserrat.variable} font-montserrat text-white`} onClick={newsHandleClick}>news</p>
            <p id="plan" className={`${montserrat.variable} font-montserrat text-white`} onClick={planHandleClick}>plan</p>
            <p id="email" className={`${montserrat.variable} font-montserrat text-white`} onClick={emailHandleClick}>email</p>
            <div id="hamburger" onClick={DimHandleClick}></div>
        </nav>
    );
}