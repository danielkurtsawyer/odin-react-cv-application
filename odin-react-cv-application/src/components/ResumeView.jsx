import PropTypes from 'prop-types';
import '../styles/ResumeView.css'

function ResumeView({editHandler, values}) {
    const formatDateString = (string) => {
        return string.substring(5, 7) + '/' + string.substring(8) + '/' + string.substring(0, 4);
    };

    return (
        <>
            <div className="view">
                <section>
                    <h1 className='full-name'>{values.firstName} {values.lastName}</h1>
                    <div className="email-phone">
                        <div>{values.email}</div>
                        <div>{values.phoneNumber}</div>
                    </div>
                </section>
                <section>
                    <h1>Educational Experience</h1>
                    <div className="school-date">
                        <div className='school'>{values.schoolName}</div>
                        <div>{formatDateString(values.dateStudy)}</div>
                    </div>
                    <div className='title'>{values.titleStudy}</div>
                    
                </section>
                <section>
                    <h1>Professional Experience</h1>
                    <div className="company-date">
                        <div className='company'>{values.companyName}</div>
                        <div>{formatDateString(values.jobStartDate)} - {formatDateString(values.jobEndDate)}</div>
                    </div>
                    <div className='title'>{values.positionTitle}</div>

                    <div>Responsibilities:</div>
                    <ul className='responsibilities'>
                        {values.jobResponsibilities.split('\n').map((responsibility, index) => <li key={index}>{responsibility}</li>)}
                    </ul>
                    
                    
                </section>
                <button onClick={editHandler}>Edit Form</button>
            </div>
        </>
    );
}

ResumeView.propTypes = {
    editHandler: PropTypes.func,
    values: PropTypes.object
}

export default ResumeView;
