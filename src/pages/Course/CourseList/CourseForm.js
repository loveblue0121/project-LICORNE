import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FiHeart, FiRotateCcw } from 'react-icons/fi';
import CourseMapModal from './CourseMapModal';
import Backdrop from './Backdrop';

function CourseForm(props) {
  const {
    submitForm,
    onChange,
    value,
    showModalHandler,
    closeModalHandler,
    showModal,
  } = props;
  return (
    <>
      <div className="recheck__width d-flex justify-content-end">
        <button className="recheck_box">
          <FiRotateCcw data-feather="rotateccw" className="recheck__icon" />
          重選
        </button>
      </div>
      <form className="course__select__form" onSubmit={submitForm}>
        <div className="fontContent">
          <div className="block_select">
            <label className="labelText">地點</label>
            <input
              type="button"
              value="請選擇店鋪"
              className="palce__select"
              onClick={showModalHandler}
            />
          </div>

          <div className="block_select">
            <label className="labelText">方案</label>
            <div className="select-style">
              <select>
                <option value="">半日體驗</option>
                <option value="">一日體驗</option>
              </select>
            </div>
          </div>

          <div className="block_select">
            <label className="labelText">日期</label>

            <Calendar onChange={onChange} value={value} calendarType={'US'} />
            {/* </div> */}
          </div>

          <div className="block_select">
            <label className="labelText">時間</label>
            <div className="select-style">
              <select>
                <option className="time">09:00 - 12:00</option>
                <option className="time">14:00 - 17:00</option>
              </select>
            </div>
            <label className="labelText">人數</label>
            <div className="select-style">
              <select>
                <option value="">單人 NT$ 1,200</option>
                <option value="">雙人 NT$ 2,000</option>
                <option value="">四人同行一人免費 NT$ 3,500</option>
              </select>
            </div>
            <div className="btn_group">
              <button className="btn" type="submit">
                報名
              </button>
              <div className="loveBox">
                <FiHeart data-feather="heart" className="far" />
              </div>
            </div>
          </div>
        </div>
        {showModal && <Backdrop onClick={closeModalHandler} />}
        {showModal && <CourseMapModal closeModalHandler={closeModalHandler} />}
      </form>
    </>
  );
}
export default CourseForm;
