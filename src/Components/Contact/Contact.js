import './Contact.css';
import {useRef} from 'react';
import {motion, useInView} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import useForm from '../../customHooks/useForm';

function Contact() {
  // Form Variants //
  const initialData = {
    name: '',
    email: '',
    message: '',
  };
  const onValidate = (form) => {
    const error = [];
    const regexName = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const regexMessage = /^.{1,150}$/;

    if (!regexName.test(form.name)) {
      error[0] = true;
      error[1] = 'Name must content 3-40 characters';
      return error;
    }
    if (!regexEmail.test(form.email)) {
      error[0] = true;
      error[1] = 'Invalid E-mail';
      return error;
    }
    if (!regexMessage.test(form.message)) {
      error[0] = true;
      error[1] = 'Message must content 1-150 characters';
      return error;
    }
    error[0] = false;
    return error;
  };
  const {form, error, handleChange, handleSubmit} = useForm(
    initialData,
    onValidate
  );
  // Framer Motion Variants//
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
          <div
            className='form__container'
            method='POST'
            action='https://formspree.io/f/meqnlwpj'
          >
            <form className='form'>
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
              {/* Errors Text DIV */}
              {error[0] ? (
                <div
                  className='result'
                  style={error[0] ? {color: '#ff0000'} : {color: '#149600'}}
                >
                  {error[1]}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
