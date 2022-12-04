import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const fileSchema = yup.object().shape({
  image: yup
    .mixed()
    .required('Provide a valid image')
    .test('size', 'File is too large', (value) => {
      return value && value[0].size <= 2000000;
    })
    .test('type', 'File type not supported (png only)', (value) => {
      return value && value[0].type === 'image/png';
    }),
});

export default function FileHandling() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(fileSchema),
  });

  const onSubmit = async (data) => {
    console.log({ data });
  };
  const onError = async () => {
    console.log({ errors });
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit(onSubmit, onError)} className="container">
          <input
            multiple // for multiple input
            type="file"
            {...register('image')}
          />
          <p className="error-msg">{errors?.image?.message}</p>

          <input type="submit" defaultValue={'Submit'} className="btn" />
          <input onClick={() => reset()} type="button" value={'Reset'} className="btn" />
        </form>
      </section>
    </>
  );
}
