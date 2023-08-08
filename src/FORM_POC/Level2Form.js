import React from "react";
import { useFormik } from "formik";

export default function Level2Form() {
  const formik = useFormik({
    initialValues: {
      //name should be same as form inputs
      email: "",
      password: "",
      terms: true,
    },
    onSubmit:(values)=>{
        alert(JSON.stringify(values))
    }
  });

  return (
    <>
      <h4 className="bg-success">Basic Formik Library Use Case</h4>
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
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
