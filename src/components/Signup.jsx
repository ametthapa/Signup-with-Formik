import { Formik, Form } from "formik";

const Signup = () => {
  return (
    <Formik>
      {(formik) => (
        <div>
          <div className="font-bold text-3xl ">Sign up</div>
        </div>
      )}
    </Formik>
  );
};
export default Signup;
