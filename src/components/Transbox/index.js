import React, { Component } from "react";

import {
  Card,
  CardBody,
  Button,
  Row,
  Col,
  Container,
  CardImg,
} from "reactstrap";
import logo from "./coin.jpg";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faCoins
} from "@fortawesome/free-solid-svg-icons";

class Box extends Component {
  state = {
    isLoading: false,
  };

  render() {
    return (
      <Container>
        <div className="titlebody">
          <div class="py-3">poolpoint</div>
        </div>
        <Row>
{/* ==================================1st cardbox======================================================= */}
          <Col sm={3}>
            <Card
              style={{ Maxwidth: "20rem", height: "auto", borderRadius: 8 }}
            >
              <Row>
                <Col>
                  <CardBody className="titlecard1">Total Point Aktif</CardBody>
                  <CardBody className="bodycard1">Rp.100.000</CardBody>
                </Col>
                <Col>
                  <CardImg
                    top
                    height="100%"
                    width="100%"
                    src={logo}
                    alt="image"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
{/* ==================================2nd cardbox======================================================= */}
          <Col sm={9}>
            <Card
              style={{ Maxwidth: "20rem", height: "auto", borderRadius: 8 }}
            >
              <CardBody className="titlecard2">Riwayat Transaksi</CardBody>

              <Row>
                <Col>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Button color="outline-dark">Semua</Button>
                    <Button color="outline-dark">Point Masuk</Button>
                    <Button color="outline-dark">Point Keluar</Button>
                  </div>
                </Col>
                <Col>
                  <div style={{ display: "flex", justifyContent: "right" }}>
                    <Button class="" color="outline-warning">
                      29 Okt 2021 - 30 Okt 2021
                    </Button>
                  </div>
                </Col>
              </Row>
{/* ============================================Line 1================================================ */}
              <CardBody className="bodycard2">
                <div class="bottomborder">
                <Row>
                  <Col sm={10}>
                  <Row>
                    <Col sm={2}>
                  <div className='datecard'>
                  <div class='py-1'>
                  Jumat, 29 Okt 2021
                  </div>
                  </div>
                  </Col>
                  <Col sm={2}>
                  <div className='timecard'>
                  <div class='py-1'>
                  12:38 WIB
                  </div>
                  </div>
                  </Col>
                  </Row>
                  <Row>
                  <div className='namecard'>
                  <div class='py-1'>
                  <FontAwesomeIcon icon={faBullhorn} />Referral
                  </div>
                  </div>
                  </Row>
                  </Col>

                  <Col sm={2} style={{ justifyContent: "right"}}>
                  <Row>
                  <div className='pointcard'>
                  <div class='py-1'>
                  100.000
                  </div>
                  </div>
                  </Row>
                  <Row>
                  <div className='poolpoint'>
                  <div class='py-1'>
                  Poolpoint
                  </div>
                  </div>
                  </Row>
                  </Col>
                </Row>
                </div>
              </CardBody>
{/* ============================================Line 2================================================ */}
              <CardBody className="bodycard2">
                <div class="bottomborder">
                <Row>
                  <Col sm={10}>
                  <Row>
                    <Col sm={2}>
                  <div className='datecard'>
                  <div class='py-1'>
                  Jumat, 29 Okt 2021
                  </div>
                  </div>
                  </Col>
                  <Col sm={2}>
                  <div className='timecard'>
                  <div class='py-1'>
                  12:38 WIB
                  </div>
                  </div>
                  </Col>
                  </Row>
                  <Row>
                  <div className='namecard'>
                  <div class='py-1'>
                  <FontAwesomeIcon icon={faCoins} />CashBack
                  </div>
                  </div>
                  </Row>
                  </Col>

                  <Col sm={2} style={{ justifyContent: "right"}}>
                  <Row>
                  <div className='pointcard'>
                  <div class='py-1'>
                  100.000
                  </div>
                  </div>
                  </Row>
                  <Row>
                  <div className='poolpoint'>
                  <div class='py-1'>
                  Poolpoint
                  </div>
                  </div>
                  </Row>
                  </Col>
                </Row>
                </div>
              </CardBody>
{/* ============================================Line 3================================================ */}
              <CardBody className="bodycard2">
                <div class="bottomborder">
                <Row>
                  <Col sm={10}>
                  <Row>
                    <Col sm={2}>
                  <div className='datecard'>
                  <div class='py-1'>
                  Jumat, 29 Okt 2021
                  </div>
                  </div>
                  </Col>
                  <Col sm={2}>
                  <div className='timecard'>
                  <div class='py-1'>
                  12:38 WIB
                  </div>
                  </div>
                  </Col>
                  </Row>
                  <Row>
                  <div className='namecard'>
                  <div class='py-1'>
                  <FontAwesomeIcon icon={faBullhorn} />Referral
                  </div>
                  </div>
                  </Row>
                  </Col>

                  <Col sm={2} style={{ justifyContent: "right"}}>
                  <Row>
                  <div className='pointcard'>
                  <div class='py-1'>
                  100.000
                  </div>
                  </div>
                  </Row>
                  <Row>
                  <div className='poolpoint'>
                  <div class='py-1'>
                  Poolpoint
                  </div>
                  </div>
                  </Row>
                  </Col>
                </Row>
                </div>
              </CardBody>
{/* ============================================Line 4================================================ */}
              <CardBody className="bodycard2">
                <div class="bottomborder">
                <Row>
                  <Col sm={10}>
                  <Row>
                    <Col sm={2}>
                  <div className='datecard'>
                  <div class='py-1'>
                  Jumat, 29 Okt 2021
                  </div>
                  </div>
                  </Col>
                  <Col sm={2}>
                  <div className='timecard'>
                  <div class='py-1'>
                  12:38 WIB
                  </div>
                  </div>
                  </Col>
                  </Row>
                  <Row>
                  <div className='namecard'>
                  <div class='py-1'>
                  <FontAwesomeIcon icon={faBullhorn} />Referral
                  </div>
                  </div>
                  </Row>
                  </Col>

                  <Col sm={2} style={{ justifyContent: "right"}}>
                  <Row>
                  <div className='pointcard'>
                  <div class='py-1'>
                  100.000
                  </div>
                  </div>
                  </Row>
                  <Row>
                  <div className='poolpoint'>
                  <div class='py-1'>
                  Poolpoint
                  </div>
                  </div>
                  </Row>
                  </Col>
                </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Box;
