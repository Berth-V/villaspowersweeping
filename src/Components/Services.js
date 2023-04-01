import './Services.css';
import '../App.css'
import {useRef, useState} from 'react';
import {motion, useInView} from 'framer-motion';
import ImageVisualizer from './ImageVisualizer';

function Services() {
  const servicesRef = useRef();
  const [elements, setElements] = useState();
  const [imgPackage, setImgPackage] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  // Framer motion values //
  const isInView = useInView(servicesRef, {once: true});
  const imgsAnimation = {
    starts: {y: 50, opacity: 0},
    ends: {y: 0, opacity: 1},
  };
  const parkingImages = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
  const junkImages = ['img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg'];
  const graffitiImages = [
    'img/9.jpg',
    'img/10.jpg',
    'img/11.jpg',
    'img/12.jpg',
  ];
  const pressureImages = [
    'img/13.jpg',
    'img/14.jpg',
    'img/15.jpg',
    'img/16.jpg',
  ];

  return (
    <div>
      <section className='services'>
        <div className='services__container' ref={servicesRef}>
          <motion.h2
            className='services__h2'
            initial={false}
            animate={isInView ? {x: 0} : {x: 1000}}
          >
            <b className='b'>Our</b> services
          </motion.h2>
          <div className='parking'>
            <motion.div className='parking__description'>
              <h3 className='parking__h3'>Parking Lot Sweeping</h3>
              <p className='parking__text'>
                Cleaning of shopping centers, industrial, HOA, garages as low as
                6.6inch. We have specialized units to provide fast and efficient
                services, without having to close your spaces during working
                hours.
              </p>
            </motion.div>
          </div>
          <div className='parking__gallery'>
            <motion.div
              className='gallery__container'
              layout
              initial={'starts'}
              transition={{staggerChildren: 0.3}}
              whileInView={'ends'}
              viewport={{once: true}}
            >
              {parkingImages.map((img, index) => (
                <motion.div className='gallery__item' variants={imgsAnimation}>
                  <img
                    className='gallery__img'
                    src={img}
                    key={index}
                    onClick={() => {
                      setElements(index);
                      setIsOpen(true);
                      setImgPackage(parkingImages);
                    }}
                    alt='Villas Power SweeePing Services'
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className='junk'>
            <motion.div className='junk__description'>
              <h3 className='junk__h3'>Junk Hauling</h3>
              <p className='junk__text'>
                Get rid of the furniture you no longer need, mattresses, useless
                materials. We have trash enclosure clean up, there is no weight
                limit, we take care of it <br />
                So heavy? We found a way to take it away
              </p>
            </motion.div>
          </div>
          <div className='junk__gallery'>
            <motion.div
              className='gallery__container'
              layout
              initial={'starts'}
              transition={{staggerChildren: 0.3}}
              whileInView={'ends'}
              viewport={{once: true}}
            >
              {junkImages.map((img, index) => (
                <motion.div className='gallery__item' variants={imgsAnimation}>
                  <img
                    className='gallery__img'
                    src={img}
                    key={index}
                    onClick={() => {
                      setElements(index);
                      setIsOpen(true);
                      setImgPackage(junkImages);
                    }}
                    alt='Villas Power SweeePing Services'
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className='graffiti'>
            <motion.div className='graffiti__description'>
              <h3 className='graffiti__h3'>Graffiti Removal</h3>
              <p className='graffiti__text'>
                Walls, floors, stones, any surface where there is graffiti, we
                are prepared to remove it
              </p>
            </motion.div>
          </div>
          <div className='graffiti__gallery'>
            <motion.div
              className='gallery__container'
              layout
              initial={'starts'}
              transition={{staggerChildren: 0.3}}
              whileInView={'ends'}
              viewport={{once: true}}
            >
              {graffitiImages.map((img, index) => (
                <motion.div className='gallery__item' variants={imgsAnimation}>
                  <img
                    className='gallery__img'
                    src={img}
                    key={index}
                    onClick={() => {
                      setElements(index);
                      setIsOpen(true);
                      setImgPackage(graffitiImages);
                    }}
                    alt='Villas Power SweeePing Services'
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className='pressure'>
            <motion.div className='pressure__description'>
              <h3 className='pressure__h3'>Pressure Wash</h3>
              <p className='pressure__text'>
                Commercial parking sidewalks, trash cousure, residential
                driveways We have available the necessary liquid materials to be
                able to clean your surfaces, degreasers, mild soaps floors,
                walls, etc. <br />
                Consult us to reach a solution
              </p>
            </motion.div>
          </div>
          <div className='pressure__gallery'>
            <motion.div
              className='gallery__container'
              layout
              initial={'starts'}
              transition={{staggerChildren: 0.3}}
              whileInView={'ends'}
              viewport={{once: true}}
            >
              {pressureImages.map((img, index) => (
                <motion.div className='gallery__item' variants={imgsAnimation}>
                  <img
                    className='gallery__img'
                    src={img}
                    key={index}
                    onClick={() => {
                      setElements(index);
                      setIsOpen(true);
                      setImgPackage(pressureImages);
                    }}
                    alt='Villas Power SweeePing Services'
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <ImageVisualizer
            imgPackage={imgPackage}
            elements={elements}
            setElements={setElements}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </section>
    </div>
  );
}

export default Services;
