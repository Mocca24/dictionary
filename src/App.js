import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by <a href="https://github.com/Mocca24/dictionary" target="_blank"
          rel="noreferrer">Cynthia Alvez</a></small>
        </footer>
      </div>
    </div>
  );
}
