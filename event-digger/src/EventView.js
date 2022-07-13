import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';

// definitely replace later
import gymphoto from './icons/gymphoto.svg';

import time from './icons/time.svg';
import location from './icons/location.svg';
import price from './icons/price.svg';

function EventView(props) {
	const params = useParams();
	console.log(params.id);
	console.log(props.notes);

	return (
		<div>
			{props.notes.map((note, index) => {
				if (note.id == params.id)
					return (
						<div class="pt-4 pl-2">
							<div class="gap-3 flex flex-col box-border h-[1350px] w-[1210px] p-4 border-2 rounded-[20px] bg-white shadow-2xl shadow-gray-500">
								<div class=" ml-14 ">
									{/* return/divider icons */}
									<div class="h-24 flex flex-col gap-6 mt-4">
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

									{/* content */}
									<div class="flex flex-row gap-1 ml-3">
										<div class="w-[40%]">
											<img src={note.file} class="w-[440px] h-[300px] object-cover" />
										</div>

										<div class="relative ml-4">
											<div class="text-[18px] flex flex-col pl-5">
												<div class="h-16 text-4xl">{note.title}</div>
												<div class="h-12 text-base ml-2">Organized by Google</div>
												<div class="h-12 text-[16px] ml-2">
													<button class="items-center justify-center h-7 px-4 text-center box-border bg-[#6FB1E2] rounded-xl  text-white max-w-fit">
														{note.format}
													</button>
													<button class="items-center ml-4 justify-center h-7 px-4 text-center box-border bg-[#2CB67D] rounded-xl  text-white max-w-fit">
														{note.price}
													</button>
												</div>
												<div class="space-y-0.5">
													<div class="flex flex-row h-16">
														<img src={location} class="ml-1 scale-[60%] " />
														<div class="h-1 ml-6 mt-4">{note.location}</div>
													</div>
													<div class="flex flex-row  h-16">
														<img src={time} class="scale-[50%] " />
														<div class="h-1 ml-4 mt-4">{note.time}</div>
													</div>
													<div class="flex flex-row  h-16">
														<img src={price} class="scale-[40%] ml-[-10px] " />
														<div class="h-1 ml-1 mt-4">{note.count} people registered</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div class="ml-3 text-2xl mt-10 mb-4">Details</div>
										<div class="ml-3 mt-1 indent-2 pt-6 text-medium shadow appearance-none border w-[1000px] h-[205px] rounded-[13px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
											{note.details}
										</div>
									</div>
									<button
										class="bg-[#5BD7A4] hover:bg-[#2CB67D] text-white ml-[880px] mt-8 font-bold py-4 px-6 text-lg rounded-2xl"
										onClick={() => props.updateCount(params.id)}
									>
										Register
									</button>
								</div>
							</div>
						</div>
					);
			})}
		</div>
	);
}

export default EventView;
