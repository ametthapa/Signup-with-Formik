import { Formik, Form } from "formik";
import TextField from "./TextField";
import RadioButtonField from "./TextField";
import * as Yup from "yup";

const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 character or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters")
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is Required"),
    gender: Yup.string().required("Gender is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        hobbies: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
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
            <RadioButtonField
              label="Gender"
              name="gender"
              type="radio"
              value="male"
            />
            Male
            <RadioButtonField name="gender" type="radio" value="female" />
            Female
            <RadioButtonField
              label="Hobbies"
              name="hobbies"
              type="checkbox"
              value="football"
            />
            Football
            <RadioButtonField name="hobbies" type="checkbox" value="baseball" />
            Baseball
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
