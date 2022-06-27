import React from 'react'
import { StyledHeader, Nav, Logo, Image} from './Style/Header.styled';
import { Container } from './Style/Container.styled';
import { Flex } from './Style/Flex.styled';
import { Button } from './Style/Button.styled';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={'./images/logo.svg'} alt={''}/>
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
          <Image src={'./images/illustration-mockups.svg'} alt={''}/>
        </Flex>
      </Container>
    </StyledHeader>
  )
}
