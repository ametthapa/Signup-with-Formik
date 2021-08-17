import { ErrorMessage, useField } from "formik";

const RadioButtonField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} autoComplete="off" />
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-500 font-semibold"
      />
    </div>
  );
};

export default RadioButtonField;
