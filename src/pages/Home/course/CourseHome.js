import React, { useState } from 'react';
import './CourseHome.css';
import CopyWriting from './CopyWriting';

const ImgClassNames = [
  'course__home-bg-left',
  'course__home-bg-center',
  'course__home-bg-right',
];
const titles = ['氣味限定展覽', '擴香製作體驗', '香水調製工作坊'];
const CopyWritingContents = [
  '柑橘甜香、玫瑰浪漫、茉莉高雅 .....各種驚奇香氛，在此待你一「聞」究竟',
  '讓裊裊霧氣，伴隨濃郁香氣充滿空間，並將心中的憂慮和煩惱，祛除一空',
  '創新不是複製成功，而是創造你的獨一無二隨心所欲地調配出，屬於你的氣味與風格',
];
function CourseHome() {
  const [bgClassName, setBgClassName] = useState(ImgClassNames[0]);
  //const [TextColor, setTextColor] = useState();

  const changeBackground = (changeClassName) => (e) => {
    setBgClassName(changeClassName);
  };
  return (
    <>
      <div className={bgClassName}>
        <div className="bg">
          <div className="TextAll">
            {titles.map((_, i) => {
              return (
                <CopyWriting
                  key={i}
                  mouseEnterHandler={changeBackground(ImgClassNames[i])}
                  CopyWritingContent={CopyWritingContents[i]}
                  title={titles[i]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseHome;
