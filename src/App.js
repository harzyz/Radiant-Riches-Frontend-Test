import Footer from './components/footer/footer';
import Mainsection from './components/mainsection/mainsection';
import Navbar from './components/navbar/navbar';
import RelatedDeals from './components/related-deals/relatedDeals';
import './index.css';

function App() {
  return (
    <main className='contain'>
      <Navbar />
      <Mainsection />
      <Footer />
    </main>
  );
}

export default App;
