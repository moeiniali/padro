import './App.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';



const App = () => {


  return (
    <div className="w-full min-h-screen bg-white">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
