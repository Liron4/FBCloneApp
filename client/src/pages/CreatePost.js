import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

function CreatePost() {
  const initialValues = {
    title: '',
    postText: '',
    username: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().required().min(5).max(20),
  }); // it does not prevent numberic inputs

  let navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/posts', data).then(() => {
      navigate("/");
    });
  };



  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title:</label>
          <ErrorMessage name="title" component="span" />
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="(Ex. Title...)"
          />

          <label>Post:</label>
          <ErrorMessage name="postText" component="span" />
          <Field
            id="inputCreatePost"
            name="postText"
            placeholder="(Ex. Post...)"
          />

          <label>Username:</label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. John123...)"
          />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}
export default CreatePost;
