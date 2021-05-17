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
      // newProductFormOpen: false,
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
    event.preventDefault();
    const { ...formStates } = this.state;
    const add = addProductDetails(formStates);
    const { saveNewProduct } = this.props;
    saveNewProduct(add);
  }

  handleTitleInputChange(event) {
    this.setState({
      title: event.target.value,
    });
    const { title } = this.state;
    console.log(title);
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
      author: { ...prevState.author, firstName: event.target.value },
    }));
  }

  handleAuthorLastNameInputChange(event) {
    this.setState((prevState) => ({
      author: { ...prevState.author, lastName: event.target.value },
    }));
  }

  handleAuthorEmailInputChange(event) {
    this.setState((prevState) => ({
      author: { ...prevState.author, email: event.target.value },
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
              label="Title"
              type="text"
              value={title}
              handleChange={this.handleTitleInputChange}
            />
            <Input
              label="Price"
              type="number"
              value={price}
              handleChange={this.handlePriceInputChange}
            />
            <Input
              label="IMG"
              type="text"
              value={img}
              handleChange={this.handleImgInputChange}
            />
            <Input
              label="Short Desc"
              type="text"
              value={shortDescription}
              handleChange={this.handleShortDescriptionInputChange}
            />
            <Input
              label="Long Desc"
              type="text"
              value={longDescription}
              handleChange={this.handleLongDescriptionInputChange}
            />
            <Input
              label="Stock"
              type="number"
              value={unitsInStock}
              handleChange={this.handleUnitsInStockInputChange}
            />
            <Input
              label="Author First Name"
              type="text"
              value={author.firstName}
              handleChange={this.handleAuthorFirstNameInputChange}
            />
            <Input
              label="Author Last Name"
              type="text"
              value={author.lastName}
              handleChange={this.handleAuthorLastNameInputChange}
            />
            <Input
              label="Author e-mail"
              type="text"
              value={author.email}
              handleChange={this.handleAuthorEmailInputChange}
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
