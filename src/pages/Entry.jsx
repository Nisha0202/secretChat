import React, { useState } from 'react';
import Logo from '../components/Logo'
import { GrLogin } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { useStrings } from '../components/Assets';
import AssetStrings from '../assets/strings/original/en-US/resources'

import { FiAlertTriangle } from "react-icons/fi";

export default function Entry() {

  //strings
  const resourceStrings = useStrings();   //some issue with render and fetching, need to implement a loader kind of thing
  console.log(resourceStrings);
  const homeStrings = AssetStrings.SecretChat.Home;

  //consent checker
  const [checked, setChecked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const onChange = () => {
    setChecked(!checked);
    if (!checked) {
      setShowAlert(false);
    }
  };

  //consent confirmation button
  const handleSubmit = (e) => {
    // Check if the checkbox is checked
    if (!checked) {
      // Show an error message or do nothing
      e.preventDefault();
      setShowAlert(true);
    }
    else {
      let currentDate = new Date();

      var dateString = currentDate.toLocaleString();
      localStorage.setItem('userConsentDate', dateString);
      console.log("handleClick");
      window.location.href = "/space";
    }
  };

  return (
    <div className='fullscreen-container Lato'>
      <div className='content-container flex flex-col justify-center'>
        <Logo />
        <div className='flex flex-col gap-4 py-4 md:py-6'>
          <div className='md:text-3xl text-2xl font-bold lato'>{homeStrings.HomeHeader}</div>
          <div className='md:text-base/loose text-sm lato-p '>{homeStrings.HomeConsentDescription}</div>

          {/* permission */}
          <div className='flex gap-2 items-start'>
            <div>
              <input type="checkbox" className="checkbox checkbox-sm
                          border-mygray checked:border-myblue [--chkbg:theme(colors.myblack)] [--chkfg:#0ea5e9]" 
                          onChange={onChange}/>
            </div>

            <div className='flex flex-col gap-1'>
              <span id='consentMessage' className='text-myBlue text-sm lato'>
                <Link >{homeStrings.Agreement}</Link>
              </span>
              <span>
                {
                  !showAlert ? (
                    <span id='consentDescription' className='text-xs flex items-center gap-2 text-mygray'>
                      {homeStrings.ConsentError}
                    </span>
                  ) : (
                    <span id='consentAlert' className='text-xs flex items-center gap-2 text-myred'>
                      <FiAlertTriangle />
                      {homeStrings.ConsentError}
                    </span>
                  )
                }
              </span>
            </div>

          </div>

        </div>

        {/* enter */}
        <div className='h-1/4 w-full grid place-items-center text-2xl text-myred'>
          <button>
            <Link to='/' className='login' disabled={!checked} onClick={handleSubmit}>
              <GrLogin />
            </Link>
          </button>

        </div>
      </div>

    </div>
  )
}
