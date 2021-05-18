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
    const { ...productData } = this.state;
    event.preventDefault();
    const newProduct = addProductDetails(productData);

    const { saveNewProduct } = this.props;
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
    } = this.state;

    const { firstName, lastName, email } = author;

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
              label="Product title"
              value={title}
              type="text"
              handleChange={this.handleTitleInputChange}
              onBlur={this.handleTitleInputChange}
            />

            <Input
              type="number"
              label="Product price"
              value={price}
              handleChange={this.handlePriceInputChange}
              onBlur={this.handlePriceInputChange}
            />

            <Input
              type="text"
              label="Product image"
              value={img}
              handleChange={this.handleImgInputChange}
              onBlur={this.handleImgInputChange}
            />

            <Input
              type="text"
              label="Product short description"
              value={shortDescription}
              handleChange={this.handleShortDescriptionInputChange}
              onBlur={this.handleShortDescriptionInputChange}
            />

            <Input
              type="text"
              label="Product long description"
              value={longDescription}
              handleChange={this.handleLongDescriptionInputChange}
              onBlur={this.handleLongDescriptionInputChange}
            />

            <Input
              type="number"
              label="Product stock"
              value={unitsInStock}
              handleChange={this.handleUnitsInStockInputChange}
              onBlur={this.handleUnitsInStockInputChange}
            />

            <Input
              type="text"
              label="Product author's first name"
              value={firstName}
              handleChange={this.handleAuthorFirstNameInputChange}
              onBlur={this.handleAuthorFirstNameInputChange}
            />

            <Input
              type="text"
              label="Product author's last name"
              value={lastName}
              handleChange={this.handleAuthorLastNameInputChange}
              onBlur={this.handleAuthorLastNameInputChange}
            />

            <Input
              type="text"
              label="Product author's email"
              value={email}
              handleChange={this.handleAuthorEmailInputChange}
              onBlur={this.handleAuthorEmailInputChange}
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
