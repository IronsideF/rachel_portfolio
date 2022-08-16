import React from 'react'
import PortfolioItem from '../components/PortfolioItem'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import './PortfolioContainer.css'

const PortfolioContainer = ({items}) => {
  

    const itemNodes = items.map((item, i) => <PortfolioItem imgUrl={item.imgUrl} title={item.title} about={item.about} key={i}/>)
    const itemLinks = items.map((item, i) => {
        const linkString = `/${i}`;
        return(<Link to={linkString}>
            <img className='port-image' src={item.imgUrl} alt={item.title} />
        </Link>)
    })
    console.log(itemLinks)
  
    return (
    <PortfolioWrapper>
        {itemLinks}
    </PortfolioWrapper>
  )
}

const PortfolioWrapper = styled.div`
  display:grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: center;
  overflow: scroll;
  max-height: 80vh;
`;

export default PortfolioContainer