import React from 'react'
import { StyledSocialIcons } from './Style/SocialIcons.styled'
import { FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa'

export default function Socialicons() {
  return (
    <StyledSocialIcons>
        <li>
            <a href='https://instagram.com'>
                <FaInstagram /> 
            </a>
        </li>
        <li>
            <a href='https://twitter.com'>
                <FaTwitter /> 
            </a>
        </li>
        <li>
            <a href='https://facebook.com'>
                <FaFacebook />
            </a>
        </li>

    </StyledSocialIcons>
  )
}
