import './menu.css'
import MenuItem from "../../components/menu-item/menu-item"
import CategoryScroller from '../../components/category-scroller/categoryScroller'
import food from '../../assets/menu.jpg'
export default function Menu(){
    const info = "Lorem ipsum dolor, sit amet consectetur adipisic elit. lorem ipsum dolor, sit amet."
    return (
        <section className="menu">
            <hr />
            <h2 className='menu-header'> MENU</h2>
            <hr />
            <CategoryScroller/>
            <section className='menu-container'>
                <h3 id='1' className="menu-category">Category 1</h3><hr />
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <h3 id='2' className="menu-category">Category 2</h3><hr />
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <h3 id='3' className="menu-category">Category 3</h3><hr />
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <h3 id='4' className="menu-category">Category 4</h3><hr />
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <h3 id='5' className="menu-category">Category 5</h3><hr />
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <h3 id='6' className="menu-category">Category 6</h3><hr />
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
                <MenuItem name="Food name" description={info} imgUrl={food} price={9.99}/>
            </section>
        </section>
    )
}