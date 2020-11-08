import './App.css';
import './components/displayText.css';
import DisplayText from './components/displayText';
import Button from './components/button';

function App() {
  const text = 'Look how awesome that works. Copy if you please!';
  return (
    <div className='App'>
      <DisplayText text={text} />
      <Button text={text} />
    </div>
  );
}

export default App;
