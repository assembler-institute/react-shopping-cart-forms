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
    this.handleAuthor = this.handleAuthor.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const productData = addProductDetails(this.state);
    const { saveNewProduct } = this.props;
    saveNewProduct(productData);
  }

  handleTitleInputChange(event) {
    this.setState({ title: event.target.value });
  }

  handlePriceInputChange(event) {
    this.setState({ price: event.target.value });
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
    this.setState({ unitsInStock: event.target.value });
  }

  handleAuthor(event) {
    this.setState((prevState) => ({
      ...prevState,
      author: {
        ...prevState.author,
        [event.target.name]: event.target.value,
      },
    }));
  }

  // handleAuthorFirstNameInputChange(event) {
  //   this.setState({ author: event.target.value });
  // }

  // handleAuthorLastNameInputChange(event) {
  //   this.setState({ title: event.target.value });
  // }

  // handleAuthorEmailInputChange(event) {
  //   this.setState({ title: event.target.value });
  // }

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
              label="Product title"
              value={title}
              onChange={this.handleTitleInputChange}
            />

            <Input
              type="number"
              label="price"
              value={price}
              onChange={this.handlePriceInputChange}
            />

            <Input
              type="text"
              label="img"
              value={img}
              onChange={this.handleImgInputChange}
            />

            <Input
              type="text"
              label="shortDescription"
              value={shortDescription}
              onChange={this.handleShortDescriptionInputChange}
            />

            <Input
              type="text"
              label="longDescription"
              value={longDescription}
              onChange={this.handleLongDescriptionInputChange}
            />

            <Input
              type="text"
              label="unitsInStock"
              value={unitsInStock}
              onChange={this.handleUnitsInStockInputChange}
            />

            <Input
              type="text"
              label="author.firstName"
              name="firstName"
              value={author.firstName}
              onChange={this.handleAuthor}
            />

            <Input
              type="text"
              label="author.lastName"
              name="lastName"
              value={author.lastName}
              onChange={this.handleAuthor}
            />

            <Input
              type="text"
              label="author.email"
              name="email"
              value={author.email}
              onChange={this.handleAuthor}
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
