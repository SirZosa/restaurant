import './menu-item.css'
interface Props{
    name: string;
    description: string;
    imgUrl: string;
    price: number;
}
export default function MenuItem({name, description, imgUrl, price}:Props){
    return (
        <div className="menu-item">
            <div className="menu-item-info">
                <h3 className='item-name'>{name}</h3>
                <p className='description'>{description}</p>
                <p className="price">Price: $ {price}</p>
            </div>
            <img className='menu-item-img' src={imgUrl} alt="food image" />
        </div>
    )
}