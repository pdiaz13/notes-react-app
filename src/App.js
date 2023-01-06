import logoNotes from "./img/logoNotes.png";
import NoteList from "./components/NoteList/NoteList.js";
import "./App.css";

function App() {
  return (
    <div className="aplication-notes">
      <div className="notes-logo-container">
        <img src={logoNotes} className="notes-logo" alt="logo" />
      </div>
      <div className="note-list">
        <h1> my notes</h1>
        <br></br>
        <NoteList />
      </div>
    </div>
  );
}

export default App;
