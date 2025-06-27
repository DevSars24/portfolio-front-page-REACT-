const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img
            src="/images/collegelogo.jpg"
            alt="logo"
            style={{
              width: '80px',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
        </div>

        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#">about me</a></li>
            <li><a href="#">coding profiles</a></li>
            <li><a href="#">contact me</a></li>
            <li><a href="#">skiils</a></li>
          
          </ul>
          <button className="login-btn">IIITIAN</button>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
