import React, { useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import style from "../styles/Skills.module.css";
import ProgressBar from "@ramonak/react-progress-bar";
import Link from 'next/link';
import Cisco from "../public/Cisco.png"
import ciscoLetter from "../public/ciscoLetter.png"

import Udacity1 from "../public/udacity-1.png"
import Udacity2 from "../public/udacity-2.png"
import Amit from "../public/Amit.png"
import GreatLearning from "../public/GreatLearning.jpg"
import AmazonKnet from "../public/AmazonKnet.png"

import Image from 'next/image';
import * as Icon1 from 'react-icons/bs'
import * as Icon2 from 'react-icons/tb'
import * as Icon3 from 'react-icons/md'
import * as Icon4 from 'react-icons/pi'



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Skills() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isWideScreen, setIsWideScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 414);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={style.bigContainer}>
      <div className={style.title}>
          <p>I graduated 2023</p>
          <h1>My Resume</h1>
      </div>
      <Box sx={{ width: '100%', scrollBehavior: 'none', overflow: 'hidden'}} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider'  }}>
            <Tabs value={value} TabIndicatorProps={{style: {backgroundColor: "#95afc0"}}} className={style.taps} onChange={handleChange} aria-label="basic tabs example">
                <Tab label={isWideScreen ? "Courses" : <Icon1.BsBook/>} {...a11yProps(0)} className={`${style.tap}`}/>
                <Tab label={isWideScreen ? "Professional Skills" :<Icon2.TbTools/>  } {...a11yProps(1)} className={`${style.tap}`}   />
                <Tab label={isWideScreen ? "Experiences" :<Icon3.MdOutlineWorkHistory/>  }{...a11yProps(2)} className={`${style.tap}`}   />
                <Tab label={isWideScreen ? "Certifications" :<Icon4.PiCertificateLight/>  }{...a11yProps(3)} className={`${style.tap} `}   />
            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className={style.edu} value={value} index={0}>
            <div className={style.container}>
              <div className={style.component}>
                <div className={style.partV}></div>
                <div className={style.circle}></div>
                <div className={style.partH}></div>
                <div className={style.line}></div>
              </div>
              <div className={style.box}>
                <div className={style.data}>
                  <h3>CCNAv7: Introduction to Networks</h3>
                  <span> (7/2023 - 8/2023)</span>
                  <p>Cisco Networking Academy</p>
                  <p>CCNAv7: Introduction to Networks course under my instruction. They demonstrated proficiency in configuring switches, routers, and end devices for network access, understanding Ethernet protocols, establishing connectivity between remote devices, secure network setup, and troubleshooting in small networks.</p>
                </div>
              </div>
            </div>
            {/* ////////2///////// */}
            <div className={style.container2}>
              <div className={style.component}>
                <div className={style.partV}></div>
                <div className={style.circle}></div>
                <div className={style.partH}></div>
                <div className={style.line}></div>
              </div>
              <div className={style.box}>
                <div className={style.data}>
                  <h3>The Web Development Challenger Udacity-track</h3>
                  <span> (7/2022 - 10/2022)</span>
                  <p>Scholarship sponsored by Ministry of Communications and Information Technology powered by itida - Udacity</p>
                  <p>It is a comprehensive and hands-on program designed to teach HTML, CSS, JavaScript, and other relevant technologies, while building a portfolio of web applications that showcase their abilities. </p>
                </div>
                
              </div>
            </div>
            {/* ////////3///////// */}
            <div className={style.container3}>
              <div className={style.component}>
                <div className={style.partV}></div>
                <div className={style.circle}></div>
                <div className={style.partH}></div>
                <div className={style.line}></div>
              </div>
              <div className={style.box}>
                <div className={style.data}>
                  <h3>Professional Front-End Web Development Nanodegree Program</h3>
                  <span> (11/2022 - 1/2023)</span>
                  <p>Scholarship sponsored by Ministry of Communications and Information Technology powered by itida - Udacity</p>
                  <p>Program offered by Udacity is an advanced and specialized course aimed at equipping participants with the expertise needed to excel in the web development domain. </p>
                </div>
              </div>
            </div>
            {/* //////4///////////// */}
            <div className={style.container4}>
              <div className={style.component}>
                <div className={style.partV}></div>
                <div className={style.circle}></div>
                <div className={style.partH}></div>
                <div className={style.line}></div>
              </div>
              <div className={style.box}>
                <div className={style.data}>
                  <h3>Artificial Intelligence Summer Training</h3>
                  <span> (7/2022 - 8/2022)</span>
                  <p>Amit</p>
                  <p>Provided a comprehensive curriculum covering fundamental AI concepts, applications, Python for data science, supervised and unsupervised machine learning, introductory deep learning, culminating in a capstone project.</p>
                </div>
              </div>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className={style.grid}>
            <div className={style.right}>
              <h1>Development Skills</h1>
              <p>HTML</p>
              <ProgressBar className={style.line} completed={98} baseBgColor='#5a57572b' bgColor = "#4A55A2" animateOnRender = {true} />
              <p>CSS</p>
              <ProgressBar className={style.line} completed={98} baseBgColor='#5a57572b' bgColor = "#7895CB" animateOnRender = {true} />
              <p>JavaScript</p>
              <ProgressBar className={style.line} completed={98} baseBgColor='#5a57572b' bgColor = "#A0BFE0" animateOnRender = {true} />
              <p>WordPress</p>
              <ProgressBar className={style.line} completed={85} baseBgColor='#5a57572b' bgColor = "#C5DFF8" animateOnRender = {true} />
              <p>React.js</p>
              <ProgressBar className={style.line} completed={95} baseBgColor='#5a57572b' bgColor = "#C5DFF8" animateOnRender = {true} />
              <p>Node.js</p>
              <ProgressBar className={style.line} completed={85} baseBgColor='#5a57572b' bgColor = "#4A55A2" animateOnRender = {true} />
              <p>Next.js</p>
              <ProgressBar className={style.line} completed={80} baseBgColor='#5a57572b' bgColor = "#4A55A2" animateOnRender = {true} />
              <p>MongoDB</p>
              <ProgressBar className={style.line} completed={80} baseBgColor='#5a57572b' bgColor = "#4A55A2" animateOnRender = {true} />
              <p>MongoDB</p>
              <ProgressBar className={style.line} completed={80} baseBgColor='#5a57572b' bgColor = "#7895CB" animateOnRender = {true} />
              <p>PHP</p>
              <ProgressBar className={style.line} completed={80} baseBgColor='#5a57572b' bgColor = "#7895CB" animateOnRender = {true} />
              <p>PHP Laravel</p>
              <ProgressBar className={style.line} completed={70} baseBgColor='#5a57572b' bgColor = "#A0BFE0" animateOnRender = {true} />
              <p>SQL</p>
              <ProgressBar className={style.line} completed={75} baseBgColor='#5a57572b' bgColor = "#7895CB" animateOnRender = {true} />
              <p>Python</p>
              <ProgressBar className={style.line} completed={98} baseBgColor='#5a57572b' bgColor = "#A0BFE0" animateOnRender = {true} />
            </div>
            <div className={style.left}>
              <h1>Other Skills</h1>
              <p>Oracle dataBase</p>
              <ProgressBar className={style.line} completed={80} baseBgColor='#5a57572b' bgColor = "#4A55A2" animateOnRender = {true} />
              <p>MySQL dataBase</p>
              <ProgressBar className={style.line} completed={85} baseBgColor='#5a57572b' bgColor = "#7895CB" animateOnRender = {true} />
              <p>Problem solving</p>
              <ProgressBar className={style.line} completed={90} baseBgColor='#5a57572b' bgColor = "#A0BFE0" animateOnRender = {true} />
              <p>Adobe Photshop</p>
              <ProgressBar className={style.line} completed={95} baseBgColor='#5a57572b' bgColor = "#C5DFF8" animateOnRender = {true} />
              <p>Figma</p>
              <ProgressBar className={style.line} completed={85} baseBgColor='#5a57572b' bgColor = "#4A55A2" animateOnRender = {true} />
              <p>Cisco Packet Tracer</p>
              <ProgressBar className={style.line} completed={95} baseBgColor='#5a57572b' bgColor = "#7895CB" animateOnRender = {true} />
              <p>ARM kit</p>
              <ProgressBar className={style.line} completed={70} baseBgColor='#5a57572b' bgColor = "#A0BFE0" animateOnRender = {true} />
              <p>AVR kit</p>
              <ProgressBar className={style.line} completed={70} baseBgColor='#5a57572b' bgColor = "#C5DFF8" animateOnRender = {true} />
              <p>Arduino kit</p>
              <ProgressBar className={style.line} completed={85} baseBgColor='#5a57572b' bgColor = "#4A55A2" animateOnRender = {true} />
              <p>Unity</p>
              <ProgressBar className={style.line} completed={50} baseBgColor='#5a57572b' bgColor = "#7895CB" animateOnRender = {true} />
              <p>cmd and git command</p>
              <ProgressBar className={style.line} completed={95} baseBgColor='#5a57572b' bgColor = "#A0BFE0" animateOnRender = {true} />
            </div>
          </div>
        </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
          <div className={style.edu} value={value} index={0}>
            <div className={`${style.containerPlus} ${style.direction}`}>
              <div className={style.component}>
                <div className={style.partV}></div>
                <div className={style.circle}></div>
                <div className={style.partH}></div>
                <div className={style.linePlus}></div>
              </div>
              <div className={style.box}>
                <div className={style.data}>
                  <h3>Customer Service Associate </h3>
                  <span> (11/2023 - 4/2024)</span>
                  <p>I work in a bilingual account (English and Arabic), handling customer issues in Saudi Arabia. My role involves listening, understanding, checking, and resolving issues promptly. Additionally, I contributed to developing web tools to facilitate chat handling, gaining valuable experience in the process.</p>
                </div>
              </div>
            </div>
            {/* ////////3///////// */}
            <div className={style.container3Plus}>
              <div className={style.component}>
                <div className={style.partV}></div>
                <div className={style.circle}></div>
                <div className={style.partH}></div>
                <div className={style.linePlus}></div>
              </div>
              <div className={style.box}>
                <div className={style.data}>
                  <h3>Freelance Web Developer </h3>
                  <span> (2019 - Till now )</span>
                  <p>I've had the opportunity to work on a diverse range of projects, honing my skills in creating responsive and visually appealing websites. My experience has allowed me to collaborate closely with clients, turning their ideas into functional and user-friendly online platforms.
                  I successfully co-founded a company with my friend, dedicated to developing and creating websites. Our work is driving significant innovation and transformation in the web development field.</p>
                </div>
              </div>
            </div>
          </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <div className={style.certifcate}>
            <div className={style.box}>
                <Link href='https://graduation.udacity.com/confirm/PNDCTALA' target='_blank'>
                  <div className={style.imgBox}>
                    <Image src={Udacity1} className={style.img} alt='Udacity Certificate'></Image>
                  </div>
                </Link>
              </div>
              <div className={style.box}>
                <Link href='https://drive.google.com/file/d/1ztHuE0Lbn_Fs6YFnIcBeP_H0pk7yVHEh/view?usp=sharing' target='_blank'>
                  <div className={style.imgBox}>
                    <Image src={Cisco} className={style.img} alt='Cisco Certificate'></Image>
                  </div>
                </Link>
              </div>
              <div className={style.box}>
                <Link href='https://drive.google.com/file/d/1WHdi0HlvL2NVMtp3i6divZDicqDvULNW/view?usp=sharing' target='_blank'>
                  <div className={style.imgBox}>
                    <Image src={ciscoLetter} className={style.img} alt='Cisco Certificate'></Image>
                  </div>
                </Link>
              </div>
              <div className={style.box}>
              <Link href='https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/6fcfe601-f009-486c-9cf5-f9532c3e269a.pdf' target='_blank'>
                  <div className={style.imgBox}>
                    <Image src={Udacity2} className={style.img} alt='Udacity Certificate'></Image>
                  </div>
                </Link>
              </div>
              <div className={style.box}>
              <Link href='https://drive.google.com/file/d/1ZrGTkb2rXhGytzhDwDkK-9EmtAX-rfNp/view'>
                  <div className={style.imgBox}>
                    <Image src={Amit} className={style.img} alt='Cisco Certificate Letter'></Image>
                  </div>
                </Link>
              </div>
              
              <div className={style.box}>
              <Link href='https://drive.google.com/file/d/1lnekiJvLDX8_cN7vCd2M8mhaG1OprMmv/view?usp=sharing'  target='_blank'>
                  <div className={style.imgBox}>
                    <Image src={GreatLearning} className={style.img} alt='GreatLearning JavaScript'></Image>
                  </div>
                </Link>
              </div>
              <div className={style.box}>
                <div className={style.imgBox}>
                  <Image src={AmazonKnet} className={style.img} alt='AmazonKnet javaScript'></Image>
                </div>
              </div>
            </div>
          </CustomTabPanel>
      </Box>
    </div>
  );
}
