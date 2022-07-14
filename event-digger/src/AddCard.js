import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { Component, useState } from 'react';
import { Radio } from '@material-tailwind/react';
import { withRouter } from 'react-router';

class Addcard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Title',
			name: 'Author',
			subtitle: 'subtitle',
			location: 'location',
			details: 'details',
			format: 'Class',
			price: 'Free',
			time: 'time',
			file: 'https://www.coywolf.news/wp-content/uploads/2019/07/googlebot.png',
			count: 0
		};
	}

	updateTitle = (event) => {
		this.setState({
			title: event.target.value
		});
	};

	updateSubtitle = (event) => {
		this.setState({
			subtitle: event.target.value
		});
	};

	updateLocation = (event) => {
		this.setState({
			location: event.target.value
		});
	};

	updateDetails = (event) => {
		this.setState({
			details: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addCard(this.state);
		console.log('submit');
	};

	updatePrice = (event) => {
		console.log(event.target.value);
		this.setState({
			price: event.target.value
		});
	};

	updateFormat = (event) => {
		this.setState({
			format: event.target.value
		});
	};

	updateTime = (event) => {
		this.setState({
			time: event.target.value
		});
	};

	handleChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let reader = new FileReader();
			reader.onload = (e) => {
				this.setState({ file: e.target.result });
			};
			reader.readAsDataURL(event.target.files[0]);
		}

		// setFile(URL.createObjectURL(e.target.files[0]));
	};

	render() {
		return (
			<div>
				<div class="pt-4 pl-2">
					<div class="gap-3 flex flex-col box-border h-[1350px] w-[1210px] p-4 border-2 rounded-[20px] bg-white shadow-2xl shadow-gray-500">
						<div class=" ml-14 ">
							{/* return/divider icons */}
							<div class="h-24 flex flex-col gap-6 mt-4 z-10">
								{/* return */}
								<a
									onClick={() => {
										window.location.href = '/event';
									}}
								>
									<svg
										class="scale-[90%]"
										width="34"
										height="34"
										viewBox="0 0 34 34"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M30.2558 12.2443C27.8417 9.83025 24.6436 8.5 21.25 8.5H8.1345L13.6298 3.00475L10.625 0L0 10.625L10.625 21.25L13.6298 18.2453L8.1345 12.75H21.25C23.5089 12.75 25.6403 13.6383 27.251 15.249C28.8618 16.8598 29.75 18.9911 29.75 21.25C29.75 23.5089 28.8618 25.6403 27.251 27.251C25.6403 28.8618 23.5089 29.75 21.25 29.75H12.75V34H21.25C24.6436 34 27.8417 32.6698 30.2558 30.2558C32.6698 27.8417 34 24.6436 34 21.25C34 17.8564 32.6698 14.6582 30.2558 12.2443Z"
											fill="#A6ACBE"
										/>
									</svg>
								</a>
								{/* divider */}
								<svg
									width="1034"
									height="7"
									viewBox="0 0 1034 7"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="scale-[103%] ml-2"
								>
									<path d="M1 2L1033 5" stroke="#EEF0F7" stroke-width="4" />
								</svg>
							</div>

							{/* title/subtitle */}
							<div class="h-24">
								<input
									class="indent-2 text-3xl selection:shadow appearance-none border w-[564px] h-[82px] rounded-[20px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									placeholder="Title"
									onChange={this.updateTitle}
								/>
							</div>
							<div class="h-20">
								<input
									class="indent-2 text-lg shadow appearance-none border w-[1000px] h-[55px] rounded-[13px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									placeholder="subtitle"
									onChange={this.updateSubtitle}
								/>
							</div>

							{/* time/detail/format */}
							<div class="flex flex-col gap-1 ml-3">
								<div class="flex flex-row">
									<div class="h-12 w-[20%] text-2xl">Time</div>
									<div class="h-12 w-[60%]">
										<input
											class="indent-2 text-sm shadow appearance-none border w-[600px] h-[40px] rounded-[13px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											id="time"
											type="text"
											placeholder="MM/DD/YYYY, HH:MM AM or PM"
											onChange={this.updateTime}
										/>
									</div>
								</div>
								<div class="flex flex-row">
									<div class="h-12 w-[20%]  text-2xl">Format</div>
									<div class="flex flex-row gap-6 text-lg mt-2 " onChange={this.updateFormat}>
										<input
											type="radio"
											value="Class"
											name="Format"
											class="mb-2 w-[15px]"
											defaultChecked
										/>{' '}
										Class
										<input type="radio" value="Festival" name="Format" class="mb-2 w-[15px] " />
										Festival
										<input type="radio" value="Networking" name="Format" class="mb-2 w-[15px] " />
										Networking
										<input type="radio" value="Party" name="Format" class="mb-2 w-[15px] " /> Party
										<input type="radio" value="Performance" name="Format" class="mb-2 w-[15px] " />
										Performance
									</div>
								</div>
								<div class="flex flex-row">
									<div class="h-12 w-[20%]  text-2xl">Price</div>
									<fieldset class="flex flex-row gap-6 text-lg mt-2 " onChange={this.updatePrice}>
										<input
											type="radio"
											value="Free"
											name="Price"
											class="mb-2 w-[15px]"
											defaultChecked
										/>{' '}
										FREE
										<input type="radio" value="$" name="Price" class="mb-2 w-[15px] " /> $1-10
										<input type="radio" value="$$" name="Price" class="mb-2 w-[15px] " /> $10-30
										<input type="radio" value="$$$" name="Price" class="mb-2 w-[15px] " /> $30-50
										<input type="radio" value="$$$$" name="Price" class="mb-2 w-[15px] " /> $50+
									</fieldset>
								</div>
							</div>

							<div class="flex flex-col mt-4 gap-3">
								<div class="ml-3 text-2xl">Where</div>
								<input
									class="indent-2 text-medium shadow appearance-none border w-[1000px] h-[55px] rounded-[13px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									placeholder="type here"
									onChange={this.updateLocation}
								/>
								<div class="ml-3 text-2xl mt-3">Details</div>
								<textarea
									class="indent-2 pt-6 text-medium shadow appearance-none border w-[1000px] h-[205px] rounded-[13px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									placeholder="type here"
									onChange={this.updateDetails}
								/>

								{/* Image */}
								<div class="ml-3 text-2xl mt-3"> Upload Image</div>
								<div class="flex flex-row gap-6">
									{/* <Upload /> */}
									<label class="text-center items-center flex flex-col w-[700px] h-42 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
										<input type="file" onChange={this.handleChange} class="opacity-0" />
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
											/>
										</svg>
										<p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
											Attach a file
										</p>
									</label>
									<div class="flex flex-col mt-[-40px] gap-2">
										Preview:
										{this.state.file != '' ? (
											<img
												class="h-36 w-64  object-cover border-gray-300"
												src={this.state.file}
											/>
										) : (
											<div class="h-36 w-64 border-gray-300 text-gray-400 border-4 bg-gray-100 text-center border-dashed  items-center">
												<div class="pt-[52px]">upload to preview!</div>
											</div>
										)}
									</div>
								</div>
								<a
									class="text-right mr-36 mt-16"
									onClick={() => {
										window.location.href = '/event';
									}}
								>
									<button
										class="bg-[#5BD7A4] hover:bg-[#2CB67D] text-white font-bold py-4 px-6 mt-[-16px] text-lg rounded-2xl"
										onClick={this.handleSubmit}
									>
										Submit
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Addcard);
