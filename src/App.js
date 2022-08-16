import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components';

import PortfolioContainer from './containers/PortfolioContainer';
import FooterNav from './components/FooterNav';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PortfolioItem from './components/PortfolioItem';

function App() {
  
  const items = [
        {
            imgUrl: 'https://images.unsplash.com/photo-1659465398090-5a7d849e4cc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Gold Sand',
            about: 'A wallpaper or something'
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1659504709294-e4d55fb7fdf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Hat on Bag',
            about: 'A hat on a bag',
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1659473210769-b8166100e48c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Coffee Art',
            about: 'Truly the peak of art',
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1659483083573-bc3dbbc02a23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Woman coming out of the ocean to kill you',
            about: 'Watch out!',
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1659434322358-72fd6d1e74ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80',
            title: 'Cool Alleyway',
            about: 'What a cool alleyway',
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1659205079474-4b5904ee53ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
            title: 'Baby Owl',
            about: 'Lovely',
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1659506587287-5a6120a2b7cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
            title: 'Big flowy dress',
            about: 'Look at that dress!',
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1659471202276-0c38bc6049ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2233&q=80',
            title: 'Road from Above',
            about: "Imagine roads were this small. It would be crazy, cars wouldn't fit.",
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1659398652648-b3b8b7c1beab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Dresser',
            about: 'Some interior design on display here, oh yeah!',
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1659395764679-e4a8aec7dab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Game Console',
            about: "Wait no I think it's a drone control thingy?",
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1659384485845-5e84e04abd7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Dancer',
            about: 'Kapow!',
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1659384842646-86fbd3309b23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
            title: 'Cool Bowl',
            about: 'What a cool bowl.',
        },
    ]
  
  
  return (
    <Router>
      <Title>
        <h1>Rachel Stewart</h1>
      </Title>
      <Routes>
        <Route exact path='/rachel_portfolio' element={<PortfolioContainer items={items}/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/:id' element={<PortfolioItem items={items}/>}/>
      </Routes>

      <FooterNav/>
    </Router>
  );
}

const Title = styled.header`
  display:flex;
  justify-content:center;
`;

export default App;
