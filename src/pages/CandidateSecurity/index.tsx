import React from 'react'


import { useForm, Controller } from 'react-hook-form';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
interface FormData {
	title: string;
	city: string;
	country: string;
	Description: string;
	startMonth: string;
	startYear: string;
}

const CandidateSecurity = () => {
	const { handleSubmit, control } = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		console.log(data); // You can handle form submission logic here
	};


	return (
	<div><Header />
<div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f0f0f0', padding: '0 20px' }}>
      {/* Header */}
      <h1 style={{ margin: ' 20px',fontSize:'30px', fontFamily:'Poppins',fontWeight:'600' }}>
        Settings
        
      </h1>
      {/* Content Container */}
      <div style={{ display: 'flex', flex: 1, margin: '0 20px' }}>
        {/* Left Column */}
        <div style={{ flex: '0 0 auto', backgroundColor: '', border: '' , borderTop: '4px solid green', padding: '20px' }}>
          {/* Menu */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
              <i className="fa fa-user"></i> Profile Settings
            </div>
            <div style={{ marginBottom: '10px' }}>
              <i className="fa fa-address-book"></i> Contact Info
            </div>
            <div style={{ marginBottom: '10px' }}>
              <i className="fa fa-cog"></i> Password and Security
            </div>
            <div style={{ marginBottom: '10px' }}>
              <i className="fa fa-bell"></i> Device and Notifications
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div style={{ flex: 1, padding: '20px', border: '' , borderTop: '1px solid #ccc'}}>
         <h2 style={{ margin: '0' }}>Password & Security</h2>
        <div style={{ flex: 1, backgroundColor: '#ffffff', marginTop: '20px', padding: '20px', borderRadius: '20px', border: '1px solid #ccc' }}>
          {/* Authentication Options */}
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ margin: '0' }}>Authentication Options</h2>
            <i className="fa fa-pencil"></i>
          </div>
          {/* Password Section */}
          <div>
            <h2  style={{ fontSize:'20px', fontFamily:'Poppins',fontWeight:'600' }}>  <i className="fa fa-pencil"></i>  Password</h2>
            <p style={{ margin: '20px' }}><b>Password has been set</b></p>
            <p style={{ margin: '20px' }}>Choose a strong unique password that is at least 8 character long</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
	);
};

export default CandidateSecurity;
