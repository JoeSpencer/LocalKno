import React from 'react';

class MenuBar extends React.Component {
    constructor() {
      super();
      this.state = {
        clicked: false
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
    
    componentWillMount() {
          document.addEventListener('click', this.handleOutsideClick, false);
      }
  
      componentWillUnmount(){
          document.removeEventListener('click', this.handleOutsideClick, false);
      }
    handleClick() {
      this.setState({clicked: !this.state.clicked});
    }
    handleOutsideClick(event){
          if (!this.refs.megaMenu.contains(event.target)) {
        this.setState({
                  clicked: false
              });
          } 
    }
    render() {
      return (
        <div className="container">
          <div className="menu-bar">
            <div className="menu-bar-item" ref="megaMenu">
              <a className="menu-bar-link" href="#" onClick={this.handleClick}>Points</a>
              <div className={"mega-menu"+" "+this.state.clicked}>
                <div className="mega-menu-content">
                  <p>Points Menu</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      );
    }
  }
  
  export default MenuBar;