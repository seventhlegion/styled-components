import React from 'react'
import { StyledHeader, Nav, Logo, Image} from './Style/Header.styled';
import { Container } from './Style/Container.styled';
import { Flex } from './Style/Flex.styled';
import { Button } from './Style/Button.styled';
import logo from './images/logo.svg'
import illustration from './images/illustration-mockups.svg'

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} alt={''}/>
          <Button>Try It For Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>
              Build The Community Your Fans Will Love
            </h1>
            <p>
              Huddle reimagines the way we build communities.
              You have a voice,
              but so dose your audience. Create connections with Your 
              users as
              you engage in genuine discussion.
            </p>
            
            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>
          <Image src={illustration} alt={''}/>
        </Flex>
      </Container>
    </StyledHeader>
  )
}
