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

const EditEmployment = () => {
    const { handleSubmit, control } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data); // You can handle form submission logic here
  };
  

  return (
    <div>
    <div className="max-w-70 mx-auto mt-8 lg:pl-8 lg:pr-8 xl:pl-16">
      <h1 className="text-3xl font-bold mb-6 font-normal leading-57 tracking-0 text-left" style={{ color: '#111827' }}>
          Edit employment
      </h1>
  </div>
  <div className="p-6 bg-white  max-w-70 mx-auto mt-2 lg:pl-8 xl:pl-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold text-gray-600">
            Company
          </label>
          <Controller
            name="title"
            control={control}
            rules={{ required: 'company name is required' }}
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  type="text"
                  id="title"
                  style={{ border: '1px solid #A0C4C0' }}
                  className={`mt-1 p-2 w-full border rounded ${fieldState.error ? 'border-red-500' : '#A0C4C0'}`}
                />
                {fieldState.error && <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>}
              </>
            )}
          />
        </div>
        <div className="flex space-x-4 mt-9">
          <div className="flex-1 mb-4">
              <label htmlFor="city" className="block text-sm font-semibold text-gray-600">
                  City
              </label>
              <Controller
                  name="city"
                  control={control}
                  rules={{ required: 'City is required' }}
                      render={({ field, fieldState }) => (
                  <>
                      <input
                      {...field}
                      type="text"
                      id="city"
                      style={{ border: '1px solid #A0C4C0' }}
                      className={`mt-1 p-2 w-full border rounded ${fieldState.error ? 'border-red-500' : '#A0C4C0'}`}
                       />
                      {fieldState.error && <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>}
                  </>
                  )}
              />
          </div>
          <div className="flex-1 mb-4">
              <label htmlFor="country" className="block text-sm font-semibold text-gray-600">
                  Country
              </label>
              <Controller
                  name="country"
                  control={control}
                  rules={{ required: 'Country is required' }}
                  render={({ field, fieldState }) => (
              <>
                  <input
                  {...field}
                  type="text"
                  id="country"
                  style={{ border: '1px solid #A0C4C0' }}
                  className={`mt-1 p-2 w-full border rounded ${fieldState.error ? 'border-red-500' : '#A0C4C0'}`}
                  />
                  {fieldState.error && <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>}
              </>
              )}
          />
      </div>
  </div>
  <div className="mb-4 mt-9">
          <label htmlFor="title" className="block text-sm font-semibold text-gray-600">
            Title
          </label>
          <Controller
            name="Description"
            control={control}
            rules={{ required: 'Job description is required' }}
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
        <div className="flex space-x-4 mt-9">
<div className="flex-1 mb-4">
  <label htmlFor="startMonth" className="block text-sm font-semibold text-gray-600">
  Month
  </label>
  <Controller
    name="startMonth"
    control={control}
    rules={{ required: 'Start Month is required' }}
    render={({ field, fieldState }) => (
      <>
        <select
          {...field}
          id="startMonth"
          style={{ border: '1px solid #A0C4C0' }}
          className={`mt-1 p-2 w-full border rounded ${fieldState.error ? 'border-red-500' : '#A0C4C0'}`}
        >
          <option value="" disabled>Select a month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          {/* Add other months as needed */}
        </select>
        {fieldState.error && <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>}
      </>
    )}
  />
</div>

<div className="flex-1 mb-4">
  <label htmlFor="startYear" className="block text-sm font-semibold text-gray-600">
    Year
  </label>
  <Controller
    name="startYear"
    control={control}
    rules={{ required: 'Start Year is required' }}
    render={({ field, fieldState }) => (
      <>
        <select
          {...field}
          id="startYear"
          style={{ border: '1px solid #A0C4C0' }}
          className={`mt-1 p-2 w-full border rounded ${fieldState.error ? 'border-red-500' : '#A0C4C0'}`}
        >
          <option value="" disabled>Select a year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          {/* Add other years as needed */}
        </select>
        {fieldState.error && <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>}
      </>
    )}
  />
</div>
</div>
<div className="flex space-x-4 mt-9">
<div className="flex-1 mb-4">
  <label htmlFor="startMonth" className="block text-sm font-semibold text-gray-600">
  Through
  </label>
  <Controller
    name="startMonth"
    control={control}
    rules={{ required: 'Start Month is required' }}
    render={({ field, fieldState }) => (
      <>
        <select
          {...field}
          id="startMonth"
          style={{ border: '1px solid #A0C4C0' }}
          className={`mt-1 p-2 w-full border rounded ${fieldState.error ? 'border-red-500' : '#A0C4C0'}`}
        >
          <option value="" disabled>Select a month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          {/* Add other months as needed */}
        </select>
        {fieldState.error && <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>}
      </>
    )}
  />
</div>

<div className="flex-1 mb-4">
  <label htmlFor="startYear" className="block text-sm font-semibold text-gray-600">
  .
  </label>
  <Controller
    name="startYear"
    control={control}
    rules={{ required: 'Start Year is required' }}
    render={({ field, fieldState }) => (
      <>
        <select
          {...field}
          id="startYear"
          style={{ border: '1px solid #A0C4C0' }}
          className={`mt-1 p-2 w-full border rounded ${fieldState.error ? 'border-red-500' : '#A0C4C0'}`}
        >
          <option value="" disabled>Select a year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          {/* Add other years as needed */}
        </select>
        {fieldState.error && <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>}
      </>
    )}
  />
</div>
</div>
<div className="mb-4 mt-9">
          <label htmlFor="title" className="block text-sm font-semibold text-gray-600">
            Description (optional)
          </label>
          <Controller
            name="Description"
            control={control}
            rules={{ required: 'Job description is required' }}
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
  style={{color:'#155357', fontSize:'16px'}}
  className="bg-white"
>
 Cancel
</button>
<button
type="submit"
style={{ color: '#FFFFFF', fontSize: '16px', background: 'linear-gradient(59deg, #2D3636 0%, #155357 100%)', borderRadius:'25px', width:'116px', height:'44px' }}
>
Save
</button>

</div>

      </form>
    </div>
  </div>
  );
};

export default EditEmployment;
