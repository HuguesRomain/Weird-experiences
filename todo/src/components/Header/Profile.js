import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components'
import ProfileData from '../../data/ProfileData'

class Profile extends Component {
  state = {
    profile: {ProfileData}
  }

  render () {
    return (
      <div>
        <ProfilePic  alt='me' src={require(`../../assets/${this.state.profile.ProfileData.ProfileDataElements.picture}`)} />
      </div>
    )
  }
}

const ProfilePic = styled.img`
  height: 15vw;
`;

export default Profile