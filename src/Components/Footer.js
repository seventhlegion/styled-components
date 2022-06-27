import React from 'react'
import Socialicons from './Socialicons'
import { Container } from './Style/Container.styled'
import { Flex } from './Style/Flex.styled'
import { StyledFooter } from './Style/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
        <Container>
            <Flex>
            <img src={'./images/logo_white.svg'} alt={''} />
                <ul>
                    <li>
                        practicing styled components
                    </li>
                    <li>
                        +98-935-599-9800
                    </li>
                    <li>
                        ali.ahmadi.1377@hotmail.com
                    </li>
                </ul>
                <ul>
                    <li>
                        About Us
                    </li>
                    <li>
                        Whats we Do
                    </li>
                    <li>
                        FAQ
                    </li>
                </ul>
                <ul>
                    <li>
                        Career
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Contact Us
                    </li>
                </ul>
                <Socialicons />
            </Flex>
            <p>© 2021 huddle. All rights reserved</p>
        </Container>
    </StyledFooter>
  )
}
