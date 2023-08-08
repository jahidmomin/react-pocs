// Validation through Formik
import React from "react";
import { useFormik } from "formik";

export default function Level3Form() {
  const formik = useFormik({
    initialValues: {
      //name should be same as form inputs
      email: "",
      password: "",
      terms: true,
    },
    validate: (values) => {
      let errors = {};

      if (values.email == "") {
        errors.email = "Email Sould not be empty";
      }

      if (values.email.startsWith("jahid", 0)) {
        errors.email = "Email Should Starts With jahid";
      }

      if (values.password.length < 6 && values.password.length > 1) {
        errors.password = "Password should be less than 6 & greater than 1";
      }

      if (!values.terms) {
        errors.terms = " Please Accept terms & Conditions";
      }

      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <>
      <h4 className="bg-success">Basic Formik Library With Validations</h4>
      {/* bind event of formik . so internally formik will submit and call there handler to store valyes in initial json which we givn */}
      <form onSubmit={formik.handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            name="email"
            value={formik.values.email} //to apply the value
            onChange={formik.handleChange} // to bind the object and field
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
          <p className="text-danger">{formik.errors.email}</p>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            class="form-control"
            name="password"
            id="exampleInputPassword1"
          />
          <p className="text-danger">{formik.errors.password}</p>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            name="terms"
            checked={formik.values.terms}
            onChange={formik.handleChange}
            id="flexSwitchCheckChecked"
          />
          <label class="form-check-label" for="flexSwitchCheckChecked">
            Checked switch checkbox input
          </label>
          <p className="text-danger">{formik.errors.terms}</p>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
