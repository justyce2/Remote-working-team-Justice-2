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

const InviteJob = () => {
    const { handleSubmit, control } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data); // You can handle form submission logic here
  };
  

  return (
    <div>
      <div className="max-w-70 mx-auto mt-8 lg:pl-8 lg:pr-8 xl:pl-16">
        <h1 className="text-3xl font-bold mb-6 font-normal leading-57 tracking-0 text-left" style={{ color: '#111827', fontFamily:'poppins',fontSize:'30px', fontWeight:'500' }}>
        Invite to job
        </h1>
        <div className="relative flex items-center">
      <div className="rounded-full overflow-hidden w-16 h-16 mr-4">
        {/* Add your profile picture here */}
        <img
          src="https://example.com/profile-picture.jpg"  // Replace with your profile picture URL
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-2 font-normal leading-57 tracking-0 text-left" style={{ color: '#111827',fontFamily:'poppins', fontSize:'16px',fontWeight:'400' }}>
          Elizabeth Dapps <br></br> <span className="text-3xl font-bold mb-2 font-normal leading-57 tracking-0 text-left" style={{fontFamily:'poppins', fontSize:'20px', fontWeight:'400'}}>Ventures X coworking</span>
        </h1>
      </div>
    </div>
    </div>
    <div className="p-6 bg-white  max-w-70 mx-auto mt-2 lg:pl-8 xl:pl-16">
        <form onSubmit={handleSubmit(onSubmit)}>
<div className="mb-4 mt-9">
            <label htmlFor="title" className="block text-sm font-semibold text-gray-600" style={{fontFamily:"poppins", fontWeight:'600', fontSize:'18px'}}>
              Message
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
  <button
  type="submit"
  style={{ color: '#FFFFFF', fontFamily:'poppins', fontSize: '16px', background: 'linear-gradient(59deg, #2D3636 0%, #155357 100%)', borderRadius:'25px', width:'178px', height:'44px', fontWeight:'500' }}
>
  Contact BPO
</button>

</div>

        </form>
      </div>
    </div>
  );
};

export default InviteJob;
