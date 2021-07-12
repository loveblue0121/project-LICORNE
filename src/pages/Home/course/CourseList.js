import React from 'react';

function CourseList() {
  return (
    <>
      <div className="content">
        <div className="box">
          <img src="./images/course-perfume1.jpg" alt="" />
        </div>

        <aside>
          <h2 className="title">香水調製工作坊</h2>
          <p className="title_content">我是文字 文字是我</p>
          <div className="recheck_box">
            <i className="fas fa-undo"></i>
            <a className="recheck" href="#/">
              重選
            </a>
          </div>

          <div className="font">
            <div className="fontContent">
              <div className="block_select">
                <label className="labelText">方案</label>
                <div className="select-style">
                  <select>
                    <option value="" selected>
                      半日體驗
                    </option>
                    <option value="">一日體驗</option>
                  </select>
                </div>
              </div>

              <div className="block_select">
                <label className="labelText">人數</label>
                <div className="select-style">
                  <select>
                    <option value="" selected>
                      單人 NT$ 1,200
                    </option>
                    <option value="">雙人 NT$ 2,000</option>
                    <option value="">四人同行一人免費 NT$ 3,500</option>
                  </select>
                </div>
              </div>

              <div className="block_select">
                <label className="labelText">日期</label>
                <div className="datebox"></div>
              </div>

              <div className="block_select">
                <label className="labelText">時段</label>
                <div className="select-style">
                  <select>
                    <option className="time">09:00 - 12:00</option>
                    <option className="time">14:00 - 17:00</option>
                  </select>
                </div>
                <label className="labelText">地點</label>
                <div className="select-style">
                  <select>
                    <option selected>高雄小港店</option>
                    <option>桃園平鎮店</option>
                    <option>台北信義店</option>
                    <option>台中逢甲店</option>
                  </select>
                </div>
                <div className="btn_group">
                  <button className="btn">報名</button>
                  <div className="loveBox">
                    <i className="far fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <section className="course_info">
        <div className="content_down">
          <ul className="info_btn">
            <li>
              <a href="#/">課程內容</a>
            </li>
            <li>
              <a href="#/">報名須知</a>
            </li>
          </ul>
          <div className="btn_group_down">
            <button className="btn">報名</button>
            <div className="loveBox">
              <i className="far fa-heart"></i>
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="copywriting_info">
          <div className="course_description">
            <p>
              我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案
              我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案
              我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案
              我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案
              我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案
              我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案
            </p>
          </div>
          <div className="course_photo">
            <div className="course_box">
              <img
                className="course_img1"
                src="./images/course-perfume1.jpeg"
                alt=""
              />
            </div>
            <p className="image_text">我是圖片說明文字</p>
            <div className="course_box">
              <img
                className="course_img2"
                src="./images/course-perfume2.jpeg"
                alt=""
              />
            </div>
            <p className="image_text">我是圖片說明文字</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseList;
