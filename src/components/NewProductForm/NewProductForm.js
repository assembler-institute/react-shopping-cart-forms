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
      // errors: {
      //   title: null,
      //   price: null,
      //   img: null,
      //   shortDescription: null,
      //   longDescription: null,
      //   unitsInStock: null,
      //   author: {
      //     firstName: null,
      //     lastName: null,
      //     email: null,
      //   },
      // },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
    this.handlePriceInputChange = this.handlePriceInputChange.bind(this);
    this.handleImgInputChange = this.handleImgInputChange.bind(this);
    this.handleShortDescriptionInputChange =
      this.handleShortDescriptionInputChange.bind(this);
    this.handleLongDescriptionInputChange =
      this.handleLongDescriptionInputChange.bind(this);
    this.handleUnitsInStockInputChange =
      this.handleUnitsInStockInputChange.bind(this);
    this.handleAuthorFirstNameInputChange =
      this.handleAuthorFirstNameInputChange.bind(this);
    this.handleAuthorLastNameInputChange =
      this.handleAuthorLastNameInputChange.bind(this);
    this.handleAuthorEmailInputChange =
      this.handleAuthorEmailInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newProduct = addProductDetails(this.state);
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
    const { author } = this.state;
    author.firstName = event.target.value;
    this.setState({
      author: author,
    });
  }

  handleAuthorLastNameInputChange(event) {
    const { author } = this.state;
    author.lastName = event.target.value;
    this.setState({
      author: {
        lastName: event.target.value,
      },
    });
  }

  handleAuthorEmailInputChange(event) {
    const { author } = this.state;
    author.email = event.target.value;
    this.setState({
      author: {
        email: event.target.value,
      },
    });
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
            {/* Title */}
            <Input
              type="text"
              label="Title"
              placeholder="Product title"
              handleChange={this.handleTitleInputChange}
              value={title}
            />
            {/* Price */}
            <Input
              type="number"
              label="Price"
              placeholder="Price"
              handleChange={this.handlePriceInputChange}
              value={price}
            />
            {/* Image src */}
            <Input
              type="text"
              label="Image"
              placeholder="Source url"
              handleChange={this.handleImgInputChange}
              value={img}
            />
            {/* Short description */}
            <Input
              type="text"
              label="Short description"
              placeholder="Text"
              handleChange={this.handleShortDescriptionInputChange}
              value={shortDescription}
            />
            {/* Long description */}
            <Input
              type="text"
              label="Long description"
              placeholder="Text"
              handleChange={this.handleLongDescriptionInputChange}
              value={longDescription}
            />
            {/* Stock */}
            <Input
              type="number"
              label="Units in stock"
              placeholder="Stock number"
              handleChange={this.handleUnitsInStockInputChange}
              value={unitsInStock}
            />
            {/* First name */}
            <Input
              type="text"
              label="First name"
              placeholder="Your name"
              handleChange={this.handleAuthorFirstNameInputChange}
              value={author.firstName}
            />
            {/* Last name */}
            <Input
              type="text"
              label="Last name"
              placeholder="Your last name"
              handleChange={this.handleAuthorLastNameInputChange}
              value={author.lastName}
            />
            {/* Email */}
            <Input
              type="text"
              label="Email"
              placeholder="Your email"
              handleChange={this.handleAuthorEmailInputChange}
              value={author.email}
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
