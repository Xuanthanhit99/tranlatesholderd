
import './App.css';
import Home from './components/Home';


import styled from 'styled-components'

const Wrapper = styled.div`
        width: 100%;
        max-width: 1280px;
        height: 100vh;
        padding: 0px;
        margin: 0 auto;
        color: #fff

`
function App() {
  return (
    <Wrapper className="App">
        <Home/>
    </Wrapper>
  );
}

export default App;
