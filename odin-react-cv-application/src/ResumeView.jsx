import PropTypes from 'prop-types';

function ResumeView({editHandler, values}) {
    // include a button maybe in the top right to switch to the edit mode
    return (
        <>
            <div>First name: {values.firstName}</div>
            <div>Last name: {values.lastName}</div>
            <div>Email: {values.email}</div>
            <div>Phone Number: {values.phoneNumber}</div>

            <div>School Name: {values.schoolName}</div>
            <div>Title of Study: {values.titleStudy}</div>
            <div>Date of Study: {values.dateStudy}</div>

            <div>Company Name: {values.companyName}</div>
            <div>Position Title: {values.positionTitle}</div>
            <div>Job Responsibilities: {values.jobResponsibilities}</div>
            <div>Job Start Date: {values.jobStartDate}</div>
            <div>Job End Date: {values.jobEndDate}</div>

            <button onClick={editHandler}>Edit Form</button>
        </>
    );
}

ResumeView.propTypes = {
    editHandler: PropTypes.func,
    values: PropTypes.object
}

export default ResumeView;
