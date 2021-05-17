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
    this.handleAuthorLastNameInputChange = this.handleAuthorLastNameInputChange.bind(
      this,
    );
    this.handleAuthorEmailInputChange = this.handleAuthorEmailInputChange.bind(
      this,
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const { saveNewProduct } = this.props;
    const { errors, ...productData } = this.state;
    const newProduct = addProductDetails(productData);
    saveNewProduct(newProduct);
  }

  handleTitleInputChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handlePriceInputChange(event) {
    this.setState({
      price: Number(event.target.value),
    });
  }

  handleImgInputChange(event) {
    this.setState({
      img: event.target.value,
    });
  }

  handleShortDescriptionInputChange(event) {
    this.setState({
      shortDescription: event.target.value,
    });
  }

  handleLongDescriptionInputChange(event) {
    this.setState({
      longDescription: event.target.value,
    });
  }

  handleUnitsInStockInputChange(event) {
    this.setState({
      unitsInStock: event.target.value,
    });
  }

  handleAuthorFirstNameInputChange(event) {
    this.setState((prevAuthor) => ({
      author: {
        ...prevAuthor.author,
        firstName: event.target.value,
      },
    }));
  }

  handleAuthorLastNameInputChange(event) {
    this.setState((prevAuthor) => ({
      author: {
        ...prevAuthor.author,
        lastName: event.target.value,
      },
    }));
  }

  handleAuthorEmailInputChange(event) {
    this.setState((prevAuthor) => ({
      author: {
        ...prevAuthor.author,
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
              id="title"
              value={title}
              placeholder="Product title"
              handleChange={this.handleTitleInputChange}
              errorMessage={errors.title}
            />
            <Input
              type="number"
              label="Product price"
              id="price"
              value={price}
              placeholder="Product price"
              handleChange={this.handlePriceInputChange}
              errorMessage={errors.price}
            />
            <Input
              type="text"
              label="Product image"
              id="img"
              value={img}
              placeholder="Product image"
              handleChange={this.handleImgInputChange}
              errorMessage={errors.img}
            />
            <Input
              type="text"
              label="Product short description"
              id="shortDescription"
              value={shortDescription}
              placeholder="Product short description"
              handleChange={this.handleShortDescriptionInputChange}
              errorMessage={errors.shortDescription}
            />
            <Input
              type="text"
              label="Product long description"
              id="longDescription"
              value={longDescription}
              placeholder="Product long description"
              handleChange={this.handleLongDescriptionInputChange}
              errorMessage={errors.longDescription}
            />
            <Input
              type="number"
              label="Unit in stock"
              id="unitInStock"
              value={unitsInStock}
              placeholder="Unit in stock"
              handleChange={this.handleUnitsInStockInputChange}
              errorMessage={errors.unitsInStock}
            />
            <Input
              type="text"
              label="Author first name"
              id="firstName"
              value={author.firstName}
              placeholder="Author first name"
              handleChange={this.handleAuthorFirstNameInputChange}
              errorMessage={errors.firstName}
            />
            <Input
              type="text"
              label="Author last name"
              id="lastName"
              value={author.lastName}
              placeholder="Author last name"
              handleChange={this.handleAuthorLastNameInputChange}
              errorMessage={errors.lastName}
            />
            <Input
              type="text"
              label="Author email"
              id="lastName"
              value={author.email}
              placeholder="Author email"
              handleChange={this.handleAuthorEmailInputChange}
              errorMessage={errors.email}
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
