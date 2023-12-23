import { welcomeImg } from '../assets';

const Welcome = () => {
  return (
    <>
      <div className="h-full bg-primary md:flex items-center justify-center flex-col backdrop-blur-sm hidden">
        <img src={welcomeImg} alt="welcome-img" className='mb-8 object-cover' />
        <div className="text-white text-center">
          <h4 className='text-lg lg:text-2xl font-semibold mb-2'>Welcome aboard my friend</h4>
          <p className='text-sm font-normal'>Just a couple of clicks and we start</p>
        </div>
      </div>
    </>
  );
};

export default Welcome;