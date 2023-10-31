import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx';

function ImageVisualizer({
  imgPackage,
  elements,
  setElements,
  isOpen,
  setIsOpen,
}) {
  const nextImg = () => {
    setElements((e) => e + 1);
    if (elements === imgPackage.length - 1) {
      setElements(() => 0);
    }
  };
  const prevImg = () => {
    setElements((e) => e - 1);
    if (elements === 0) {
      setElements(() => imgPackage.length - 1);
    }
  };

  return (
    <div
      className='image__visualizer'
      style={{display: isOpen ? 'flex' : 'none'}}
    >
      <img className='img' src={imgPackage[elements]} />
      <RxCross1 className='close__cross' onClick={() => setIsOpen(false)} />
      <AiOutlineArrowLeft className='left__arrow' onClick={prevImg} />
      <AiOutlineArrowRight className='right__arrow' onClick={nextImg} />
    </div>
  );
}

export default ImageVisualizer;
