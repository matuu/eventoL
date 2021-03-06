import React from 'react'
import Logo from '../../../components/Logo';
import NavigationNarrow from '../../../components/Navigation/Narrow';
import UserProfileNarrow from '../../../components/UserProfile/Narrow';
import SignInNarrow from '../../../components/SignIn/Narrow';
import './index.scss';


export default class HeaderNarrow extends React.Component {

  toggle(){
		let linksEl = document.querySelector('.narrowLinks');
    const display = linksEl.style.display;
    linksEl.style.display = (display === 'block') ? 'none' : 'block';
	}

  render(){
    const {user} = this.props;
    return (
      <div className="navNarrow">
        <Logo />
        <div className='navRight'>
          <a href="#" onClick={this.toggle}><i className="fa fa-bars fa-2x"></i></a>
          <div className="narrowLinks">
            <NavigationNarrow />
            {user && <UserProfileNarrow user={user}/>}
            {!user && <SignInNarrow/>}
          </div>
        </div>
      </div>
    )
  }
};
