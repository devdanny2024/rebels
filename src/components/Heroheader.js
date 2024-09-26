import Image from 'next/image';

const Heroheader = () => {


    return (
     <>
      <div className="hero-container">
        <div className="cta-container">
          <h1>DARE TO REBEL</h1>
          <p>Check out out latest collection now, let’s tune up 
          your wardrobe</p>
          <div className="cta-btn">shop now</div>
        </div>
        <div className='hero-image'>
        <Image src="/images/test2.png" alt="Logo" width={911} height={600} />
        </div>
      </div>
     </>
    );
  };
  
  export default Heroheader;
  