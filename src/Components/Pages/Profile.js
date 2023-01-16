import React from 'react'
// useNavigate replaces useHistory hook.
import { useNavigate, useParams } from 'react-router-dom'

function Profile() {
    let navigate = useNavigate();
    //`useParam` acceps a parameter from the route.
    //In App.js, you can see a that the Profile page's 
    //route there is an additional input in the Route
    //"/:username". It's accepted here and output into
    //the code that is then rendered so that you can
    //see the `username`. 

    //To test this out, try searching for 
    // localhost:3000/profile/AnyUsernameYouWant
    //and view the text that appears on the page.
    let {username} = useParams(); 
  return (
    <div>
        <div>This is the PROFILE page of {username}.</div>
        <button 
            onClick={() => {
                navigate("/");
            }}
        >Go to Home page</button>
    </div>
    
  )
}

export default Profile