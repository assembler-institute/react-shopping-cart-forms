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
    const { errors, ...newProduct } = this.state;
    const { saveNewProduct } = this.props;
    saveNewProduct(addProductDetails(newProduct));
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

  handleAuthorFirstNameInputChange(event) {
    const { author } = this.state;
    author.firstName = event.target.value;
    this.setState({ author: author });
    // eslint-disable-next-line
    console.log(author.firstName);
  }

  handleAuthorLastNameInputChange(event) {
    const { author } = this.state;
    author.lastName = event.target.value;
    this.setState({ author: author });
    // eslint-disable-next-line
    console.log(author.lastName);
  }

  handleAuthorEmailInputChange(event) {
    const { author } = this.state;
    author.email = event.target.value;
    this.setState({ author: author });
    // eslint-disable-next-line
    console.log(author.email);
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
              value={title}
              handleChange={this.handleTitleInputChange}
              type="text"
              label="Product title: "
            />
            <Input
              value={price}
              handleChange={this.handlePriceInputChange}
              type="number"
              label="Price: "
            />
            <Input
              value={img}
              handleChange={this.handleImgInputChange}
              type="file"
              label="Image: "
            />
            <Input
              value={shortDescription}
              handleChange={this.handleShortDescriptionInputChange}
              type="textarea"
              label="Short Description: "
            />
            <Input
              value={longDescription}
              handleChange={this.handleLongDescriptionInputChange}
              type="textarea"
              label="Long Description"
            />
            <Input
              value={unitsInStock}
              handleChange={this.handleUnitsInStockInputChange}
              type="number"
              label="Units in stock"
            />
            <Input
              value={author.firstName}
              handleChange={this.handleAuthorFirstNameInputChange}
              type="text"
              label="First Name"
            />
            <Input
              value={author.lastName}
              handleChange={this.handleAuthorLastNameInputChange}
              type="text"
              label="Last Name"
            />
            <Input
              value={author.email}
              handleChange={this.handleAuthorEmailInputChange}
              type="email"
              label="Email "
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
