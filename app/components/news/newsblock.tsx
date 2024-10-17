interface Props {
    imgSrc: string,
    title: string,
    contents: string
}

export default function newsblock({ imgSrc, title, contents }: Props){
    return (
        <div id="news-block" className="w-90 h-97">
            <img src={imgSrc} className="w-85 h-65"></img>
            <p id="title">{title}</p>
            <p id="contents">{contents}</p>
        </div>
    );
}