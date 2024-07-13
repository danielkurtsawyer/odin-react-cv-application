import { useState } from 'react';
import './App.css';
import ResumeForm from './ResumeForm';
import ResumeView from './ResumeView';

function App() {
    const [isEditing, setIsEditing] = useState(true);
    const [inputValues, setInputValues] = useState({});
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let inputValueObject = {};
        // extract first name
        inputValueObject.firstName = event.target['first_name'].value;
        setInputValues(inputValueObject);
        setIsEditing(!isEditing);
    };

    const handleEdit = (event) => {
        event.preventDefault();
        setIsEditing(!isEditing);
    }

    return (
        <>
            <header>
                <h1>CV Application Builder</h1>
            </header>
            <main>
                {isEditing ? <ResumeForm submitHandler={handleSubmit} values={inputValues}/> : <ResumeView editHandler={handleEdit} values={inputValues}/>}
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
