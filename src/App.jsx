import { Provider } from 'react-redux';
import './css/reset.css'
import Router from './shared/Router.jsx'
import store from './redux/config/configStore.js';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <Provider store={store}>
      <Router />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark" />
    </Provider>
  )
}

export default App;
