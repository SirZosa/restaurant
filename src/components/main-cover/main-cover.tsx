import "./main-cover.css"
interface Props{
    imgUrl: string;
}
export default function MainCover({imgUrl}:Props){
    
    return(
        <div className="main-cover">
            <div className="background-image" style={{backgroundImage: `url(${imgUrl})`}}/>
            <div className="overlay"/>
            <div className="cover-content">
                <h1>BEST FOOD IN THE  <br /> WORLD</h1>
                <h2>WELCOME!</h2>
            </div>
        </div>
    )
}