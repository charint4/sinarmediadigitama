import React from "react";
import { Container } from "react-bootstrap";
import "../Section4/section4.css";
import {
  MapContainer,
  LayersControl,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import L from "leaflet";

const myIcon = () => {
  return L.icon({
    iconUrl: require("../../Images/marker2.png"),
    iconSize: [32, 32],
  });
};
const Section4 = () => {
  return (
    <Container>
      <div className="row justify-content-center align-item-center sec4">
        <div className="col-md map">
          {/* <img src={map} alt="map" className="map-img" /> */}
          <MapContainer
            center={[-6.305261349820201, 106.71880508213948]}
            zoom={15}
            scrollWheelZoom={true}
            dragging={true}
          >
            <LayersControl
              position="topleft"
              collapsed={false}
              className="layers-control"
            >
              <LayersControl.BaseLayer name="OSM" checked>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>
              {/* <LayersControl.BaseLayer name="Map">
                <ReactLeafletGoogleLayer
                  apiKey="AIzaSyCMczhWPxQsV9MUqyA7touty4CqI8kc0ZI"
                  type={"roadmap"}
                />
              </LayersControl.BaseLayer> */}
              <LayersControl.BaseLayer name="Satelit">
                <ReactLeafletGoogleLayer
                  apiKey="AIzaSyCMczhWPxQsV9MUqyA7touty4CqI8kc0ZI"
                  type={"hybrid"}
                />
              </LayersControl.BaseLayer>
            </LayersControl>
            <Marker
              position={[-6.305261349820201, 106.71880508213948]}
              icon={myIcon()}
            >
              <Popup>
                Sinar Media Sakti Adv.
                <br />
                Jl. Aria Putra No.8, Serua Indah, Tangerang, Kota Tangerang
                Selatan, Banten 15414
                <br />
                <a
                  href="https://www.google.com/maps/place/Sinar+Media+Sakti+Adv./@-6.305328,106.7188024,15z/data=!4m12!1m6!3m5!1s0x0:0x255275b0a3914694!2sSinar+Media+Sakti+Adv.!8m2!3d-6.3053294!4d106.7188105!3m4!1s0x0:0x255275b0a3914694!8m2!3d-6.3053294!4d106.7188105"
                  style={{ textDecoration: "none" }}
                  target="_tab"
                >
                  Google Map
                </a>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="col-lg-5 bg-text wrap-box">
          <h3 className="title">Get in touch</h3>
          <h4 className="text1 mb-5">
            <b>Address</b> <br></br>
            Jl. Aria Putra No. 8 RT 01 / RW 06 <br /> Kel. Sarua Indah, Kec.
            Ciputat, Tangerang Selatan 15414
          </h4>
          <h4 className="text2 mb-5">
            <b>Email</b> <br></br>
            bagus.sms@gmail.com sinarmediasakti.adv@gmail.com
            baliho.sms@gmail.com
          </h4>
          <h4 className="text3 mb-5">
            <b>Telephone & Fax</b> <br /> 021 - 74634075 - 74633530
          </h4>
        </div>
      </div>
    </Container>
  );
};

export default Section4;
