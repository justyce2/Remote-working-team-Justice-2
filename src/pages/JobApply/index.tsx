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

const JobApply = () => {
    const { handleSubmit, control } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data); // You can handle form submission logic here
  };
  

  return (
    <div>
      <div className="max-w-70 mx-auto mt-8 lg:pl-8 lg:pr-8 xl:pl-16">
        <h1 className="text-3xl font-bold mb-6 font-normal leading-57 tracking-0 text-left" style={{ color: '#111827' }}>
          Innovative Home decor product designs ideas
        </h1>
        <h1 className="text-3xl font-bold mb-6 font-normal leading-57 tracking-0 text-left" style={{ color: '#111827' }}>
          Employer: <span className="text-3xl font-bold underline">Eric Smith</span>
        </h1>
      </div>
      <div className="p-6 bg-white  max-w-70 mx-auto mt-2 lg:pl-8 xl:pl-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 mt-9">
            <label htmlFor="title" className="block text-sm font-semibold text-gray-600">
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

export default JobApply;
