import PokemonProvider from './context/PokemonContext.jsx';
import './css/reset.css'
import Router from './shared/Router.jsx'

function App() {
  return (
    <PokemonProvider>
      <Router />
    </PokemonProvider>
  )

}

export default App;
