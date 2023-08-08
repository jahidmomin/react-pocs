// Level4

// Validation through Formik
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export default function YupValidationsForm() {
  const formik = useFormik({
    initialValues: {
      //name should be same as form inputs
      email: "",
      password: "",
      terms: true,
    },

    //we need to mentioned each and every schema for validation
    //of inputs name should be same in yup object and error
    validationSchema: yup.object({
      email: yup.string().required("Email Mandotory").email("Invalid Email"),
      password: yup
        .string()
        .required("password required")
        .min(6, "min 6 letters")
        .max(8, "max 8 letters"),
    }),
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
            //no need to mentioned name //this rest operator
            //use full schemass which binds to email filed and it will
            //use as name and other validation
            {...formik.getFieldProps("email")}
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
            {...formik.getFieldProps("password")}
            class="form-control"
            id="exampleInputPassword1"
          />
          <p className="text-danger">{formik.errors.password}</p>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            {...formik.getFieldProps("terms")}
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
