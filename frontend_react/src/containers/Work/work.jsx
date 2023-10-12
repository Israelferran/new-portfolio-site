import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'

import {animate, easeInOut, motion} from "framer-motion"

import {Appwrap, Motionwrap} from "../../wrapper"
import {urlFor, client} from "../../client"

import './work.scss';
const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
  const [works, setworks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  useEffect(() => {
 const query = '*[_type == "works"]';

 client.fetch(query)
 .then((data) => {
  setworks(data);
  setFilterWork(data)
 })
  }, [])
  
  const handleWorkFilter = (item) => {
  //   setActiveFilter(item);
  //   setAnimateCard([{ y: 100, opacity: 0 }]);

  //   setTimeout(() => {
  //     setAnimateCard([{ y: 0, opacity: 1 }]);

  //     if (item === 'All') {
  //       setFilterWork(Work);
  //     } else {
  //       setFilterWork(works.filter((works) => works.tags.includes(item)));
  //     }
  //   }, 500);
  };

  return (
    <>
    <h2 className='head-text'>  My Creative <span>Portfolio </span> <br /> Section
     </h2>
     <div className='app__works-filter'>
    {['UI/UX', 'web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
      <div key={index}
      onClick={handleWorkFilter(item)}
      className={`app__works-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
      >
        {item}
      </div>
    ))}

     </div>

     <motion.div
     animate={animateCard}
     transition={{duration: 0.5, delayChildren: 0.5}}
     className='app__works-portfolio'
     >
      {filterWork.map((Work, index) =>(
        <div className='app__works-item app__flex' key={index}>
          <div className='app__works-img app__flex'>
            <img src={urlFor(Work.imgUrl)} alt={Work.name} />

            <motion.div 
            whileHover={{opacity: [0, 1]}}
            transition={{duration: 0.25, ease: easeInOut, staggerChildren: 0.5}}
            className='app__works-hover app__flex'
            >
              <a href={works.projectLink} target='blank' rel='norefer'>
            <motion.div 
              whileInView={{scale: [0, 1]}}
               whileHover={{scale: [1, 0.9]}}
               transition={{duration: 0.25, ease: easeInOut, staggerChildren: 0.5}}
               className=' app__flex'
            >
              <AiFillEye />
            </motion.div>
              </a>
              <a href={works.codeLink} target='blank' rel='norefer'>
            <motion.div 
              whileInView={{scale: [0, 1]}}
               whileHover={{scale: [1, 0.9]}}
               transition={{duration: 0.25, ease: easeInOut, staggerChildren: 0.5}}
               className=' app__flex'
            >
              <AiFillGithub />
            </motion.div>
              </a>
            </motion.div>
          </div>
        <div className='app__works-content app__flex'>
    <h4 className='bold-text'>{Work.title}</h4>
    <p className='p-text' style={{marginTop: 10}}>{Work.description}</p> 
    <div className='app__works-tag app__flex'>
      <p className='p-text'>{works.tags}</p>
      </div>     
        </div>

        </div>
      ))}
     </motion.div>
    </>
  )
}

export default Appwrap(
  Motionwrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);