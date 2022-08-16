import React from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components';
import './PortfolioItem.css'

const PortfolioItem = ({items}) => {

  const {id} = useParams()
  const item = items[id]
  
  return (
    <PortItem>
      <img src={item.imgUrl} alt={item.title} />
      <PortDeets>
      <h2>{item.title}</h2>
      <p>{item.about}</p>
        <Link to='/rachel_portfolio'><button>Back</button></Link>
      </PortDeets>
    </PortItem>
  )
}

const PortItem = styled.div`
  display: flex;
  justify-content: center;
`;
const PortDeets = styled.div`
  display:flex;
  flex-direction:column;
  margin-left: 5vw;
`;

export default PortfolioItem