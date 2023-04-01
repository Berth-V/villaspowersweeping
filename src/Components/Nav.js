import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {AiFillHome, AiFillInfoCircle} from 'react-icons/ai';
import {MdCleaningServices, MdContacts} from 'react-icons/md';
import {FaBars} from 'react-icons/fa';
import {motion} from 'framer-motion';
import ClickAwayListener from '@mui/base/ClickAwayListener';

const Nav = ({setLoaded, headerIndex}) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClickAway = () => {
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  // Framer motion values //
  const navVariants = {
    open: {right: 0},
    close: {right: -100},
  };
  const startAnimation = {
    ends: {
      x: -2050,
      transition: {
        delay: 2.2,
        duration: 1,
      },
      transitionEnd: {display: 'none'},
    },
  };
  const logoAnimation = {
    ends: {
      rotateY: [0, 360, 0],
      transition: {duration: 2},
    },
  };

  return (
    <motion.header
      className='header'
      layout
      initial={false}
      animate={headerIndex ? {zIndex: '0'} : {zIndex: '100'}}
    >
      <h1 className='h1'>Villa&apos;s Power Sweeping</h1>
      <motion.div
        className='reception__animation'
        layout
        variants={startAnimation}
        animate='ends'
        onAnimationComplete={() => setLoaded(true)}
      >
        <motion.img
          className='reception__logo'
          layout
          src='img/logo.png'
          variants={logoAnimation}
          animate='ends'
        />
      </motion.div>
      <div className='logo'>
        <img
          className='logo__img'
          src='img/logo.png'
          alt="villa's power sweeping"
        />
      </div>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <FaBars className='toggle__btn' onClick={handleClick} />
        </div>
      </ClickAwayListener>
      <motion.nav
        className='nav'
        variants={navVariants}
        animate={isOpen ? 'open' : 'close'}
      >
        <ul className='nav__ul'>
          <li className='nav__li'>
            <NavLink className='nav__a' to='/'>
              <AiFillHome className='nav__icon' />
              <span className='nav__span'>Home</span>
            </NavLink>
          </li>
          <li className='nav__li'>
            <NavLink className='nav__a' to='/services'>
              <MdCleaningServices className='nav__icon' />
              <span className='nav__span'>Services</span>
            </NavLink>
          </li>
          <li className='nav__li'>
            <NavLink className='nav__a' to='/about'>
              <AiFillInfoCircle className='nav__icon' />
              <span className='nav__span'>About Us</span>
            </NavLink>
          </li>
          <li className='nav__li'>
            <NavLink className='nav__a' to='/contact'>
              <MdContacts className='nav__icon' />
              <span className='nav__span'>Contact</span>
            </NavLink>
          </li>
        </ul>
      </motion.nav>
    </motion.header>
  );
};

export default Nav;
