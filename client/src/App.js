import './App.css';
import Sidebar from './components/Sidebar'
import TopMenu from "./components/TopMenu";
import InsightsArea from "./components/InsightsArea";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <TopMenu />
      <InsightsArea>
        <section>
          <h2 className={'title'}>Goals overview</h2>
          <Card name={'Yearly Goals'} bodyContent={'aaa'} footerContent={'aaa'} />
        </section>
      </InsightsArea>
    </div>
  );
}

export default App;
