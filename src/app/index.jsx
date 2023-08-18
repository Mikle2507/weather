
import './index.css';
import { Aside } from '../widgets/aside';
import { Sections } from '../widgets/sections';
import { SearchWeatherProvider } from '../shared/context/SearchWeatherProvider';

function App() {

  const theme = localStorage.getItem('app-theme');

  if(theme) {
    document.body.classList.add(`body-theme--${theme}`);
  }
  return (
    <main className="main">
        <SearchWeatherProvider>
          <Aside/>
          <Sections/>
        </SearchWeatherProvider>
    </main>
  );
}

export default App;
