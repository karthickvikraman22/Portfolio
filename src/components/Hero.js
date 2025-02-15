import { useEffect, useState } from 'react';
import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin} from "react-icons/ai";

export default function Hero(){
    const [profession,setProfession]=useState("I'm a Software Engineer");
    useEffect(()=>{
        const professions=["I'm a Software Engineer","I'm a MERN Developer"];
        let index=0;
        const interval=setInterval(()=>{
            index=(index+1)%professions.length;
            setProfession(professions[index]);
        },5000)
        return () => clearInterval(interval)
    },[])
    
    return <>
    <section className='flex flex-col md:flex-row px-5 pt-20 justify-center'>
        <div className='md:w-1/2  flex flex-col'><h1 className=' text-white text-4xl font-hero-font'><span className='bc'>Hi</span>,<br/>
        I'm Karthickvikraman<br/><p className='text-2xl'>{profession}</p></h1>
        <div className='flex py-5 icon text-white'>
            <a href='index.html'><AiOutlineTwitter size={30}/></a>
            <a href='index.html'><AiOutlineFacebook size={30}/></a>
            <a href='index.html'><AiOutlineLinkedin size={30}/></a>
        </div>
        </div>
        <img className ="hidden md:block md:w-1/3" src={HeroImg} alt="hero"></img>
    </section>
    </>
} 