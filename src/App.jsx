import { Provider } from 'react-redux';
import './css/reset.css'
import Router from './shared/Router.jsx'
import store from './redux/config/configStore.js';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )

}

export default App;
