import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="pt-3 font-semibold">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`ml-2 outline-initial focus:outline-final p-1 mt-2 w-3/4 block ${
          meta.touched && meta.error && "is-invalid"
        } `}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-500 font-semibold"
      />
    </div>
  );
};

export default TextField;
