import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./App.css";

// import required modules
import { Navigation } from "swiper";

const Products = (props) => {



   


    const card = props.items.map((item) => {
        const handleClick = (e) => {
            if (item.attr1 === e.target.value) {
                props.cart(prevCart => prevCart + 1)

            }
        }

        const shipping = item.samedayshipping ? <div className="kargo-div"><h4 className="kargo">BUGÜN KARGODA</h4></div> : "";

        return (
            <Col md="4" sm="6" lg="2" className="mx-lg-3  text-align card-col" key={item.attr1} >
                <Card style={{ width: '15.8rem' }} className="card-body">
                    <Card.Img variant="top" src={item.img} className="img" />
                    <Card.Body>
                        <Card.Title className="title"><i class="fa-solid fa-star yellow"></i> <span className="yellow">Yorum  </span>({item.comment})</Card.Title>
                        <Card.Text>
                            {item.code}
                        </Card.Text>
                        <Card.Text>
                            {item.title}
                        </Card.Text>
                        <Card.Text>
                            {shipping}
                        </Card.Text>
                        <Card.Text>
                            <div className="price-div"><span className="price">{item.price} {item.dcur}</span></div>
                        </Card.Text>
                        <div className="button-div">
                            <Button value={item.attr1} onClick={handleClick} variant="primary" className="button">Sepete ekle</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
    
    const card2 = props.bestSeller.splice(0, 5).map((item) => {
        const handleClick = (e) => {
            if (item.attr1 === e.target.value) {
                props.cart(prevCart => prevCart + 1)

            }
        }

        const shipping = item.samedayshipping ? <div className="kargo-div"><h4 className="kargo">BUGÜN KARGODA</h4></div> : "";

        return (
            <Col md lg="2" className="mx-3 text-align" key={item.attr1} >
                <Card style={{ width: '15.8rem' }} className="card">
                    <Card.Img variant="top" src={item.img} className="img" />
                    <Card.Body>
                        <Card.Title className="title"><i class="fa-solid fa-star yellow"></i> <span className="yellow">Yorum  </span>({item.comment})</Card.Title>
                        <Card.Text>
                            {item.code}
                        </Card.Text>
                        <Card.Text>
                            {item.title}
                        </Card.Text>
                        <Card.Text>
                            {shipping}
                        </Card.Text>
                        <Card.Text>
                            <div className="price-div"><span className="price">{item.price} {item.dcur}</span></div>
                        </Card.Text>
                        <div className="button-div">
                            <Button value={item.attr1} onClick={handleClick} variant="primary" className="button">Sepete ekle</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
    const card3 = props.bestSeller.map((item) => {
        const handleClick = (e) => {
            if (item.attr1 === e.target.value) {
                props.cart(prevCart => prevCart + 1)

            }
        }

        const shipping = item.samedayshipping ? <div className="kargo-div"><h4 className="kargo">BUGÜN KARGODA</h4></div> : "";

        return (
            <Col md lg="2" className="mx-3 text-align" key={item.attr1} >
                <Card style={{ width: '15.8rem' }} className="card mx-md-2">
                    <Card.Img variant="top" src={item.img} className="img" />
                    <Card.Body>
                        <Card.Title className="title"><i class="fa-solid fa-star yellow"></i> <span className="yellow">Yorum  </span>({item.comment})</Card.Title>
                        <Card.Text>
                            {item.code}
                        </Card.Text>
                        <Card.Text>
                            {item.title}
                        </Card.Text>
                        <Card.Text>
                            {shipping}
                        </Card.Text>
                        <Card.Text>
                            <div className="price-div"><span className="price">{item.price} {item.dcur}</span></div>
                        </Card.Text>
                        <div className="button-div">
                            <Button value={item.attr1} onClick={handleClick} variant="primary" className="button">Sepete ekle</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    

    return (
        <div>

            <Container className="py-5 first-container ">
            
                <Row className=" mx-md-4">
                    <h3 className="mx-5 my-5 padding">Öne çıkan ürünler</h3>
                    {card}


                </Row>

            </Container>
            <Container className="py-5">
                <h3 className="mx-5 my-4">Çok satanlar</h3>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper2">
                    <SwiperSlide>
                        <Row >

                            {card2}


                        </Row>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Row >

                            {card3}


                        </Row>

                    </SwiperSlide>


                </Swiper>


            </Container>

        </div>
    )
}

export default Products