import React from 'react';
import Faq from './Faq';

import Container from '@material-ui/core/Container';
import Form from './Form';
import './App.css';

function App() {
  return (
    <div className="App">
        
        <Container maxWidth="xl">
          <Container maxWidth="lg">
            <Faq/>
            <Form/>
          </Container>
        </Container>
    </div>
  );
}

export default App;
