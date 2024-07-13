import PropTypes from 'prop-types';

function ResumeForm({submitHandler, values}) {
    // this will be a form with the onSubmit handler function being the prop function
    return (
    <>
        <form onSubmit={submitHandler}>
            <fieldset className="info">
                <legend>General Information</legend>

                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" id="first_name" defaultValue={values.firstName}/>
                
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" id="last_name" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="phone_number">Phone Number</label>
                <input type="tel" name="phone_number" id="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
            </fieldset>

            <fieldset className="education">
                <legend>Educational Experience</legend>

                <label htmlFor="school_name">School Name</label>
                <input type="text" name="school_name" id="school_name" />

                <label htmlFor="title_study">Title of Study</label>
                <input type="text" name="title_study" id="title_study"/>

                <label htmlFor="date_study">Date of Study</label>
                <input type="date" name="date_study" id="date_study" />

            </fieldset>
            
            <fieldset className="practical">
                <legend>Practical Experience</legend>

                <label htmlFor="company_name">Company Name</label>
                <input type="text" name="company_name" id="company_name" />

                <label htmlFor="position_title">Position Title</label>
                <input type="text" name="position_title" id="position_title"/>

                <label htmlFor="job_responsibilities">Main Responsibilities of Job</label>
                <textarea name="job_responsibilities" id="job_responsibilities"></textarea>

                <label htmlFor="job_start_date">Start Date</label>
                <input type="date" name="job_start_date" id="job_start_date" />

                <label htmlFor="job_end_date">End Date</label>
                <input type="date" name="job_end_date" id="job_end_date" />
            </fieldset>
            <button type="submit">Submit</button>
        </form>
        
    </>);
}

ResumeForm.propTypes = {
    submitHandler: PropTypes.func,
    values: PropTypes.object
}

export default ResumeForm;
