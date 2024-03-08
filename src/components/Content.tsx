import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export type Content = {
  header: string,
  headerClass: string,
  subHeader: string,
  subHeaderClass: string,
  isWhite: boolean,
  detail: string,
  detailClass: string
};

const Content = (
  {
    contents,
    isMobile,
  }: {
    contents: Content[];
    isMobile: boolean;
  },
) => {
  const renderContent = () => {
    return contents.map(content => {
      const underLine = isMobile ? 'underline' : content.isWhite ? 'underline white' : 'underline';
      return (
        <div key={content.header} className={isMobile ? 'section-left' : content.headerClass}>
          <div className='sub-header'>
            <div>
              <div className={isMobile ? 'number-title' : content.subHeaderClass}>{content.subHeader}</div>
              <div className={underLine}/>
            </div>
            {content.header}
          </div>
          <div className={isMobile ? 'detail' : content.detailClass}>
            {content.detail}
          </div>
        </div>
      )
    })
  }

  const renderMobileContent = () => {
    return (
      <Slider dots infinite dotsClass='slider-bar' arrows={false}>
        { renderContent() }
      </Slider>
    );
  }

  return (
    isMobile ?
      <div className='slider'>
        {renderMobileContent()}
      </div>
      :
      <div>
        {renderContent()}
      </div>
  )
    ;
};

export default Content;