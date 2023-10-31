import './Header.css';
import {useState, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {AiFillHome, AiFillInfoCircle} from 'react-icons/ai';
import {MdCleaningServices, MdContacts} from 'react-icons/md';
import {FaBars} from 'react-icons/fa';
import {motion} from 'framer-motion';
import {Context} from '../Context';
import ClickAwayListener from '@mui/base/ClickAwayListener';

const Header = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const {setisLogoAnimationCompleted} = useContext(Context);
  const handleClick = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };
  const handleClickAway = () => {
    setIsNavMenuOpen(false);
  };
  // Framer Motion Variants //
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
    <header className='header'>
      <h1 className='h1'>Villa&apos;s Power Sweeping</h1>
      <motion.div
        className='reception__animation'
        layout
        variants={startAnimation}
        animate='ends'
        onAnimationComplete={() => setisLogoAnimationCompleted(true)}
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
        animate={isNavMenuOpen ? 'open' : 'close'}
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
    </header>
  );
};

export default Header;
