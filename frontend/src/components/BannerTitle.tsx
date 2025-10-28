import "./BannerTitle.scss";

import bgImg from "../assets/bannerImg/compass-8324516_1280.jpg";

interface title {
    title : string
}
export default function BannerTitle({title}: title) {
    return (
        <div className="wrapper">
            <div className="title">
                <h2>
                    {title}
                </h2>
            </div>
            <div className="bg">
                <img src={bgImg} alt="background image of the banner" />
            </div>
        </div>
    )
}