import React from 'react'


import { useForm, Controller } from 'react-hook-form';

interface FormData {
    title: string;
    city: string;
    country: string;
    Description: string;
    startMonth: string;
    startYear: string;
  }

const ProfileOverview = () => {
    const { handleSubmit, control } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data); // You can handle form submission logic here
  };
  

  return (
    <div>
      <div style={{maxWidth:'100%', width:'90%',margin: '0 auto'}}>
        <h1 className="text-3xl font-bold mb-6 font-normal leading-57 tracking-0 text-left" style={{ color: '#111827', fontSize:'30px', fontFamily:'Poppins', fontWeight:'600' }}>
         Profile Overview
        </h1>
        <h1 className="text-3xl font-bold mb-6 font-normal leading-57 tracking-0 text-left" style={{ color: '#111827', fontSize:'16px', fontFamily:'Poppins', fontWeight:'normal' }}>
          Use this space to show client that you have the skills and experience they're looking for.
        </h1>
        <div style={{maxWidth:'100%', width:'90%',margin: '0 auto'}}>
        <ul  style={{ color: '#131313', fontSize: '16px', fontFamily: 'poppins', fontWeight: 'normal', listStyleType: 'disc' }}>
          <li className="text-3xl font-bold mb-6 font-normal leading-57 tracking-0 text-left" style={{ color: '#131313', fontSize:'16px', fontFamily:'Poppins', fontWeight:'normal'}}>
            Describe your strengths and skills.
          </li>
          <li className="text-3xl font-bold mb-6 font-normal leading-57 tracking-0 text-left" style={{ color: '#131313', fontSize:'16px', fontFamily:'Poppins', fontWeight:'normal'}}>
           Highlight projects, achievement and accomplishment.
          </li>
          <li className="text-3xl font-bold mb-6 font-normal leading-57 tracking-0 text-left" style={{ color: '#131313', fontSize:'16px', fontFamily:'Poppins', fontWeight:'normal'}}>
           Keep it short and make sure it's error free
          </li>
      </ul>
      </div>


      </div>
      <div className="p-6 bg-white  max-w-70 mx-auto mt-2 lg:pl-8 xl:pl-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 mt-9">
            <label htmlFor="title" className="block text-sm font-semibold text-gray-600" style={{ color: '#131313', fontSize:'16px', fontFamily:'Poppins', fontWeight:'normal'}}>
            Description (Optional)
            </label>
            <Controller
              name="Description"
              control={control}
              rules={{ required: 'Message is required' }}
              render={({ field, fieldState }) => (
                <>
                  <input
                    {...field}
                    type="text"
                    id="title"
                    style={{ height: '178px', border: '1px solid #A0C4C0' }}
                    className={`mt-1 p-2 w-full border rounded ${fieldState.error ? 'border-red-500' : '#A0C4C0'}`}
                  />
                  {fieldState.error && <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>}
                </>
              )}
            />
          </div>
          <div className="mt-4 flex justify-end space-x-4">
            <p style={{color:'#939596', fontWeight:'600'}}>
            5000 Characters
            </p>
          </div>

          <div className="mt-4 flex justify-end space-x-4">
          <button
              type="submit"
              style={{
                color: '#155357',
                fontSize: '16px',
                background: '',
                borderRadius: '25px',
                width: '116px',
                height: '44px',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                color: '#FFFFFF',
                fontSize: '16px',
                background: 'linear-gradient(59deg, #2D3636 0%, #155357 100%)',
                borderRadius: '25px',
                width: '116px',
                height: '44px',
              }}
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileOverview;
