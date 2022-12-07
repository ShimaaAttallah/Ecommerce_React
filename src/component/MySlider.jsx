import { Carousel } from 'react-bootstrap';
import "./css/MySliderstyle.css";

export const MySlider = ({carouselItems}) => {
        return (
            <div className='container'>
            <Carousel>
                {
                      carouselItems.map(item => {
                        console.log(item);
                        return (
                            <Carousel.Item key={item.id}>
                                <img className='slideimg' src={item.img} alt="slide"/>
                                <Carousel.Caption>
                                    <h3>{item.caption}</h3>
                                    <p>{item.des}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                        })
                    }
            </Carousel>  
            </div>
        )
}          