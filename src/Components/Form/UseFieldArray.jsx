import React from 'react';
import { useForm, useFieldArray, useWatch } from 'react-hook-form';

export default function UseFieldArray() {
  const { register, control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });
  return (
    <>
      <h1>UseFieldArray</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        {fields.map((field, index) => {
          return (
            <div key={field.id} className={`container`}>
              <input {...register(`items[${index}].name`)} />
              <select {...register(`items[${index}].type`)}>
                <option value="">Select</option>
                <option value="1">Item 1</option>
                <option value="2">Item 2</option>
              </select>
              <input {...register(`items[${index}].amount`)} type={'number'} />
              <button
                type={'button'}
                onClick={() => {
                  remove(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <div className={`container`}>
          <input type="button" value="Append" onClick={() => append({})} />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
}
