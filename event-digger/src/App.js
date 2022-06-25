import './App.css';
// import Dropbox from './components/Dropbox';
// import Note from './components/Note';
import Search from './components/Search';
import Sidebar from './components/Sidebar';

import gym from './icons/gym.svg';
import gymphoto from './icons/gymphoto.svg';
import hamster from './icons/hamster^^.svg';
import btn1 from './icons/btn1.svg';
import setting from './icons/setting.svg';
import time from './icons/time.svg';
import add from './icons/add.svg';
import location from './icons/location.svg';
import notification from './icons/notification.svg';
import logout from './icons/logout.svg';

function Note(props) {
	return (
		// <div class="flex box-border h-[350px] w-[285px] p-4 pl-10 border-2 rounded-[20px] bg-white shadow-lg shadow-gray-500">
		<div class="flex box-border h-[373px] w-[270px] p-4 border-2 rounded-[20px] bg-white shadow-lg shadow-gray-500">
			<div class="text-[18px] flex flex-col">
				<div class="h-[15%]">
					<div class="flex flex-row ml-[-8px]">
						<img src={gym} class="ml-[-2px] scale-[50%]" />
						<div class="pt-3 ml-[-2px]">Recreation Center</div>
					</div>
				</div>

				<div class="h-[40%]">
					<img src={gymphoto} class="max-w-full h-auto" />
				</div>
				<div class="h-[45%] pl-3 flex flex-col gap-2">
					<div class="h-[35%] pt-1 text-[40px] font-medium">
						<div class="flex flex-row gap-4 ">
							<div>{props.title}</div>
							<div class=" -mt-[8px]">
								<button class="items-center justify-center h-7 px-4 text-center box-border bg-[#2CB67D] rounded-xl text-[12px] text-white">
									STU
								</button>
							</div>
						</div>
					</div>
					<div class="h-[25%] pt-1 text-[10px] text-[#A6ACBE]" text="default">
						{props.subtitle}
					</div>
					<div class="flex flex-row gap-2 h-[10%] text-[11px] text-[#A6ACBE]">
						<img src={time} class="scale-[70%]" />
						<div class="pb-16">{props.time}</div>
					</div>
					<div class="flex flex-row gap-2 h-[10%] text-[11px] text-[#A6ACBE]">
						<img src={location} class="scale-[80%]" />
						<div class="pl-1 pb-20">{props.location}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Selection() {
	return (
		<div class="flex flex-row bg-white ">
			<div class="w-[40%]">
				<Search />
			</div>
			<div class="w-[10%]" />
			<div class="w-[12%]">
				<Dropbox title="Date" list={["today","in 3 days","in a week","in a month"]}/>
			</div>
			<div class="w-[12%]">
				<Dropbox title="Location" list={["oncampus","online"]}/>
			</div>
			<div class="w-[16%]">
				<Dropbox title="Tag" list={["student organization","sports","campus management","career management"]}/>
			</div>
			<div class="w-[4%]">
				<img src={notification} class="scale-[90%] pl-3 pt-3 " />
			</div>
			<div class="w-[3%]">
				<img src={logout} class="scale-[90%] pl-3 pt-3 " />
			</div>
		</div>
	);
}

function Dropbox(props) {
	return (
		<div>
			<button class="relative w-36 flex flex-row jutify-center items-center bg-white text-gray-600 rounded  shadow group">
				<p class="px-4 w-2/3 text-left ml-2">{props.title}</p>
				<div class="p-2 ">
					<svg
						class="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</div>
				<div class="absolute top-full hidden group-hover:block min-w-full w-max bg-white shadow-md mt-1 rounded">
					<ul class="text-left border rounded">
						{props.list.map((m) => {
          					return (
            					<>
									<li class="px-4 py-1 hover:bg-gray-100 border-b">{m}</li>
								</>
          					);
        				})}	
					</ul>
				</div>
			</button>
		</div>
	);
}



function Button() {
	return (
		<div class="box-border h-[54px] w-[54px] p-4 hover:bg-[#5BD7A4] rounded-xl">
			<img src={btn1} class="scale-[120%]" alt="My logo" />
		</div>
	);
}

function App() {
	return (
		<div className="font-[Futura]">
			<div className="bg-[#2CB67D] fixed top-0 left-0 h-screen w-28 flex flex-col dark:bg-gray-900 shadow-lg">
				<div class="bg-[#5BD7A4] h-28 w-28 p-4 ">
					<img src={hamster} class="scale-[120%] pl-3 pt-3 " />
				</div>
				<div class="h-[70%] pl-3 pt-3 ">
					<div class="grid grid-rows-4 gap-4 pl-4 pt-4">
						<Button />
						<Button />
						<Button />
						<Button />
					</div>
				</div>
				<div class="h-40% pl-11 pt-7">
					<img src={setting} class="scale-[120%]" alt="My logo" />
				</div>
			</div>
			<div class="pl-48 pt-8 fixed h-28 w-screen p-4 border-b-2">
				<Selection />
			</div>
			<div class="pl-48 pt-36 h-screen w-screen p-4">
				<div class="flex">
					<div class="text-[50px] w-[70%]">Event</div>
					{/* <div class="text-[50px] w-[30%]"> */}
					<div class="w-[5%]" />
					<button class="rounded-none bg-[#2CB67D] pt-6  text-white text-lg w-[15%] flex flex-row ">
						<img src={add} class="scale-[60%] pl-4 mt-[-5px]" alt="My logo" />
						Add new event
					</button>

					<div class="w-[10%]" />
					{/* </div> */}
				</div>
				<h2 class="text-[25px] pl-1 text-[#A6ACBE]">Your all-in-one event planner</h2>
				<div class="pt-8">
					{/* <div class="box-border h-[325px] w-[285px] p-4 border-4 rounded-[20px]">PIG</div> */}
					<div class="grid grid-cols-4">
						<Note
							title="Boxing"
							subtitle="High Intensity Interval Training.High Intensity Interval Training."
							location="BlueJay GYM"
							time="Thurs, Dec 24th, 6PM-9PM"
						/>
						<Note title="HIIT" location="BlueJay GYM" time="Thurs, Dec 24th, 6PM-9PM" popular="true" />
						<Note title="Yoga" location="BlueJay GYM" time="Thurs, Dec 24th, 6PM-9PM" popular="false" />
						<Note title="Yoga" location="BlueJay GYM" time="Thurs, Dec 24th, 6PM-9PM" popular="false" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
