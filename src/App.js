
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import WatchPage from './components/WatchPage';
import store from './components/utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [{
        path: "/",
        element: <MainContainer />
      }, {
        path: "watch",
        element: <WatchPage/>
      }]
    },
  ])
  return (
    <> 
    <Provider store={store}>
    <Head />
      <RouterProvider router={router}>


       
        <Body />

      </RouterProvider>
    </Provider>
    </>
  );
}

export default App;
