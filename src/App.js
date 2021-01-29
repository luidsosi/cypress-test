import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Ação</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Teste 1</td>
            <td><button>Deletar</button></td>
          </tr>
          <tr>
            <td>Teste 2</td>
            <td><button>Deletar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
