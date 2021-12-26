import './editedProduct.css';
import Modal from '../modal/modal';
import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

function EditedProduct(props) {
  const { currentProduct, setCurrentProduct, updatedProduct } = props
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    updatedProduct(currentProduct)
  }, [currentProduct]);

  const onSubmit = (values) => {
    console.log(values)
    setCurrentProduct({
      ...currentProduct,
      name: values.name,
      description: values.description,
      price: values.price
    })
    setShowModal(!showModal)
  }
  const validationSchema = yup.object().shape({
    name: yup.string().required('Required'),
    description: yup.string(),
    price: yup.number().min(1).required('Required'),
  });

  const renderError = (message) => <p className="errorMessage">{message}</p>;

  return (

    <div id="editedProduct" >
      <div style={{ width: ' 80%', margin: 'auto' }}>
        <button id="close" onClick={(e) => { setCurrentProduct() }}>X</button>
        <h2 id="titleProduct">{currentProduct.name} details</h2>

        <img id="imgProduct" src={currentProduct.thumbnailImage} />
        <Formik
          isValid
          enableReinitialize
          initialValues={{ name: currentProduct.name, description: currentProduct.description, price: currentProduct.price }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            const { isValid } = formik;
            return (
              <Form>
                <label for="name">Name</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" render={renderError} />
                <label for="description">Description</label>
                <Field type="text" name="description" />
                <ErrorMessage name="description" />
                <label for="price">Price</label>
                <Field type="number" name="price" />
                <ErrorMessage name="price" render={renderError} />
                <button id="save" type="submit" disabled={!isValid} >
                  Submit
                </button>
              </Form>
            )
          }}
        </Formik>

      </div>
      {showModal && <Modal show={showModal} setShowModal={setShowModal} setCurrentProduct={setCurrentProduct} name={currentProduct.name} />}
    </div>


  );
}

export default EditedProduct;
