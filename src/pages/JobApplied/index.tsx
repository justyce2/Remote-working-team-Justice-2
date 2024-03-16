import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Import the tick icon

const JobApplied = () => {
  return (
    <div style={{  display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        
        }}>

<div style={{
        position: 'absolute',
        top: '147px',
        backgroundColor: '#111827',
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <FaCheckCircle style={{ color: 'white', fontSize: '2.5rem' }} />
      </div>

      <div style={{ textAlign: 'center'}}>
        <h1 style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:'30px', color:'#111827',  justifyContent: 'center',
        alignItems: 'center',}}>Application sent successfully</h1>
        <h1 style={{fontFamily:'Poppins', fontSize:'18px', color:'#111827', marginTop:'28px'}}>We have sent in your application. Please keep an eye on your email and Remoting.work Messenger</h1>
      </div>
    </div>
  );
};

export default JobApplied;
