import style from '../styles/Home.module.css'
import myImg from "../public/4.png"
import Image from 'next/image';
import * as Icon0 from 'react-icons/rx'
import * as Icon1 from 'react-icons/gi'
import * as Icon2 from 'react-icons/fi'
import * as Icon3 from 'react-icons/fa'
import * as Icon4 from 'react-icons/bs'
import * as Icon6 from 'react-icons/di'
import * as Icon7 from 'react-icons/io5'
import * as Icon8 from 'react-icons/md'
import Link from 'next/link';
import logo from '../public/logo2.png'
import projectLogo from '../public/1.gif'
import logo2 from "../public/logo.png";
export default function Home() {
  const linksArray =[
    {
     name : 'Home',
     link : '/'
    },
    {
     name : 'About',
     link : '/About'
    },
    {
     name : 'Skills',
     link : '/Skills'
    },
    {
     name : 'Work',
     link : '/Work'
    },
    {
     name : 'Contact',
     link : '/Contact'
    },
 ]
  return (
    <div className={style.container}>
      <div className={`${style.startBox} ${style.boxStyle}`}>
        <Link href={'/About'}>
          <div className={style.imgContainer}>
            <div className={style.imageBox}>
              <Image src={myImg} className={style.myImg} alt="My picture"></Image>
            </div>
          </div>
          <div className={style.dataContainer}>
            <div className={style.title}>A Web Developer</div>
            <div className={style.name}>Mohamed Magdy.</div>
            <div className={style.desc}>I am a Computer Engineer who develops full-stack websites based in Cairo.</div>
            <Icon0.RxDoubleArrowRight className={style.arrow}/>
          </div>
        </Link>
      </div>
      <Link href='/Skills'>
        <div className={ `${style.moreAbout} ${style.boxStyle}`}>
            <div className={style.logoBox}>
              <Image src={logo} alt='My logo' className={style.logo}></Image>
            </div>
            <div className={style.dataBox}>
              <p>More about</p>
              <h3>credentials</h3>
              <Icon0.RxDoubleArrowRight className={style.arrow}/>
            </div>
        </div>
      </Link>
      <Link href='/Work'>
        <div className={ `${style.projects} ${style.boxStyle}`}>
          <div className={style.logoBox}>
            <Image src={projectLogo} alt='My logo' className={style.projectLogo}></Image>
          </div>
          <div className={style.dataBox}>
            <p>Show case</p>
            <h3>projects</h3>
            <Icon0.RxDoubleArrowRight className={style.arrow}/>
          </div>
        </div>
      </Link>
      <div className={ `${style.newSletter} ${style.boxStyle}`}>
        <p>
          <span>
          I am a fresh graduate from <Icon1.GiFlowerStar className={style.star}/> Computer Engineering <Icon1.GiFlowerStar className={style.star}/>
          </span>
        </p>
      </div>
      <div className={ `${style.accounts}`}>
        <div className={style.box}>
          <ul className={style.items}>
            <li className={style.item}><Link href='https://github.com/MohamedMagdy63'><Icon2.FiGithub className={style.icon}/></Link></li>
            <li className={style.item}><Link href='https://www.linkedin.com/in/mohamed-magdy-0a305924a/'><Icon3.FaLinkedinIn className={style.icon}/></Link></li>
          </ul>
        </div>
        <Link href='/Contact'>
          <div className={style.desc}>
            <p>Stay With me</p>
            <h3>Profiles</h3>
            <Icon0.RxDoubleArrowRight className={style.arrow}/>
          </div>
        </Link>
      </div>
      <Link href='/Skills'>
        <div className={`${style.services} ${style.boxStyle}`}>
          <div className={style.top}>
            <Icon6.DiCodeBadge className={style.icon}/>
            <Icon8.MdOutlineDesignServices className={style.icon}/>
            <Icon4.BsDatabaseAdd className={style.icon}/>
            <Icon3.FaNetworkWired className={style.icon}/>
            <Icon7.IoHardwareChipOutline className={style.icon}/>
          </div>
          <div className={style.down}>
            <p>Specialization</p>
            <h3>Services offering</h3>
            <Icon0.RxDoubleArrowRight className={style.arrow}/>
          </div>
        </div>
      </Link>
      <Link href='/Contact'>
        <div className={`${style.contact} ${style.boxStyle}`}>
          <div className={style.line}></div>
          <Icon1.GiFlowerStar className={style.starLine}/>
          <Icon0.RxDoubleArrowRight className={style.arrow}/>
          <p>Let's <br></br>
            work <span>together.</span>
          </p>
        </div>
      </Link>


      {/* ///////////////// */}
      <div className={`${style.containerFooter}`}>
        <div className={style.logoContainer}>
            <Link href='/'>
              <Image
                src={logo2}
                alt ="Logo MG"
                className={style.logo}
              />
            </Link>
          </div>
          <div className={style.items}>
            {linksArray.map(({ name, link }) => (
              <Link key={name} href={link} className={style.item}>
                {name}
              </Link>
            ))}
          </div>
      </div>
    </div>
    
  )
}
