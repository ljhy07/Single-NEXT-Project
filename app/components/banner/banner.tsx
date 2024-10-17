"use client";

import Image from "next/image";

interface Props {
    imgSrc: string;
}

export default function Banner({ imgSrc }: Props) {
    return (
        <div id="banner" className="relative w-360 h-180">
            <Image 
                src={imgSrc} 
                alt="Background Picture" 
                fill 
                priority 
                style={{ objectFit: "cover" }} 
            />
        </div>
    );
}
