function ResumeView({editHandler}) {
    // include a button maybe in the top right to switch to the edit mode
    return (
        <>
            <div>This is a view</div>
            <button onClick={editHandler}>Edit Form</button>
        </>
    );
}

export default ResumeView;
