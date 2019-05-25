import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components'; 
import ProfileData from '../../data/ProfileData'; 
import {theme} from '../../assets/theme';

class Profile extends Component {
  state = {
    profile: {ProfileData}
  }

  render () {
    return (
    <ThemeProvider theme={theme}>
        <ProfileElement>
          <ProfilePic  alt='me' src={require(`../../assets/img/${this.state.profile.ProfileData.ProfileDataElements.picture}`)} />
          <ProfileName>{this.state.profile.ProfileData.ProfileDataElements.Name}</ProfileName>
    </ProfileElement>
    </ThemeProvider>
    )
  }
}

const ProfileElement = styled.div`
  display: flex;
  margin-left: 40vw;
`; 

const ProfileName = styled.p`
  color: ${props => props.theme.textColor};
  margin-top: 3vh;
`; 

const ProfilePic = styled.img`
  width: 10vh;
  height: 8vh; 
  width: 14vw;
  border-radius: 50px;
  margin-right: 2vw;
  margin-top: 1vh;
`;

export default Profile