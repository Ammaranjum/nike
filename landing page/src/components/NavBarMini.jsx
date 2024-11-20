import "./NavBarMini.css";


const NavBarMini = () => {
    return (
      <nav className="mini">
        <div className="logoM1">
          <img src="/images/converse.png" alt="logo" />
        </div>
        <div className="logoM2">
          <img src="/images/jumpman.png" alt="logo" />
        </div>
        
        <ul>

          <li href="#">Fine a Store</li>
          <li href="#">Help</li>
          <li href="#">Join us </li>
          <li href="#"><h1>Sign In</h1></li>

        </ul>
  
      </nav>
      
      
    );
  };
  
  export default NavBarMini;