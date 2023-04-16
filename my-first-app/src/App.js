import './App.css';
import NavBar from './components/nav-bar/nav-bar';
import SpinnerLoading from './components/spinner/spinner';
import Advertising from './components/advertising/advertising'


function App() {

  const data = [
    {link: 'Головна', id: 1},
    {link: 'Каталог товарів', id: 2},
    {link: 'Мої замовення', id: 3},
    {link: 'Кошик', id: 4},
    {link: 'Контакти', id: 5}
  ]
  return (
    <div className="App">

      <NavBar data = {data}/>

      <div className="container">
        <div className="row">
          <SpinnerLoading/>
          <Advertising/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
