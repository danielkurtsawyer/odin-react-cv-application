import { useState } from 'react';
import './App.css';
import ResumeForm from './ResumeForm';
import ResumeView from './ResumeView';

function App() {
    const [isEditing, setIsEditing] = useState(true);
    const handleIsEditing = () => {
        setIsEditing(!isEditing);
    };
    return (
        <>
            <header>
                <h1>CV Application Builder</h1>
            </header>
            <main>
                <button onClick={handleIsEditing}>Change Mode</button>
                {isEditing ? <ResumeForm /> : <ResumeView />}
            </main>
            <footer>
                <a
                    href="https://github.com/danielkurtsawyer/odin-react-cv-application"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </footer>
        </>
    );
}

export default App;
