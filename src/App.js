// import Weather from './components/Wheather'
import Card from "./components/Card";
import Header from "./components/Header";
import data from './db1.json'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <hr />
      <div className="content">
        {
          data.map((item) => {
            return (<Card dat={item} />);
          })
        }
      </div>
    </>
  );
}

export default App;
