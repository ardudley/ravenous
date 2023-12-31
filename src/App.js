import './App.css';
import BusinessList from './BusinessList.js'
import SearchBar from './SearchBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
    crossorigin="anonymous"
/>

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Pizza Tascio',
    address: '1010 Paddington Way',
    city: 'Kansas City',
    state: 'MO',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.9,
    reviewCount: 90
};

const businesses = [business, business, business, business, business];

function App() {
  return (
    <div className="App">
          <header className="App-header">
              <h1>Ravenous</h1>
              <SearchBar />
              <BusinessList businesses={businesses} />

      </header>
    </div>
  );
}

export default App;
