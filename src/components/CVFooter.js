import React from 'react';

import '../components/cvStyles.css'

function CVFooter(props) {

    return (
        <div className="footer">
            <p style={{fontStyle: "italic"}}>
                The End (or more accurately, the beginning).
            </p>
            <p style={{fontStyle: "italic"}}>
                Thank you for your time. If you'd like to contact me for any reason (job offer would be great), you can email me at <a href="mailto:jeffsee@gmail.com">jeffsee@gmail.com</a>, or via <a href="https://www.linkedin.com/in/jeffrey-see" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
            </p>
        </div>
    );

}

export default CVFooter;
