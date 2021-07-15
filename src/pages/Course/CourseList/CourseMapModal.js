import React, { useState } from 'react';
import { FiSearch, FiMapPin, FiX } from 'react-icons/fi';
import GoogleMapReact from 'google-map-react';

const MarkerIcon = () => {
  return (
    <>
      <FiMapPin className="modal__marker" />
    </>
  );
};

function CourseMapModal() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [classRoom, setClassRoom] = useState([]);

  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 19,
  };

  if (navigator.geolocation) {
    // 執行要權限的function
    function error() {
      alert('無法取得你的位置');
    }

    // 使用者允許抓目前位置，回傳經緯度
    function success(position) {
      console.log(position.coords.latitude, position.coords.longitude);
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    }

    // 跟使用者拿所在位置的權限
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert('Sorry, 你的裝置不支援地理位置功能。');
  }

  return (
    <>
      <div className="modal__card">
        <FiX className="icon__fix" />
        <h4 className="modal__title">請選擇取貨店鋪</h4>

        <div className="modal__search">
          <button className="modal__btn">顯示鄰近店舖</button>
          <div className="modal__map-search">
            <figure className="map__map-icon-top">
              <FiMapPin className="feather-s" />
            </figure>
            <input
              type="text"
              placeholder="縣市、鄉鎮"
              className="map__input"
            />
            <figure className="map__search-icon-top">
              <FiSearch className="map__search-icon feather-m" />
            </figure>
          </div>
        </div>

        <div className="modal__con__map d-flex justify-content-center">
          <div className="modal__content">
            <div className="modal__map__item">
              <h5 className="map__item-title">高雄小港旗艦店</h5>
              <span className="map__item-intro">
                地址：高雄市小港區民益路13號
                <br />
                電話：07-8012255
                <br />
                營業時間：週二至週日 10:00 - 20:00
              </span>
              <a href="/" className="modal__route-link">
                前往路線
              </a>
              <button className="modal__store-btn">選擇店鋪</button>
            </div>
          </div>
          <div className="modal__map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: '' }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <MarkerIcon lat={lat} lng={lng} />
            </GoogleMapReact>
          </div>
        </div>
        <button className="check__place-btn">確認店鋪</button>
      </div>
    </>
  );
}
export default CourseMapModal;
