import Link from "next/link";
import style from "../styles/Navbar.module.css"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Icons2 from "react-icons/fa";
import logo from "../Images/Logo/logo.png";
import Image from 'next/image';
export default function Navbar() {
    const [windowWidth, setWindowWidth] = useState(null);
    const [sidebar, setSidebar] = useState(false);
    useEffect(() => {
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
          };
      
          updateWindowWidth();

          // Add an event listener to update the window width when the window is resized
          window.addEventListener('resize', updateWindowWidth);
      
          // Clean up the event listener when the component is unmounted
          return () => {
            window.removeEventListener('resize', updateWindowWidth);
          };

    }, []);
    const router = useRouter();
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
        <div className={style.items}>
          {
            windowWidth > 1280 ?
            linksArray.map(({name , link})=>(
                <Link
                    key={name}
                    href={link}
                    className={`${style.item} ${router.pathname === link ? style.clicked:style.notclicked}`}
                >
                    {name}
                </Link>
            ))
            : 
            sidebar ? (
              <Icons2.FaTimes
                className={style.icon}
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons2.FaBars
                className={style.icon}
                onClick={() => setSidebar(!sidebar)}
              />
            )
          }
        </div>
        <div className={style.logoContainer}>
          <Link href='/'>
            <Image
              src={logo}
              alt ="Logo MG"
              className={style.logo}
            />
            <span>Mohamed Magdy</span>
          </Link>
        </div>
        {
          <div>
            <ul className={sidebar ? style.activeSideBar && style.sidebar : style.notActiveSideBar}>
              {
                linksArray.map(({name , link})=>(
                  <Link
                      key={name}
                      href={link}
                      className={`${style.item} ${router.pathname === link ? style.active:style.notactive}`}
                  >
                    <li
                      key={name}
                      onClick={() => setSidebar(false)}
                    >
                      {name}
                    </li>
                  </Link>
                ))
              }
            </ul>
          </div>
        }

      </div>
    )
  }
  