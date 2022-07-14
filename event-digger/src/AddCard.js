                                                                                                       import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';

function Addcard() {
    const [title, setTitle] = useState(""); 
    const [subtitle, setSubtitle] = useState(""); 
    const [place, setPlace] = useState(""); 
    const [content, setContent] = useState(""); 
    const [date, setDate] = useState(""); 
    const [image, setImage] = useState(""); 


    const [message, setMessage] = useState(""); 
    let handleSubmit = (e) => {       
        e.preventDefault(); 
        const form = {
            title,
            subtitle,
            place,
            content,
            date,
            image
          };
        
        axios
            .post('https://qzhu-sps-summer22.ue.r.appspot.com/form', form)
            .then(() => console.log('Form Created'))
            .catch(err => {
                console.error(err);
            });

    }; 
        
	return (
		<div>
			<div class="pt-4 pl-2">
				<div class="gap-3 flex flex-col box-border h-[1350px] w-[1210px] p-4 border-2 rounded-[20px] bg-white shadow-2xl shadow-gray-500">
					<div class=" ml-14 ">
						{/* return/divider icons */}
						<div class="h-24 flex flex-col gap-6 mt-4">
							{/* return */}
							<Link to="/">
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
							</Link>
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

                        <form onSubmit={handleSubmit}>
						{/* title/subtitle */}
						<div class="h-24">
							<input
								class="indent-2 text-3xl selection:shadow appearance-none border w-[564px] h-[82px] rounded-[20px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="username"
								type="text"
								placeholder="Title"
                                onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div class="h-20">
							<input
								class="indent-2 text-lg shadow appearance-none border w-[1000px] h-[55px] rounded-[13px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="username"
								type="text"
								placeholder="subtitle"
                                onChange={(e) => setSubtitle(e.target.value)}
							/>
						</div>

						{/* time/detail/format */}
						<div class="flex flex-col gap-1 ml-3">
							<div class="flex flex-row">
								<div class="h-12 w-[20%] text-2xl">Time</div>
								<div class="h-12 w-[60%]">
                                <div class="relative">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker 
    type="text" 
    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder="Select date"
    onChange={(e) => setDate(e.target.value)}>
</input>
</div>
                                </div>
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

						<div class="flex flex-col mt-4 gap-3">
							<div class="ml-3 text-2xl">Where</div>
							<input
								class="indent-2 text-medium shadow appearance-none border w-[1000px] h-[55px] rounded-[13px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="username"
								type="text"
								placeholder="type here"
                                onChange={(e) => setPlace(e.target.value)}
							/>
							<div class="ml-3 text-2xl mt-3">Details</div>
							<textarea
								class="indent-2 pt-6 text-medium shadow appearance-none border w-[1000px] h-[205px] rounded-[13px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="username"
								type="text"
								placeholder="ff"
                                onChange={(e) => setContent(e.target.value)}
							/>
							
                            {/* Image */}
							<div class="ml-3 text-2xl mt-3"> Upload Image</div>
							<label class="flex flex-col w-[1000px] h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
								<div class="flex flex-col items-center justify-center pt-7">
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
										{this.state.file != "" ? (	
											<img class="h-36 w-64  object-cover border-gray-300" src={this.state.file} />
										) : (<div class="h-36 w-64 border-gray-300 text-gray-400 border-4 bg-gray-100 text-center border-dashed  items-center">
											<div class="pt-[52px]">upload to preview!</div>
										</div>)}
										
										
									</div>
								</div>
								<input type="file" 
                                       class="opacity-0"
                                       onChange={(e) => setImage(e.target.value)} />
							</label>
							<div class="text-right mr-36 mt-16">
                            <button type="submit" class="bg-[#5BD7A4] hover:bg-[#2CB67D] text-white font-bold py-4 px-6 mt-[-16px] text-lg rounded-2xl"> 
									Submit
							</button>
						</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Addcard);
