import logoNotes from './img/logoNotes.png';
import NoteList from './components/NoteList/NoteList';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='aplication-notes'>
				<div className='notes-logo-container'>
					<img src={logoNotes} className='notes-logo' alt='logo' />
				</div>
				<div className='note-list'>
					<h1> my notes</h1>
					<br></br>
					<Routes>
						<Route path='/' element={<NoteList />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
