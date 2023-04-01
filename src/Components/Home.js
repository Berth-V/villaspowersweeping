import './Home.css'
import '../App.css'
import {useRef} from 'react';
import {motion, useInView} from 'framer-motion';
import {NavLink} from 'react-router-dom';

function Home({loaded}) {
  const ref = useRef();
  // Framer Motion values //
  const isInView = useInView(ref, {once: true});
  const items = {
    starts: {x: -1500},
    ends: {
      x: 0,
    },
  };
  const items2 = {
    starts: {x: 1500},
    ends: {
      x: 0,
    },
  };

  return (
    <>
      <section className='home'>
        <div className='home__container'>
          {loaded ? (
            <>
              <motion.h2
                className='h2'
                variants={items}
                initial='starts'
                animate='ends'
              >
                We care your <b className='b'>space</b>, your{' '}
                <b className='b'>time</b>
              </motion.h2>
              <motion.p
                className='home__text'
                variants={items}
                initial='starts'
                animate='ends'
              >
                No time to tidy up your spaces?
                <br />
                We know that time is never recovered, invest it in the things
                that matter to you. We take care of the rest
              </motion.p>
            </>
          ) : null}
        </div>
      </section>
      <section className='more'>
        {loaded ? (
          <>
            <motion.img
              className='more__img'
              src='img/parking.jpg'
              alt=''
              variants={items2}
              initial='starts'
              animate='ends'
            />
            <motion.div
              className='more__description'
              variants={items2}
              initial='starts'
              animate='ends'
            >
              <p className='more__text'>
                Quality service 24/7. We have units prepared to carry out our
                work with the greatest possible efficiency, regardless of the
                location or size, we have tools to deal with any complications
                that arise
              </p>
            </motion.div>
          </>
        ) : null}
      </section>
      <section className='more2' ref={ref}>
        <motion.div
          className='more2__description'
          initial={false}
          animate={isInView ? {x: 0} : {x: 1000}}
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
          initial={false}
          animate={isInView ? {x: 0} : {x: 1000}}
        />
      </section>
    </>
  );
}
export default Home;
