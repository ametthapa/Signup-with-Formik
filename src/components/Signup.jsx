import { Formik, Form } from "formik";
import TextField from "./TextField";

const Signup = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
    >
      {(formik) => (
        <div>
          <div className="font-bold text-3xl ">Sign up</div>
          {console.log(formik.values)}
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="E-mail" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-semibold mt-5 py-2 px-4 rounded"
              type="submit"
            >
              Register
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold mt-5 ml-4 py-2 px-4 rounded"
              type="reset"
            >
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default Signup;
