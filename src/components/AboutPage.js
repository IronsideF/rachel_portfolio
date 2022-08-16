import React from 'react'
import styled from 'styled-components';

const AboutPage = () => {
  return (
    <About>
      <img src="https://images.unsplash.com/photo-1659320898453-a662cb52a180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Self Portrait" />
      <AboutDeets>
        <h2>Rachel Stewart</h2>
        <p>
          Beautiful, Talented, Mysterious.
        </p>
      </AboutDeets>
    </About>
  )
}

const About = styled.div`
  display:flex;
  justify-content: space-around;
`;
const AboutDeets = styled.div`
  display:flex;
  flex-direction:column;
`;

export default AboutPage