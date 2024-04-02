
import React, { useState, useEffect, useContext } from 'react';

import Logo from '../components/Logo'
import { GrLogin } from "react-icons/gr";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { useStrings } from '../components/Assets';
import AssetStrings from '../assets/strings/original/en-US/resources'
import { FiAlertTriangle } from "react-icons/fi";
import { UserConsentContext } from '../UserConsentContext'; // Import the context


export default function Entry() {
  const navigate = useNavigate();
  //strings
  const resourceStrings = useStrings();   //some issue with render and fetching, need to implement a loader kind of thing
  const homeStrings = AssetStrings.SecretChat.Home;

  const { setuserConsent } = useContext(UserConsentContext);
  //consent checker
  const [checked, setChecked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checked) {
      let currentDate = new Date();
      var dateString = currentDate.toLocaleString();
      localStorage.setItem('userConsentDate', dateString);
      setuserConsent(true);
      navigate('/space');
      return false;
    } else {
      setShowAlert(true);
    }
  };


  const onChange = () => {
    setChecked(!checked);
    if (!checked) {
      setShowAlert(false);
    }
  };

  return (
    <div className='fullscreen-container Lato'>
      <div className='content-container flex flex-col justify-center items-start md:px-8 px-4 lg:px-8'>
        <div>
          <Logo />
          <div className='flex flex-col gap-4 py-4 md:py-6'>
            <div className='md:text-3xl text-2xl font-bold lato'>{homeStrings.HomeHeader}</div>
            <div className='md:text-base/loose text-sm lato-p hidden md:flex lg:flex'>
              {homeStrings.HomeConsentDescription}</div>
            <div className='md:text-base/loose text-sm lato-p flex md:hidden lg:hidden'>
              {homeStrings.HomeConsentDescriptionSmallScreen}</div>

            {/* permission */}
            <div className='flex gap-2 items-start'>
              <div>
                <input type="checkbox" className="checkbox checkbox-sm
                          border-mygray checked:border-myblue [--chkbg:theme(colors.myblack)] [--chkfg:#0ea5e9]"
                  onChange={onChange} />
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
        </div>


        {/* enter */}
        <div className='my-4 w-full grid place-items-center text-2xl text-myred'>
          <button className='login' disabled={!checked} onClick={handleSubmit}>
            <GrLogin />
          </button>
        </div>


      </div>

    </div >
  )
}
