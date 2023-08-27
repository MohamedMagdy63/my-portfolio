import style from '../styles/About.module.css'
import myImg from "../public/7.png"
import Image from 'next/image';
import * as Icon0 from 'react-icons/rx'
import * as Icon1 from 'react-icons/gi'
import * as Icon2 from 'react-icons/fi'
import * as Icon3 from 'react-icons/fa'
import Link from 'next/link';
import logo from '../public/logo2.png'
import logo2 from "../Images/Logo/logo.png";

export default function About() {
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
        <div className={`${style.startBox}  ${style.boxStyle}`}>
            <div className={style.imgContainer}>
                <div className={style.imageBox}>
                <Image src={myImg} className={style.myImg} alt="My picture"></Image>
                </div>
            </div>
        </div>

        <div className={style.summery}>
            <h1>
                <Icon1.GiFlowerStar className={style.star}/>
                Self-Summery
                <Icon1.GiFlowerStar className={style.star}/>
            </h1>
        </div>

        <div className={ `${style.main} ${style.boxStyle}`}>
        <div className={style.line}></div>
        <Icon1.GiFlowerStar className={style.starLine}/>
        <div className={style.data}>
          <h1>Mohamed Magdy</h1>
          <p>
            Fresh graduate web developer proficient in HTML, CSS, JavaScript, and React.js for frontend development, with a
            strong command of Node.js, Next.js, and PHP for backend development. Additionally, skilled in network, embedded
            systems, and machine learning using Python.
          </p>
        </div>
        </div>

        <div className={ `${style.edu} ${style.boxStyle}`}>
            <div className={style.dataBox}>
              <h3>Education</h3>
              <span className={style.date}>2018 - 2023</span>
              <p>Bachelor Degree in Computer Engineering</p>
              <p className={style.desc}>Modern Accademy For Engineering</p>

              <span className={style.date}>2021 - 2022</span>
              <p>Completed embedded program diploma based on ARM  </p>
              <p className={style.desc}>IMT school</p>
            </div>
        </div>

        <div className={ `${style.exp} ${style.boxStyle}`}>
            <div className={style.dataBox}>
              <h3>Volunteering</h3>
              <span className={style.date}>2016 - 2020</span>
              <p>Resala Chairty Organization </p>
              <p className={style.desc}>Leader of activity Etaam for 2 years  </p>

              <span className={style.date}>2021 - 2022</span>
              <p>Enactus Modern Academy </p>
              <p className={style.desc}>Member of Project Management team</p>
            </div>
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
      <Link href='/Contact'>
        <div className={`${style.contact} ${style.boxStyle} `}>
          <div className={style.line}></div>
          <Icon1.GiFlowerStar className={style.starLine}/>
          <Icon0.RxDoubleArrowRight className={style.arrow}/>
          <p>Let's <br></br>
            work <span>together.</span>
          </p>
        </div>
      </Link>
      
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
      {/* //////////////////// */}
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
