import React, { Component } from "react";
// import { v4 as uuid } from "uuid";

import Input from "../Input";
import Button from "../Button";

function addProductDetails(product) {
  return {
    id: this.uuid(),
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
      id: this.uuid(),
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
  }

  handleSubmit() {
    const { ...newProduct } = this.state;
    this.saveNewProduct(...newProduct);
    addProductDetails(...newProduct);
  }
  /*
  handleTitleInputChange(event) {
    // eslint-disable-next-line
   return this.
  }
  */

  // handlePriceInputChange() {}

  // handleImgInputChange() {}

  // handleShortDescriptionInputChange() {}

  // handleLongDescriptionInputChange() {}

  // handleUnitsInStockInputChange() {}

  // handleAuthorFirstNameInputChange() {}

  // handleAuthorLastNameInputChange() {}

  // handleAuthorEmailInputChange() {}

  render() {
    /*
    const {
      title,
      price,
      img,
      shortDescription,
      longDescription,
      unitsInStock,
      author,
    } = this.state;
    */

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
              handleChange={this.handleTitleInputChange}
              type="text"
              label="Product title: "
            />
            <Input type="number" label="Price: " />
            <Input type="file" label="Image: " />
            <Input type="textarea" label="Short Description: " />
            <Input type="textarea" label="Long Description" />
            <Input type="number" label="Units in stock" />
            <Input type="text" label="Name" />
            <Input type="text" label="Last Name" />
            <Input type="email" label="Product title" />

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
