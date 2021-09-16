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
	}

	handleSubmit = (event) => {
		event.preventDefault();

		const product = addProductDetails(this.state);
		this.props.saveNewProduct(product);
	};

	handleInputChange = (event) => {
		this.setState((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	handleAuthorInputChange = (event) => {
		this.setState((prevState) => ({
			...prevState,
			author: {
				...prevState.author,
				[event.target.name]: event.target.value,
			},
		}));
	};

	/*
	handleTitleInputChange = (event) => {
		this.setState((prevState) => ({
			...prevState,
			title: event.target.value,
		}));
	};

	handlePriceInputChange = (event) => {
		this.setState((prevState) => ({
			...prevState,
			price: event.target.value,
		}));
	};

	handleImgInputChange = (event) => {
		this.setState((prevState) => ({
			...prevState,
			img: event.target.value,
		}));
	};

	handleShortDescriptionInputChange = (event) => {
		this.setState((prevState) => ({
			...prevState,
			shortDescription: event.target.value,
		}));
	};

	handleLongDescriptionInputChange = (event) => {
		this.setState((prevState) => ({
			...prevState,
			longDescription: event.target.value,
		}));
	};

	handleUnitsInStockInputChange = (event) => {
		this.setState((prevState) => ({
			...prevState,
			unitsInStock: event.target.value,
		}));
	};

	handleAuthorFirstNameInputChange = (event) => {
		this.setState((prevState) => ({
			...prevState,
			author: {
				...prevState.author,
				firstName: event.target.value,
			},
		}));
	};

	handleAuthorLastNameInputChange = (event) => {
		this.setState((prevState) => ({
			...prevState,
			author: {
				...prevState.author,
				lastName: event.target.value,
			},
		}));
	};

	handleAuthorEmailInputChange = (event) => {
		this.setState((prevState) => ({
			...prevState,
			author: {
				...prevState.author,
				email: event.target.value,
			},
		}));
	};

  */

	render() {
		const {
			title,
			price,
			img,
			shortDescription,
			longDescription,
			unitsInStock,
			author: { firstName, lastName, email },
			errors: {},
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
						<Input type="text" label="Product title" id="title" value={title} handleChange={this.handleInputChange} />
						<Input type="number" min="0" label="Product price" id="price" value={price} handleChange={this.handleInputChange} />
						<Input type="text" label="Product image" id="img" value={img} handleChange={this.handleInputChange} />
						<Input type="text" label="Product short description" id="shortDescription" value={shortDescription} handleChange={this.handleInputChange} />
						<Input type="text" label="Product long description" id="longDescription" value={longDescription} handleChange={this.handleInputChange} />
						<Input type="text" label="Product stock" id="unitsInStock" value={unitsInStock} handleChange={this.handleInputChange} />
						<Input type="text" label="Author firstname" id="firstName" value={firstName} handleChange={this.handleAuthorInputChange} />
						<Input type="text" label="Author lastname" id="lastName" value={lastName} handleChange={this.handleAuthorInputChange} />
						<Input type="text" label="Author email" id="email" value={email} handleChange={this.handleAuthorInputChange} />
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
