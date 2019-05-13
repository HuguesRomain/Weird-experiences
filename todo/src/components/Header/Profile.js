import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components'; 
import {theme} from '/Users/hugues/Documents/Documents pro/Git Project/Weird-experiences/todo/src/assets/theme.js'
import ProfileData from '../../data/ProfileData'

class Profile extends Component {
  state = {
    profile: {ProfileData}
  }

  render () {
    return (
    <ThemeProvider theme={theme}>
        <ProfileElement>
          <ProfilePic  alt='me' src={require(`../../assets/${this.state.profile.ProfileData.ProfileDataElements.picture}`)} />
          <ProfileName>{this.state.profile.ProfileData.ProfileDataElements.Name}</ProfileName>
        </ProfileElement>
    </ThemeProvider>
    )
  }
}

const ProfileElement = styled.div`

`; 

const ProfileName = styled.p`
  color: ${props => props.theme.textColor};
`; 

const ProfilePic = styled.img`
  width: 10vh;
  border-radius: 100%;
`;

export default Profile