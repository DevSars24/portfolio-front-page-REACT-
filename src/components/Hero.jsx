const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>coding is the future</h1>
      
        <p>
          This side is Saurabh Singh Rajput <br />
          All the way from IIIT Bhagalpur (Institute of National Importance)<br />
          <p>sharing the code of my life</p><br></br>
          while(alive) (<br />
          &nbsp;&nbsp;eat(),<br />
          &nbsp;&nbsp;sleep(),<br />
          &nbsp;&nbsp;code(),<br />
          &nbsp;&nbsp;repeat()<br />
          )
        </p>

        <div className="hero-btn">
          <button>Work now. Make things work</button>
          <button>Make codes work</button>
        </div>

        <div className="working">
          <p>SARS</p> {/* <P> chhoti p honi chahiye */}
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-image" /> {/* img tag use karo */}
      </div>
    </main>
  );
};

export default Hero;
