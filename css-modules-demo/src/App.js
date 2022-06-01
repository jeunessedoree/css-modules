import './App.css';
import Header from './Header';
import Container from './Container';
import CSSSpecificityContainer from './CSSSpecificityContainer';

function App() {
  return (
    <div className="App">
      <Header title="I am a CSS module title" />
      <Container />
      <CSSSpecificityContainer />
    </div>
  );
}

export default App;
