
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Entry from '../pages/Entry';
import SecretSpace from '../pages/SecretSpace';
import { UserConsentContext } from '../UserConsentContext'; // Import the context
import '../../src/index.css';
import '../../src/App.css';

function ConsentExpired(date) {
    // Get the current date
    let currentDate = new Date();
    // Calculate the difference in milliseconds between the two dates
    let difference = currentDate.getTime() - date.getTime();
    // Convert the difference to days
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    // Return if session expired or not
    return days >= 15 ? true : false;
}

export default function Root() {

    const [userConsent, setuserConsent] = useState(
        () => {
            let registeredDate = localStorage.getItem('userConsentDate');
            console.log(registeredDate);
            if (registeredDate === null) {
                return false;
            }
            else {
                let registeredDateObject = new Date(registeredDate);
                if (ConsentExpired(registeredDateObject)) {
                    localStorage.removeItem("userConsentDate");
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    );

    return (
        <div id="detail">
             <UserConsentContext.Provider value={{ userConsent, setuserConsent }}>
                   <Routes>
                <Route exact path="/" element={userConsent ? (<Navigate to='/space' />) : (< Entry />)} />
                {/* <Route exact path="/space" element={ < SecretSpace />} /> */}
                 <Route exact path="/space" element={userConsent ? < SecretSpace /> : <Navigate to='/' />} /> 
            </Routes>
             </UserConsentContext.Provider>
         
        </div>
    );
}
