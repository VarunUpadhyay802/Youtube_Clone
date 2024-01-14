
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './components/utils/store';
function App() {
  return (
    <>
    <Provider store={store}>

      <Head/>
      <Body/>
      </Provider>
    </>
  );
}

export default App;
