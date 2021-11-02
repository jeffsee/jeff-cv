import React from 'react';

import './event.css';

const profilePanelStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    opacity: "85%",
    color: "black",
    display: "flex"
}

const profileImageStyle = {
    position: "relative",
    textAlign: "center",
    color: "white"
}

const profilePicStyle = {
    display: "block",
    height: "100%"
}

const profileInfoStyle = {
    flex: "1",
    textAlign: "left",
    margin: "20px"
}

function Profile(props) {

    return (
        <div className="event">
            <div style={profilePanelStyle}>
                <div style={profileImageStyle}>
                    <img style={profilePicStyle} src="./images/jeff_profile.jpg" alt="ProfilePic" title="Don't let the pose fool you, I'm not a model. Willing to listen to any offers though." />
                </div>
                <div style={profileInfoStyle}>
                    <h1>Jeff See</h1>
                    <h2>Software Developer</h2>
                    <br />
                    <p>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                        </svg>&nbsp;&nbsp;
                        <a href="mailto:jeffsee@gmail.com">jeffsee@gmail.com</a>
                    </p>
                    <p> 
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-map" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M15.817.613A.5.5 0 0 1 16 1v13a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 14.51l-4.902.98A.5.5 0 0 1 0 15V2a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0l4.902.98 4.902-.98a.5.5 0 0 1 .415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z"/>
                        </svg>
                        &nbsp;&nbsp;
                        Sydney, Australia
                    </p>
                    <p>
                        <img src="./images/LinkedIn.svg" alt="LinkedIn Logo" height="20em" width="20em"></img>
                        &nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/jeffrey-see/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/jeffrey-see/</a>
                    </p>
                </div>
            </div>
        </div>
    );

}

export default Profile;