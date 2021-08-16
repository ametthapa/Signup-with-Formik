import { useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="pt-4 font-semibold">
      <label htmlFor={field.name}>{label}</label>
      <input
        className="ml-2 outline-black p-1 mt-3 w-3/4 block"
        {...field}
        {...props}
        autoComplete="off"
      />
    </div>
  );
};

export default TextField;
