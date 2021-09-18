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
    this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
    this.handlePriceInputChange = this.handlePriceInputChange.bind(this);
    this.handleImgInputChange = this.handleImgInputChange.bind(this);
    this.handleShortDescriptionInputChange = this.handleShortDescriptionInputChange.bind(
      this,
    );
    this.handleLongDescriptionInputChange = this.handleLongDescriptionInputChange.bind(
      this,
    );
    this.handleUnitsInStockInputChange = this.handleUnitsInStockInputChange.bind(
      this,
    );
    this.handleAuthorFirstNameInputChange = this.handleAuthorFirstNameInputChange.bind(
      this,
    );
    this.handleAuthorLastNameInputChange = this.handleAuthorEmailInputChange.bind(
      this,
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const { errors: _errors, ...productData } = this.state;
    const { saveNewProduct } = this.props;
    const newProduct = addProductDetails(productData);
    saveNewProduct(newProduct);
  }

  handleTitleInputChange(event) {
    this.setState({ title: event.target.value });
  }

  handlePriceInputChange(event) {
    this.setState({ price: Number(event.target.value) });
  }

  handleImgInputChange(event) {
    this.setState({ img: event.target.value });
  }

  handleShortDescriptionInputChange(event) {
    this.setState({ shortDescription: event.target.value });
  }

  handleLongDescriptionInputChange(event) {
    this.setState({ longDescription: event.target.value });
  }

  handleUnitsInStockInputChange(event) {
    this.setState({ unitsInStock: Number(event.target.value) });
  }

  handleAuthorFirstNameInputChange(event) {
    this.setState((prevState) => ({
      author: {
        ...prevState.author,
        firstName: event.target.value,
      },
    }));
  }

  handleAuthorLastNameInputChange(event) {
    this.setState((prevState) => ({
      author: {
        ...prevState.author,
        lastName: event.target.value,
      },
    }));
  }

  handleAuthorEmailInputChange(event) {
    this.setState((prevState) => ({
      author: {
        ...prevState.author,
        email: event.target.value,
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
      errors,
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
              handleChange={this.handleTitleInputChange}
              errorMessage={errors.title}
              value={title}
              id="title"
            />
            <Input
              type="number"
              label="Product price"
              handleChange={this.handlePriceInputChange}
              errorMessage={errors.price}
              value={price}
              id="price"
            />
            <Input
              type="text"
              label="Product image"
              handleChange={this.handleImgInputChange}
              errorMessage={errors.img}
              value={img}
              id="img"
            />
            <Input
              type="text"
              label="Short Description"
              handleChange={this.handleShortDescriptionInputChange}
              errorMessage={errors.shortDescription}
              value={shortDescription}
              id="shortDescription"
            />
            <Input
              type="text"
              label="Long Description"
              handleChange={this.handleLongDescriptionInputChange}
              errorMessage={errors.longDescription}
              value={longDescription}
              id="longDescription"
            />
            <Input
              type="text"
              label="Units in Stock"
              handleChange={this.handleUnitsInStockInputChange}
              errorMessage={errors.unitsInStock}
              value={unitsInStock}
              id="unitsInStock"
            />
            <Input
              type="text"
              label="Author Name"
              handleChange={this.handleAuthorFirstNameInputChange}
              errorMessage={errors.authorFirstName}
              value={author.firstName}
              id="authorFirstName"
            />
            <Input
              type="text"
              label="Author Lastname"
              handleChange={this.handleAuthorLastNameInputChange}
              errorMessage={errors.authorLastName}
              value={author.lastName}
              id="authorLastName"
            />
            <Input
              type="text"
              label="Author Email"
              handleChange={this.handleAuthorEmailInputChange}
              errorMessage={errors.authorEmail}
              value={author.email}
              id="authorEmail"
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
