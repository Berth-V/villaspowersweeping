import './Contact.css';
import {useRef} from 'react';
import {motion, useInView} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import useForm from '../../customHooks/useForm';

function Contact() {
  const {form, error, errorMsg, handleChange, handleSubmit} = useForm();

  // Framer Motion Variants //
  const contactRef = useRef();
  const isInView = useInView(contactRef, {once: true});
  const iconAnimation = {
    hover: {
      backgroundColor: '#f4ae13',
    },
    tap: {
      rotateY: [0, 360],
      backgroundColor: '#f4ae13',
    },
  };

  return (
    <>
      <section className='contact' ref={contactRef}>
        <motion.h2
          className='contact__h2'
          /* Framer Motion Attributes */
          initial={false}
          animate={isInView ? {x: 0} : {x: 1000}}
        >
          Con<b className='b'>tact</b>
        </motion.h2>
        <div className='contact__container'>
          <div className='icon__container'>
            <div className='icon__box'>
              <motion.a
                className='icon__a'
                href='https://wa.me/16197107251'
                target='_blank'
                rel='noreferrer'
                /* Framer Motion Attributes */
                variants={iconAnimation}
                whileHover={'hover'}
                whileTap={'tap'}
              >
                <FontAwesomeIcon className='contact__icon' icon={faWhatsapp} />
              </motion.a>
              <span className='icon__span'>WhatsApp</span>
            </div>
            <div className='icon__box'>
              <motion.a
                className='icon__a'
                href='https://www.instagram.com/villaspowersweeping'
                target='_blank'
                rel='noreferrer'
                /* Framer Motion Attributes */
                variants={iconAnimation}
                whileHover={'hover'}
                whileTap={'tap'}
              >
                <FontAwesomeIcon className='contact__icon' icon={faInstagram} />
              </motion.a>
              <span className='icon__span'>Instagram</span>
            </div>
            <div className='icon__box'>
              <motion.a
                className='icon__a'
                href='mailto:villasporwersweeping'
                target='_blank'
                rel='noreferrer'
                /* Framer Motion Attributes */
                variants={iconAnimation}
                whileHover={'hover'}
                whileTap={'tap'}
              >
                <FontAwesomeIcon className='contact__icon' icon={faEnvelope} />
              </motion.a>
              <span className='icon__span'>E-mail</span>
            </div>
          </div>
          <div className='form__container'>
            {/* 
            Form 
            method='POST'
            action='https://formspree.io/f/me qnlwpj'
            */}
            <form className='form' onSubmit={handleSubmit}>
              {console.log(error)}
              <input
                className='form__input'
                onChange={handleChange}
                name='name'
                value={form.name}
                type='text'
                placeholder='Name'
                required=''
                autoComplete='off'
              />
              <input
                className='form__input'
                onChange={handleChange}
                name='email'
                value={form.email}
                type='email'
                placeholder='E-Mail'
                required=''
                autoComplete='off'
              />
              <textarea
                className='form__input--message'
                onChange={handleChange}
                name='message'
                value={form.message}
                placeholder='Message'
                required=''
              />
              <input
                className='form__submit'
                type='submit'
                value='Submit'
                onClick={handleSubmit}
              />
              {/* Errors Text */}

              <div
                className='result'
                style={error ? {color: '#149600'} : {color: '#ff0000'}}
              >
                {errorMsg}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
