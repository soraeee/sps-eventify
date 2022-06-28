import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function CardView() {
	return (
		<div>
			{/* page banner */}
			<div class="text-[50px]">Event</div>
			<div class="flex flex-row">
				<h2 class="text-[25px] pl-1 w-[82%] text-[#A6ACBE]">Your all-in-one event planner</h2>
			</div>

			<div class="pt-10 pl-2">
				<div class="gap-3 flex flex-col box-border h-[1350px] w-[1210px] p-4 border-2 rounded-[20px] bg-white shadow-2xl shadow-gray-500">
					<div class=" ml-14 ">
						{/* return/divider icons */}
						<div class="h-24 flex flex-col gap-6 mt-4">
							{/* return */}
							<Link to="/">
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

						{/* title/subtitle */}
						<div class="h-24">
							<input
								class="indent-2 text-3xl selection:shadow appearance-none border w-[564px] h-[82px] rounded-[20px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="username"
								type="text"
								placeholder="Title"
							/>
						</div>
						<div class="h-20">
							<input
								class="indent-2 text-lg shadow appearance-none border w-[1000px] h-[55px] rounded-[13px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="username"
								type="text"
								placeholder="subtitle"
							/>
						</div>

						{/* time/detail/format */}
						<div class="flex flex-col gap-1 ml-3">
							<div class="flex flex-row">
								<div class="h-12 w-[20%] text-2xl">Time</div>
								<div class="h-12 w-[60%]">
									<div class="relative">
										<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
											<svg
												class="w-5 h-5 text-gray-500 dark:text-gray-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
													clip-rule="evenodd"
												/>
											</svg>
										</div>
										<input
											datepicker
											type="text"
											class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Select date"
										/>
									</div>
								</div>
							</div>
							<div class="flex flex-row">
								<div class="h-12 w-[20%]  text-2xl">Format</div>
								<div class="h-12 w-[60%]">Time</div>
							</div>
							<div class="flex flex-row">
								<div class="h-12 w-[20%]  text-2xl">Type</div>
								<div class="h-12 w-[60%]">Time</div>
							</div>
						</div>

						<div class="flex flex-col mt-4 gap-3">
							<div class="ml-3 text-2xl">Where</div>
							<input
								class="indent-2 text-medium shadow appearance-none border w-[1000px] h-[55px] rounded-[13px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="username"
								type="text"
								placeholder="type here"
							/>
							<div class="ml-3 text-2xl mt-3">Details</div>
							<textarea
								class="indent-2 pt-6 text-medium shadow appearance-none border w-[1000px] h-[205px] rounded-[13px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="username"
								type="text"
								placeholder="ff"
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
									</svg>
									<p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
										Attach a file
									</p>
								</div>
								<input type="file" class="opacity-0" />
							</label>
							<div class="text-right mr-36 mt-16">
								<button class="bg-[#5BD7A4] hover:bg-[#2CB67D] text-white font-bold py-4 px-6 mt-[-16px] text-lg rounded-2xl">
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardView;
