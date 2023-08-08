/* eslint-disable import/no-anonymous-default-export */
//Using Formik Yup Componenets instead of manually all

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export default function () {
  return (
    <>
      <Formik
        initialValues={{ username: "", password: "", city: "" }}
        validationSchema={yup.object({
          username: yup
            .string()
            .min(4, "Name too short")
            .max(7, "name too long")
            .required("UserName Required"),
          password: yup
            .string()
            .min(8, " At least 8 Digit")
            .trim()
            .required(" Password Required"),
          city: yup
            .string()
            .required("City is required")
            .notOneOf([""], "Please select a valid city"),
        })}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        {/* //get props in that form state will be there */}
        {(props) => (
          <Form>
            {
              <dd>
                <dt>UserName :</dt>
                <dd>
                  <Field
                    type="text"
                    name="username"
                    onKeyUp={(e) => {
                      // Custom logic
                      console.log("Key up event!", e.target.value);

                      // Use Formik's props to manually set field value, if needed
                      props.setFieldValue(
                        "username",
                        e.target.value.toUpperCase()
                      );
                    }}
                  ></Field>
                </dd>
                <dd className="text-danger">
                  <ErrorMessage name="username"></ErrorMessage>
                </dd>
                <dt>Password</dt>
                <dd>
                  <Field type="password" name="password"></Field>
                </dd>
                <dd className="text-danger">
                  <ErrorMessage name="password"></ErrorMessage>
                </dd>
                <dt>City</dt>
                <dd>
                  <Field
                    as="select"
                    name="city"
                    //   onChange={(e) => alert(e.target.value)}
                  >
                    <option value="">Choose a valid city</option>
                    <option value={"Mumbai"}>Mumbai</option>
                    <option value={"Pune"}>Pune</option>
                    <option value={"Dubai"}>Dubai </option>
                  </Field>
                </dd>
                <dd className="text-danger">
                  <ErrorMessage name="city"></ErrorMessage>
                </dd>
                <dd>
                  <button disabled={props.isValid ? false : true}>
                    Register
                  </button>
                </dd>
              </dd>
            }
          </Form>
        )}
      </Formik>
    </>
  );
}
