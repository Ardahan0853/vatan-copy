import React from 'react'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div className="footer">
        <Container>
            <Row>
                <Col md lg="2 mx-auto font-size-footer">
                    <h4>KURUMSAL</h4>
                    <h2>Hakkımızda</h2>
                    <h2>Müşteri Hizmetleri</h2>
                    <h2>Sipariş Aşamaları</h2>
                    <h2>Sıkça Sorulan Sorular</h2>
                    <h2>İnsan Kaynakları</h2>
                    <h2>Gizlilik Politikamız</h2>
                </Col>
                <Col md lg="2 mx-2 font-size-footer">
                    <br></br>
                    <h2>İletişim</h2>
                    <h2>Vatan Card</h2>
                    <h2>Servis Takip Formu</h2>
                    <h2>Sıkça Sorulan Sorular</h2>
                    <h2>Mağazalar</h2>
                    <h2>İşlem Rehberi</h2>
                </Col>
                <Col md lg="2 mx-2 font-size-footer">
                    <h4>KATEGORİLER</h4>
                    <h2>Bilgisayar</h2>
                    <h2>Cep Telefonu</h2>
                    <h2>Tablet PC</h2>
                    <h2>Akıllı Saat</h2>
                    <h2>Vestel TV</h2>
                    <h2>Oyun Bilgisayarı</h2>
                </Col>
                <Col md lg="2 mx-2 font-size-footer">
                    <br></br>
                    <h2>Küçük Ev Aletleri</h2>
                    <h2>Kişisel Bakım Ürünleri</h2>
                    <h2>Elektrikli Süpürge</h2>
                    <h2>Ütü</h2>
                    <h2>Masaüstü Bilgisayar</h2>
                    <h2>Sabit Diskler</h2>
                </Col>
                <Col md lg="2 mx-2 font-size-footer">
                    <h4>ÖZEL ÜRÜNLER</h4>
                    <h2>iPhone 7</h2>
                    <h2>iPhone 6S</h2>
                    <h2>iPhone 5S</h2>
                    <h2>iPhone SE</h2>
                    <h2>General Mobile 5 Plus</h2>
                    <h2>Galaxy S7</h2>
                    <h2>Note 5</h2>
                    <h2>Galaxy S6</h2>
                </Col>
            </Row>
            <hr className="footer-bottom"></hr>
            
            <Row>
                <Col md lg="6 mx-auto font-size-footer">
                    <h6 >Türkiye'nin Teknoloji Hiperstoru</h6>
                    <h6 className='Copy-right'>Copyright 2016 Vatan Bilgisayar San. ve Tic.A.Ş.</h6>
                </Col>
                <Col md lg="6 mx-auto font-size-footer">
                <img  className="bkm-express"src="https://www.cumhuriyet.com.tr/Archive/2019/6/22/1451610_cover.jpeg"/>
                <img className="master-card" src="https://cdnuploads.aa.com.tr/uploads/sirkethaberleri/Contents/2021/06/10/thumbs_b_c_a73ca3f91358debbcffb03c89e91f978.jpg"/>
                <img className="visa" src="https://survey.expert/assets/img/visa.png"/>
                <img className="american-express" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png"/>
                <img className="norton" src="https://www.nicepng.com/png/detail/177-1772936_arbys-logo-transparent-norton-security-logo-png.png"/>
                </Col>
                
                
            </Row>
            
        </Container>
    </div>
  )
}

export default Footer