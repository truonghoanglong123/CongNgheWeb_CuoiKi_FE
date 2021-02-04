import CRUD from "../sevices/crud";
import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/29/%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Ki%E1%BA%BFn_tr%C3%BAc_%C4%90%C3%A0_N%E1%BA%B5ng.jpeg',
        // altText: 'Slide 1',
        // caption: 'Slide 1'
    },
    {
        src: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/108109168_636678380280045_1729231566561415854_n.jpg?_nc_cat=111&ccb=2&_nc_sid=f79d6e&_nc_ohc=R4WUarQN8FMAX8tgb5p&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=14a1265ca53dc5086bfe68f4a3c62d68&oe=6040BB71',
        // altText: 'Slide 2',
        // caption: 'Slide 2'
    },
    {
        src: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/138743891_1444060695938833_1026078891187492388_n.jpg?_nc_cat=103&ccb=2&_nc_sid=ae9488&_nc_ohc=GlW6USV2keAAX-2nBth&_nc_ht=scontent.fdad3-1.fna&oh=b50f8142aa8fc729dba95ab2a30ddc7e&oe=60419CE8',
        // altText: 'Slide 3',
        // caption: 'Slide 3'
    }
];
function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} className="slide-image" alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });
    return (
        <>
            <div className="container-app-app">
                <nav>
                    <div className="logo">
                        TLH
                    </div>
                    <ul>
                        <li>
                            <Link to="/customer">Customers</Link>
                        </li>
                        <li>
                            <Link to="/categories">Categories</Link>
                        </li>
                        <li>
                            <Link to="/employees">Employees</Link>
                        </li>
                        <li><Link to="/orderDetail">OrderDetails</Link>

                        </li>
                        <li>
                            <Link to="/order">Orders</Link>
                        </li>
                        <li>
                            <Link to="/Product">Products</Link>
                        </li>
                        <li><Link to="shipper">Shippers</Link>

                        </li>
                        <li><Link to="/supplier">Suppliers</Link>
                        </li>
                    </ul>
                </nav>
                <div className="content">
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </div>


                <div className="footer">
                    <p>© 2021 Bản quyền thuộc Team LTH. No copy</p>
                </div>
            </div>
        </>
    )
}

export default Home;