'use client';

import { useEffect, useState } from 'react';
import Content ,{ Content as ContentType } from '../components/Content';

const RUGBY_PLAYER = '/assets/rugby-player-desktop.png';
const RUGBY_PLAYER_TABLET = '/assets/rugby-player-tablet.png';
const RUGBY_PLAYER_MOBILE = '/assets/rugby-player-mobile.png';

const BASKETBALL_PLAYER = '/assets/basketball-player-desktop.png';
const BASKETBALL_PLAYER_TABLET = '/assets/basketball-player-tablet.png';
const BASKETBALL_PLAYER_MOBILE = '/assets/basketball-player-mobile.png';
const TABLET_WIDTH = 768;
const DESKTOP_WIDTH = 1920;

export default function Home() {
  const [windowSize, setWindowSize] = useState<{ width: number,}>();
  const atheleContents: ContentType[] = [
    {
      header: 'CONNECTION',
      headerClass: 'section-right',
      subHeader: '01',
      subHeaderClass: 'number-title',
      isWhite: false,
      detail: 'Connect with coaches directly, you can ping coaches to view profile.',
      detailClass: 'detail'
    },
    {
      header: 'COLLABORATION',
      headerClass: 'section-right second-content-bg',
      subHeader: '02',
      subHeaderClass: 'number-title',
      isWhite: false,
      detail: 'Work with other student athletes to increase visability. When you\n' +
        '          share and like other players videos it will increase your visability\n' +
        '          as a player. This is the team work aspect to Surface 1.',
      detailClass: 'detail'
    },
    {
      header: 'GROWTH',
      headerClass: 'section-right third-content-bg',
      subHeader: '03',
      subHeaderClass: 'number-title',
      isWhite: true,
      detail: 'Resources and tools for you to get better as a student Athelte. Access\n'+
        '          to training classes, tutor sessions, etc',
      detailClass: 'detail-white'
    },
  ];

  const playerContents: ContentType[] = [
    {
      header: 'CONNECTION',
      headerClass: 'section-left',
      subHeader: '01',
      subHeaderClass: 'number-title',
      isWhite: false,
      detail: 'Connect with talented athlete directly, you can watch their skills\n' +
        '          through video showreels directly from Surface 1.',
      detailClass: 'detail'
    },
    {
      header: 'COLLABORATION',
      headerClass: 'section-left second-content-bg',
      subHeader: '02',
      subHeaderClass: 'number-title',
      isWhite: false,
      detail: 'Work with recruiter to increase your chances of finding talented\n' +
        '          athlete.',
      detailClass: 'detail'
    },
    {
      header: 'GROWTH',
      headerClass: 'section-left bg-black',
      subHeader: '03',
      subHeaderClass: 'number-title third-content-color',
      isWhite: true,
      detail: 'Save your time, recruit proper athlets for your team.',
      detailClass: 'detail-white'
    },
  ];
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderRugbyPlayer = () => {
    if (windowSize?.width >= DESKTOP_WIDTH) {
      return <img className='image-left' src={RUGBY_PLAYER}/>;
    } else if (
      windowSize?.width >= TABLET_WIDTH &&
      windowSize?.width < DESKTOP_WIDTH
    ) {
      return <img className='image-left' src={RUGBY_PLAYER_TABLET}/>;
    }
  };
  const renderBasketBallPlayer = () => {
    if (windowSize?.width >= DESKTOP_WIDTH) {
      return <img className='image-right' src={BASKETBALL_PLAYER}/>;
    } else if (
      windowSize?.width >= TABLET_WIDTH &&
      windowSize?.width < DESKTOP_WIDTH
    ) {
      return <img className='image-right' src={BASKETBALL_PLAYER_TABLET}/>;
    }
  };

  return (
    <main>
      <div className='content'>
        {renderRugbyPlayer()}
        <div className='header-right'>ATHLETS</div>
        {windowSize?.width < TABLET_WIDTH && (
          <img className='image-left' src={RUGBY_PLAYER_MOBILE}/>
        )}
        <Content
          contents={atheleContents}
          isMobile={windowSize?.width < TABLET_WIDTH}
        />
      </div>

      <div className='content'>
        {renderBasketBallPlayer()}
        <div className='header-left'>PLAYERS</div>
        {windowSize?.width < TABLET_WIDTH && (
          <img className='image-right' src={BASKETBALL_PLAYER_MOBILE}/>
        )}
        <Content
          contents={playerContents}
          isMobile={windowSize?.width < TABLET_WIDTH}
        />
      </div>
    </main>
  );
}
