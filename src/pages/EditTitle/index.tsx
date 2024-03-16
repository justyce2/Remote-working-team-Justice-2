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

const EditTitle = () => {
    const { handleSubmit, control } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data); // You can handle form submission logic here
  };
  

  return (
    <div>
      <div style={{maxWidth:'100%', width:'90%',margin: '0 auto', marginTop:'59px'}}>
        <h1 className="text-3xl font-bold mb-6 font-normal leading-57 tracking-0 text-left" style={{ color: '#111827', fontSize:'30px', fontFamily:'Poppins', fontWeight:'600' }}>
        Edit your title
        </h1>
        <h1 className="text-3xl font-bold mb-6 font-normal leading-57 tracking-0 text-left" style={{ color: '#111827', fontSize:'16px', fontFamily:'Poppins', fontWeight:'normal' }}>
        Enter a single sentence description of your professional skills/experience (e.g. Expert Web Designer with Ajax experience)
        </h1>
      </div>
      <div className="p-6 bg-white  max-w-70 mx-auto mt-2 lg:pl-8 xl:pl-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 mt-9">
            <label htmlFor="title" className="block text-sm font-semibold text-gray-600" style={{ color: '#131313', fontSize:'16px', fontFamily:'Poppins', fontWeight:'normal'}}>
            Your title
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
                    style={{  border: '1px solid #A0C4C0' }}
                    className={`mt-1 p-2 w-full border rounded ${fieldState.error ? 'border-red-500' : '#A0C4C0'}`}
                  />
                  {fieldState.error && <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>}
                </>
              )}
            />
          </div>

          <div className=" flex justify-end space-x-4" style={{marginTop:'101px'}}>
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

export default EditTitle;
