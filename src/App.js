import './App.css';
import background from './images/background.jpeg';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Category from './components/Category';
import 'bootstrap/dist/css/bootstrap.min.css';
import Destination from './components/Destination';
import Bookings from './components/Booking';
import Footer from './components/Footer';
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div
        className='App'
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100%',
          paddingBottom: '20vh',
        }}
      >
        <Navigation />
        <MainContent />
      </div>
      <div>
        <Category />
        <Destination />
        <Bookings />
        <Footer />
        <Contact />
      </div>
    </>
  );
}

export default App;
