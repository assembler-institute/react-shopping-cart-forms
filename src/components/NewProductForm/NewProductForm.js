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
    const { errors: _errors, ...productData } = this.state;
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
      unitsInStock: Number(event.target.value),
    });
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
              label="Product image url"
              id="image"
              value={img}
              placeholder="Product image url"
              handleChange={this.handleImgInputChange}
              errorMessage={errors.img}
            />
            <Input
              type="text"
              label="Short description"
              id="shortDescription"
              value={shortDescription}
              placeholder="Short description"
              handleChange={this.handleShortDescriptionInputChange}
              errorMessage={errors.shortDescription}
            />
            <Input
              type="text"
              label="Long description"
              id="longDescription"
              value={longDescription}
              placeholder="Long description"
              handleChange={this.handleLongDescriptionInputChange}
              errorMessage={errors.longDescription}
            />
            <Input
              type="number"
              label="Units in stock"
              id="unitsInStock"
              value={unitsInStock}
              placeholder="Units in stock"
              handleChange={this.handleUnitsInStockInputChange}
              errorMessage={errors.unitsInStock}
            />
            <Input
              type="text"
              label="Author first name"
              id="authorFirstName"
              value={author.firstName}
              placeholder="Author first name"
              handleChange={this.handleAuthorFirstNameInputChange}
              errorMessage={errors.authorFirstName}
            />
            <Input
              type="text"
              label="Author last name"
              id="authorLastName"
              value={author.lastName}
              placeholder="Author last name"
              handleChange={this.handleAuthorLastNameInputChange}
              errorMessage={errors.authorLastName}
            />
            <Input
              type="email"
              label="Author email"
              id="authorEmail"
              value={author.email}
              placeholder="Author email"
              handleChange={this.handleAuthorEmailInputChange}
              errorMessage={errors.authorEmail}
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
