import Image from "next/image";

interface Props {
    imgSrc: string
}

export default function Banner({ imgSrc } : Props){
    return (
        <div id="banner" className="w-screen h-[720px] contain">
            <Image src={imgSrc} alt="Background Picture" fill objectFit="cover"/>
        </div>
    );
}