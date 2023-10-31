import './Home.css';
import {useRef, useContext} from 'react';
import {motion, useInView} from 'framer-motion';
import {NavLink} from 'react-router-dom';
import {Context} from '../Context';

function Home() {
  const ref = useRef();
  const {isLogoAnimationCompleted} = useContext(Context);
  // Framer Motion Variants //
  const isInView = useInView(ref, {once: true, amount: 0.7});
  const items = {
    starts: {x: -1700},
    ends: {x: 0},
  };
  const items2 = {
    starts: {x: 1700},
    ends: {x: 0},
  };

  return (
    <>
      <section className='home'>
        <div className='home__container'>
          <motion.h2
            className='h2'
            variants={items}
            initial='starts'
            animate={isLogoAnimationCompleted && 'ends'}
          >
            We care your <b className='b'>space</b>, your{' '}
            <b className='b'>time</b>
          </motion.h2>
          <motion.p
            className='home__text'
            variants={items}
            initial='starts'
            animate={isLogoAnimationCompleted && 'ends'}
          >
            No time to tidy up your spaces?
            <br />
            We know that time is never recovered, invest it in the things that
            matter to you. We take care of the rest
          </motion.p>
        </div>
      </section>
      <section className='more'>
        <motion.img
          className='more__img'
          src='img/parking.jpg'
          alt=''
          variants={items2}
          initial='starts'
          animate={isLogoAnimationCompleted && 'ends'}
        />
        <motion.div
          className='more__description'
          variants={items2}
          initial='starts'
          animate={isLogoAnimationCompleted && 'ends'}
        >
          <p className='more__text'>
            Quality service 24/7. We have units prepared to carry out our work
            with the greatest possible efficiency, regardless of the location or
            size, we have tools to deal with any complications that arise
          </p>
        </motion.div>
      </section>
      <section className='more2' ref={ref}>
        <motion.div
          className='more2__description'
          animate={isInView ? {x: 0} : {x: -1700}}
        >
          <p className='more2__text'>
            Still don&apos;t have your appointment? Identify your service, then
            contact us
          </p>
          <div className='btn__container'>
            <NavLink className='more2btn' to='/services'>
              Services
            </NavLink>
            <NavLink className='more2btn' to='/contact'>
              Contact
            </NavLink>
          </div>
        </motion.div>
        <motion.img
          className='more__img'
          src='img/parking2.jpg'
          alt=''
          animate={isInView ? {x: 0} : {x: -1700}}
        />
      </section>
    </>
  );
}
export default Home;
