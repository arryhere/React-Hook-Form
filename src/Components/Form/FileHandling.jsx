import React from 'react';
import { useForm } from 'react-hook-form';

export default function FileHandling() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit(onSubmit)} className="container">
          <input
            multiple  // for multiple input
            type="file"
            id="image"
            {...register('image', {
              required: 'Image is required',
            })}
          />
          <p className="error-msg">{errors?.image?.message}</p>

          <input type="submit" defaultValue={'Submit'} className="btn" />
          <input
            onClick={() => reset()}
            type="button"
            defaultValue={'Reset'}
            className="btn"
          />
        </form>
      </section>
    </>
  );
}
