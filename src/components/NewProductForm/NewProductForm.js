import React, { Component } from "react";
import { v4 as uuid } from "uuid";

import Input from "../Input";
import Button from "../Button";

function addProductDetails(product) {
  return {
    id: uuid(),
    ...product,
    quantity: 0,
    isFavorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    votes: {
      upVotes: {
        upperLimit: 10,
        currentValue: 0,
      },
      downVotes: {
        lowerLimit: 10,
        currentValue: 0,
      },
    },
    author: {
      id: uuid(),
      ...product.author,
    },
  };
}

class NewProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      price: 0,
      img: "",
      shortDescription: "",
      longDescription: "",
      unitsInStock: 0,
      author: {
        firstName: "",
        lastName: "",
        email: "",
      },
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { saveNewProduct } = this.props;
    const { errors: _errors, ...productData } = this.state;
    const newProduct = addProductDetails(productData);
    saveNewProduct(newProduct);
  }

  handleTextChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleNumberChange(event) {
    this.setState({
      [event.target.name]: Number(event.target.value),
    });
  }

  handleAuthorChange(event) {
    this.setState((prevState) => ({
      author: {
        ...prevState.author,
        [event.target.name]: event.target.value,
      },
    }));
  }

  render() {
    const {
      title,
      price,
      img,
      shortDescription,
      longDescription,
      unitsInStock,
      author,
    } = this.state;

    const { toggleNewProductForm } = this.props;

    return (
      <div className="row mb-4 mt-2">
        <div className="col col-10">
          <div className="row justify-content-between">
            <div className="col col-8">
              <h2>New product</h2>
            </div>
            <div className="col col-4 ml-auto d-flex justify-content-end">
              <Button onClick={toggleNewProductForm}>Close form</Button>
            </div>
          </div>
          <hr />
        </div>
        <div className="col col-10">
          <form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              label="Product Title"
              id="title"
              name="title"
              value={title}
              onChange={this.handleTextChange}
            />
            <Input
              type="number"
              label="Product Price"
              id="price"
              name="price"
              value={price}
              onChange={this.handleNumberChange}
            />
            <Input
              type="text"
              label="Product Image"
              id="img"
              name="img"
              value={img}
              onChange={this.handleTextChange}
            />
            <Input
              type="text"
              label="Product Short Description"
              id="shortDescription"
              name="shortDescription"
              value={shortDescription}
              handleChange={this.handleTextChange}
            />
            <Input
              type="text"
              label="Product Long Description"
              id="longDescription"
              name="longDescription"
              value={longDescription}
              handleChange={this.handleTextChange}
            />
            <Input
              type="number"
              label="Product Units in Stock"
              id="unitsInStock"
              name="unitsInStock"
              value={unitsInStock}
              handleChange={this.handleNumberChange}
            />
            <Input
              type="text"
              label="Product Author First Name"
              id="firstName"
              name="firstName"
              value={author.firstName}
              handleChange={this.handleAuthorChange}
            />
            <Input
              type="text"
              label="Product Author Last Name"
              id="lastName"
              name="lastName"
              value={author.lastName}
              handleChange={this.handleAuthorChange}
            />
            <Input
              type="text"
              label="Product Author Email"
              id="email"
              name="email"
              value={author.email}
              handleChange={this.handleAuthorChange}
            />
            <Button submitButton block>
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewProductForm;
