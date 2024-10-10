import './Services.css';
import {useRef, useState} from 'react';
import {motion, useInView} from 'framer-motion';
import ImageVisualizer from './ImageVisualizer';
import {servicesInfo} from './servicesData';

function Services() {
  const servicesRef = useRef();
  const [elements, setElements] = useState();
  const [imgPackage, setImgPackage] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const isInView = useInView(servicesRef, {once: true});
  // Framer Motion Variants //
  const imgsAnimation = {
    starts: {y: 50, opacity: 0},
    ends: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className='services'>
      <div className='services__tittle__container' ref={servicesRef}>
        <motion.h2
          className='services__h2'
          // Framer Motion Attributes //
          animate={isInView ? {x: 0} : {x: 1000}}
        >
          <b className='b'>Our</b> services
        </motion.h2>
      </div>
      <div className='services__container'>
        {servicesInfo.map((service, index) => (
          <div className={`${service.class}`} key={index}>
            <div className={`${service.class}__description`}>
              <h3 className={`${service.class}__h3`}>{service.tittle}</h3>
              <p className={`${service.class}__text`}>{service.text}</p>
            </div>
            <motion.div
              className='gallery__container'
              key={index}
              // Framer Motion Attributes //
              variants={imgsAnimation}
              initial='starts'
              whileInView='ends'
              viewport={{once: true}}
            >
              {service.imgs.map((img, index2) => (
                <motion.div
                  key={index2}
                  className='gallery__item'
                  variants={imgsAnimation}
                >
                  <img
                    className='gallery__img'
                    src={img}
                    onClick={() => {
                      setElements(index2);
                      setIsOpen(true);
                      setImgPackage(service.imgs);
                    }}
                    alt='Villas Power SweeePing Services'
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      <ImageVisualizer
        imgPackage={imgPackage}
        elements={elements}
        setElements={setElements}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </section>
  );
}

export default Services;
