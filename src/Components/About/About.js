import './About.css';
import {useRef} from 'react';
import {motion, useInView} from 'framer-motion';

function About() {
  const aboutRef = useRef();
  const isInView = useInView(aboutRef, {once: true});

  return (
    <div>
      <section className='about' ref={aboutRef}>
        <div className='about__container'>
          <motion.h2
            className='about__h2'
            /* Framer Motion Attributes */
            animate={isInView ? {x: 0} : {x: -1000}}
          >
            About <b className='b'>Us</b>
          </motion.h2>
          <div className='about__description'>
            <img src='img/about1.svg' alt='' className='about__img' />
            <p className='about__text'>
              Villas&apos;s Power Sweeping is a company created in 2008, with
              the purpose of providing a better infrastructure to the city of
              San Diego, keeping the establishments clean, and at the same time
              trying to moderately reduce the environmental damage that could be
              generated as a result of small aggressors such as plastic or
              styrofoam, residues that for the most part remain stagnant in
              small places such as store floors, stones and sidewalks. <br />
              Since 2013, when there was a change of administration, the company
              has been trying to focus on reaching more people, places, and thus
              better establish our goals and our commitment to our people.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
