import React from 'react';

function CopyWriting(props) {
  const { mouseEnterHandler, CopyWritingContent, title } = props;
  return (
    <>
      <div className="leftText" onMouseEnter={mouseEnterHandler}>
        <h3>{title}</h3>
        <p className="article">{CopyWritingContent}</p>
        <a className="left__link" href="#/">
          查看更多
        </a>
      </div>
    </>
  );
}
export default CopyWriting;
