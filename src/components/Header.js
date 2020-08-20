import React from 'react';
import { Link } from 'gatsby';
import Menu from './Menu';
import Hamburger from './Hamburger';
import logoOnly from '../images/logo-only.svg';
// import logoMobile from '../images/logo-mobile.svg';
import MenuMobile from './MenuMobile';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo" style={{display: 'flex'}}>
            <Link to="/">
              <img alt="Figurit Homepage" src={logoOnly} style={{width: '40px'}} />
            </Link>
            <h1 style={{fontSize: '1.5rem', whiteSpace: 'nowrap', paddingLeft: '10px', lineHeight: '36px'}}>Healthcare Systems and Services</h1>
            
          </div>
          <div className="logo-mobile">
            <Link to="/">
              <img alt="Figurit Homepage" src={logoOnly} />
            </Link>
          </div>
          <MenuMobile active={this.state.menuActive} />
          <Menu />
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>
      </div>
    );
  }
}

export default Header;
