import PropTypes from 'prop-types';
import '../styles/ResumeView.css'

function ResumeView({editHandler, values}) {
    // include a button maybe in the top right to switch to the edit mode
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
                        <div>{values.schoolName}</div>
                        <div>{values.dateStudy}</div>
                    </div>
                    <div>{values.titleStudy}</div>
                    
                </section>
                <section>
                    <h1>Professional Experience</h1>
                    <div className="company-date">
                        <div>{values.companyName}</div>
                        <div>{values.jobStartDate} to {values.jobEndDate}</div>
                    </div>
                    <div>{values.positionTitle}</div>

                    <div>Responsibilities:</div>
                    <div className='responsibilities'>{values.jobResponsibilities}</div>
                    
                    
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
