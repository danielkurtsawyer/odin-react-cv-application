import PropTypes from 'prop-types';

function ResumeView({editHandler, values}) {
    // include a button maybe in the top right to switch to the edit mode
    return (
        <>
            <div>This is a view</div>
            <div>First name: {values.firstName}</div>
            <button onClick={editHandler}>Edit Form</button>
        </>
    );
}

ResumeView.propTypes = {
    editHandler: PropTypes.func,
    values: PropTypes.object
}

export default ResumeView;