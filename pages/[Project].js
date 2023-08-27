import { Data } from "@/ProjectData/ProjectsData";
import { useRouter } from "next/router";
import { useEffect , useState} from "react";
import style from '../styles/Project.module.css';
import * as Icon1 from 'react-icons/gi';
import Image from "next/image";
import logo2 from "../public/logo.png";
import Link from "next/link";
export default function project() {
    const [project, setProject] = useState(false);
    const router = useRouter()
    const type = Data.map(item=>(item.type))
    useEffect(()=>{
        setProject(router.asPath)
    })
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
    <>
    {
        type.includes(project) ? 
        <div className={style.container}>
        <div className={style.title}>
            <h1>
                <Icon1.GiFlowerStar className={style.star}/>
                {
                    Data.map(item =>(
                        item.type === project ?
                            item.name
                        : ''
                    ))
                }
                <Icon1.GiFlowerStar className={style.star}/>
            </h1>
        </div>
        <div className={style.mainImage}>
        {
            Data.map(item =>(
                item.type === project ?
                <Image  key={item.id} src={item.image} className={style.img} alt={item.name}></Image>
                : ''
            ))
        }
        </div>
        <div className={`${style.box} ${style.boxStyle}`}>
            <div className={style.leftBox}>
                <div className={style.line}></div>
                <Icon1.GiFlowerStar className={style.starLine}/>
                {
                    Data.map(item =>(
                        item.type === project ?
                        <div key={item.id}>
                            {
                                item.titles.map((title, index)=>(
                                    <>  
                                        <p className={style.color}>{title}</p>
                                        <p>{item.answers[index]}</p>
                                    </>
                                    
                                ))
                            } 
                        </div>
                        : ''
                    ))
                }
            </div>
            <div className={style.rightBox}>
                <p>Description</p>
                {
                    Data.map((item, index)=>(
                        item.type === project ?
                        <h3>{item.desc}</h3>
                        :''
                    ))
                } 
            </div>
        </div>
        <div >
        {
            Data.map((item,index) =>(
                item.type === project ?
                    <div key={item.id} className={style.studio}>
                        {
                            item.images.map(x=>(
                                <div className={style.box}>
                                    <Image  key={item.id} src={x} className={style.img} alt={item.name}></Image>
                                </div>
                            ))
                        }
                    </div>
                : ''
            ))
        }
            
        </div>
    </div>
    : ''
    }
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
    </>
  )
}
