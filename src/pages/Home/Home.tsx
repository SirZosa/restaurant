import MainCover from "../../components/main-cover/main-cover"
import BigCard from "../../components/big-card/bigCard"
import coverImg from '../../assets/main-cover.jpg'
import menu from '../../assets/menu.jpg'
import special from '../../assets/special.jpg'
import other from '../../assets/others.jpg'
export default function Home(){
    return(
        <>
            <MainCover imgUrl={coverImg}/>
            <div className="big-cards-container">
                <BigCard text='MENU' imgUrl={menu}/>
                <BigCard text='SPECIALS' imgUrl={special}/>
                <BigCard text='OTHER' imgUrl={other}/>
            </div>
        </>
    )
}