import style from '../styles/Works.module.css'
import Image from 'next/image';
import * as Icon1 from 'react-icons/gi'
import Auction from '../Images/WorksPage/auction.gif'
import Home from '../Images/WorksPage/Main Slide.png'
import ToolBox from '../Images/WorksPage/ToolBox.png'
import ToolBox2 from '../Images/WorksPage/ToolBox2.png'
import SeaHorse from '../Images/WorksPage/Seahorse.gif'
import SeaH from '../Images/WorksPage/SeaH.png'
import Mario from '../Images/WorksPage/Mario.gif'
import mario from '../Images/WorksPage/mario.png'
import Wow from '../Images/WorksPage/Wow.png'
import WowCat from '../Images/WorksPage/WowCat.png'
import Court1 from '../Images/WorksPage/Court1.png'
import Court2 from '../Images/WorksPage/Court2.png'
import Loukma from '../Images/WorksPage/Loukma.png'
import Loukma2 from '../Images/WorksPage/Loukma2.png'
import lastPortfolio from '../Images/WorksPage/lastPortfolio.png'
import lastPortfolio2 from '../Images/WorksPage/lastPortfolio2.png'
import mock from '../Images/WorksPage/mock1.png'
import mock2 from '../Images/WorksPage/mock2.png'
import { PiCursorClickLight } from "react-icons/pi";
import { useState } from 'react';
import Link from 'next/link';


export default function Work() {
  // Maintain separate hover states for each project box
  const [hoverStates, setHoverStates] = useState({
    project1: false,
    project2: false,
    project3: false,
    project4: false,
    project5: false,
    project6: false,
    project7: false,
    project8: false,
    project9: false,
    project10: false,
  });
  const handleMouseEnter = (project) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [project]: true,
    }));
  };
  const handleMouseLeave = (project) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [project]: false,
    }));
  };
  
  return (
    <div className={style.container}>
      <div className={`${style.startBox} ${style.boxStyle}`}>
        <Link href='/AuctionWorld'>
          <div className={style.box} onMouseEnter={() => handleMouseEnter('startBox')} onMouseLeave={() => handleMouseLeave('startBox')}>
            <Image src={hoverStates.startBox ? Auction  :  Home} className={style.img} alt='AuctionWorld' />
          </div>
          <h3>Auction World</h3>
          <PiCursorClickLight className={style.arrow}/>
        </Link>
      </div>
      <div className={style.summery}>
        <h1>
          <Icon1.GiFlowerStar className={style.star}/>
          All Projects
          <Icon1.GiFlowerStar className={style.star}/>
        </h1>
      </div>
      <div className={`${style.project1} ${style.boxStyle}`}>
      <Link href='/CourtReservation'>
        <div className={style.box} onMouseEnter={() => handleMouseEnter('project1')} onMouseLeave={() => handleMouseLeave('project1')}>
          <Image src={hoverStates.project1 ?  Court2 :   Court1 } className={style.img} alt='CourtReservation' />
          <h3>Court Reservation</h3>
          <PiCursorClickLight className={style.arrow}/>
        </div>
      </Link>
      </div>
      <div className={`${style.project2} ${style.boxStyle}`}>
      <Link href='/LoukmaCafe'>
        <div className={style.box} onMouseEnter={() => handleMouseEnter('project2')} onMouseLeave={() => handleMouseLeave('project2')}>
        <Image src={hoverStates.project2 ?   Loukma2 :   Loukma} className={style.img} alt='LoukmaCafe'></Image>
        <h3>Loukma Cafe</h3>
        <PiCursorClickLight className={style.arrow}/>
        </div>
      </Link>
      </div>
      <div className={`${style.project3} ${style.boxStyle}`}>
      <Link href='/WowRestaurant'>
        <div className={style.box} onMouseEnter={() => handleMouseEnter('project3')} onMouseLeave={() => handleMouseLeave('project3')}>
        <Image src={hoverStates.project3 ?   WowCat :   Wow} className={style.img} alt='WowRestaurant'></Image>
        <h3>Wow Restaurant</h3>
        <PiCursorClickLight className={style.arrow}/>
        </div>
      </Link>
      </div>

      <div className={`${style.project4} ${style.boxStyle}`}>
      <Link href='/FirstPortfolio'>
        <div className={style.box} onMouseEnter={() => handleMouseEnter('project4')} onMouseLeave={() => handleMouseLeave('project4')}>
        <Image src={hoverStates.project4 ? lastPortfolio2 :   lastPortfolio} className={style.img} alt='FirstPortfolio'></Image>
        <h3>My last portfolio</h3>
        <PiCursorClickLight className={style.arrow}/>
        </div>
      </Link>
        
      </div>
      <div className={`${style.project5} ${style.boxStyle}`}>
      <Link href='/SeahorseGame'>
        <div className={style.box} onMouseEnter={() => handleMouseEnter('project5')} onMouseLeave={() => handleMouseLeave('project5')}>
          <Image src={hoverStates.project5 ?  SeaHorse :   SeaH} className={style.img} alt='SeahorseGame'></Image>
          <h3>Seahorse Game</h3>
          <PiCursorClickLight className={style.arrow}/>
        </div>
      </Link>
      </div>
      <div className={`${style.project6} ${style.boxStyle}`}>
      <Link href='/ToolBox'>
        <div className={style.box} onMouseEnter={() => handleMouseEnter('project6')} onMouseLeave={() => handleMouseLeave('project6')}>
          <Image src={hoverStates.project6 ? ToolBox2 : ToolBox } className={style.img} alt='Tool box'></Image>
          <h3>Tool Box</h3>
          <PiCursorClickLight className={style.arrow}/>
        </div>
      </Link> 
      </div>
      <div className={`${style.project7} ${style.boxStyle}`}>
        <Link href='/MarioModel'>
          <div className={style.box} onMouseEnter={() => handleMouseEnter('project7')} onMouseLeave={() => handleMouseLeave('project7')}>
            <Image src={hoverStates.project7 ? Mario :   mario  } className={style.img} alt='SuperMario Model'></Image>
            <h3>SuperMario Model</h3>
            <PiCursorClickLight className={style.arrow}/>
          </div>
        </Link>
      </div>
      <div className={`${style.project8} ${style.boxStyle}`}>
      <Link href='/MockGame'>
        <div className={style.box} onMouseEnter={() => handleMouseEnter('project8')} onMouseLeave={() => handleMouseLeave('project8')}>
          <Image src={hoverStates.project8 ?  mock2 :   mock} className={style.img} alt='Hit mock game'></Image>
          <h3>Hit mock game</h3>
          <PiCursorClickLight className={style.arrow}/>
        </div>
      </Link>
      </div>
      
    </div>
  )
}
