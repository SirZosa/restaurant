import './big-card.css'
import { Link } from 'react-router-dom';
interface Props{
    imgUrl: string;
    text: string;
}
export default function BigCard({imgUrl, text}: Props){
    return(
        <div className="big-card">
            <Link to={text.toLowerCase()}>
                <div className="card-background-image" style={{backgroundImage: `url(${imgUrl})`}}/>
                <div className="big-card-overlay" />
                <div className="cover-content">
                <h3>{text}</h3>
                </div>
            </Link>
        </div>
    )
}