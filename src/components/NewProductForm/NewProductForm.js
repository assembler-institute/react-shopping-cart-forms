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
    this.handleChange = this.handleChange.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
  }

  handleChange(event) {
  
    this.setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const productData = this.state;
    const { saveNewProduct } = this.props;

    const data = addProductDetails(productData);

    saveNewProduct(data);
  }

  handleAuthor(event) {
    this.setState((prevState) => ({
      ...prevState,
      author:{
        ...prevState.author,
        [event.target.name]: event.target.value,
      }
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
      author
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
              label="Product title"
              id="title"
              name="title"
              value={title}
              handleChange={this.handleChange}
            />

            <Input
              type="number"
              label="Price"
              id="price"
              name="price"
              value={price}
              handleChange={this.handleChange}
            />

            <Input
              type="text"
              label="Img"
              id="img"
              name="img"
              value={img}
              handleChange={this.handleChange}
            />

            <Input
              type="text"
              label="Short description"
              id="shortDescription"
              name="shortDescription"
              value={shortDescription}
              handleChange={this.handleChange}
            />

            <Input
              type="text"
              label="Long description"
              id="longDescription"
              name="longDescription"
              value={longDescription}
              handleChange={this.handleChange}
            />

            <Input
              type="text"
              label="Units in stock"
              id="unitsInStock"
              name="unitsInStock"
              value={unitsInStock}
              handleChange={this.handleChange}
            />

            <Input
              type="text"
              label="Author firstname"
              id="firstName"
              name="firstName"
              value={author.firstName}
              handleChange={this.handleAuthor}
            />

            <Input
              type="text"
              label="Autor lastname"
              id="lastName"
              name="lastName"
              value={author.lastName}
              handleChange={this.handleAuthor}
            />

            <Input
              type="email"
              label="Author email"
              id="email"
              name="email"
              value={author.email}
              handleChange={this.handleAuthor}
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
