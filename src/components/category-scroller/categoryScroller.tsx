import './category-scroller.css'
import { useState, useEffect } from 'react'
export default function CategoryScroller(){
    const [index, setIndex] = useState<null|number>(null)
    useEffect(() => {
        function handleScroll(){
          const categories = document.querySelectorAll('.menu-category');
          categories.forEach((category, i) => {
            const categoryElement = category as HTMLElement
            if (categoryElement.offsetTop <= window.scrollY + window.innerHeight / 3) {
              setIndex(i);
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
    return(
        <div className="category-scroller">
            <a href="#1" className={`category ${index == 0 ? "active" : ""}`}>Category 1</a>
            <a href="#2" className={`category ${index == 1 ? "active" : ""}`}>Category 2</a>
            <a href="#3" className={`category ${index == 2 ? "active" : ""}`}>Category 3</a>
            <a href="#4" className={`category ${index == 3 ? "active" : ""}`}>Category 4</a>
            <a href="#5" className={`category ${index == 4 ? "active" : ""}`}>Category 5</a>
            <a href="#6" className={`category ${index == 5 ? "active" : ""}`}>Category 6</a>
        </div>
    )
}