import './App.css'
import { Provider } from 'react-redux';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { ConfigProvider } from 'antd';

const App = () => {


  return (
    <div className="w-full min-h-screen bg-white">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConfigProvider theme={{
            components: {
              Button: { colorPrimary: '#1043A6', fontWeight: 500, colorPrimaryText: '#F9F5FF', colorPrimaryHover: '#140a66', colorPrimaryActive: '#140a66', }
            }
          }}>
            <RouterProvider router={router} />
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
