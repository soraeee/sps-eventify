import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';

// definitely replace later
import gymphoto from './icons/gymphoto.svg';

import time from './icons/time.svg';
import location from './icons/location.svg';

function EventView(props) {
	const params = useParams();
	console.log(params.id);
	console.log(props.notes);

	return (
		<div>
			{props.notes.map((note, index) => {
				if (note.id == params.id )
				return <div class="pt-4 pl-2">
					<div class="gap-3 flex flex-col box-border h-[1350px] w-[1210px] p-4 border-2 rounded-[20px] bg-white shadow-2xl shadow-gray-500">
						<div class=" ml-14 ">
							{/* return/divider icons */}
							<div class="h-24 flex flex-col gap-6 mt-4">
								{/* return */}
								<a onClick={() => {window.location.href="/"}}>
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
									<img src={gymphoto} class="max-w-full h-auto" />
								</div>

								<div class="relative">
									<div class="text-[18px] flex flex-col pl-5">
										<div class="h-12 text-4xl">{note.title}</div>
										<div class="h-8 text-base">Organized by John Doe</div>
										<button class="items-center justify-center h-7 px-4 text-center box-border bg-[#2CB67D] rounded-xl text-[12px] text-white max-w-fit">
											Student Organization
										</button>
										<div class="space-y-0.5">
											<div class="flex flex-row">
												<img src={location} class="scale-[80%] pb-16 pr-2" />
												<div class="h-1">{note.location}</div>
											</div>
											<div class="flex flex-row">
												<img src={time} class="scale-[80%] pb-16 pr-2" />
												<div class="h-1">{note.time}</div>
											</div>
											<div class="flex flex-row">
												<img src={time} class="scale-[80%] pb-16 pr-2" />
												<div class="h-1">4:20 PM - 6:00 PM</div>
											</div>
										</div>
										<div class="h-8 text-base">{note.details}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>;
			})}
		</div>
	);
}

export default EventView;
