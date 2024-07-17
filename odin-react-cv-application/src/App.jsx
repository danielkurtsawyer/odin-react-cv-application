import { useState } from 'react';
import './App.css';
import ResumeForm from './components/ResumeForm';
import ResumeView from './components/ResumeView';

function App() {
    const [isEditing, setIsEditing] = useState(true);
    const [inputValues, setInputValues] = useState({});
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let inputValueObject = {};
        // extract first name
        inputValueObject.firstName = event.target['first_name'].value;
        // extract last name
        inputValueObject.lastName = event.target['last_name'].value;
        // extract email
        inputValueObject.email = event.target['email'].value;
        // extract phone number
        inputValueObject.phoneNumber = event.target['phone_number'].value;

        // extract school name
        inputValueObject.schoolName = event.target['school_name'].value;
        // extract title of study
        inputValueObject.titleStudy = event.target['title_study'].value;
        // extract date of study
        inputValueObject.dateStudy = event.target['date_study'].value;

        // extract company name
        inputValueObject.companyName = event.target['company_name'].value;
        // extract position title
        inputValueObject.positionTitle = event.target['position_title'].value;
        // extract job responsibilities
        inputValueObject.jobResponsibilities = event.target['job_responsibilities'].value;
        // extract job start date
        inputValueObject.jobStartDate = event.target['job_start_date'].value;
        // extract job end date
        inputValueObject.jobEndDate = event.target['job_end_date'].value;

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
