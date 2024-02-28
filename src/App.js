import Footer from './components/footer/footer';
import Mainsection from './components/mainsection/mainsection';
import Navbar from './components/navbar/navbar';
import { SearchProvider } from './context/searchContext';
import './index.scss';

function App() {
  return (
    <main className='contain'>
      <SearchProvider>
        <Navbar />
        <Mainsection />
        <Footer />
      </SearchProvider>
    </main>
  );
}

export default App;
