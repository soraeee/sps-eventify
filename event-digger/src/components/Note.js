import '../App.css';
import gym from '../icons/gym.svg';
import time from '../icons/time.svg';
import location from '../icons/location.svg';

function Note(props) {
	return (
		// <div class="flex box-border h-[350px] w-[285px] p-4 pl-10 border-2 rounded-[20px] bg-white shadow-lg shadow-gray-500">
		<div class="flex box-border h-[373px] w-[270px] p-4 border-2 rounded-[20px] bg-white shadow-lg shadow-gray-500">
			<div class="text-[18px] flex flex-col">
				<div class="h-[15%]">
					<div class="flex flex-row">
						<img src={gym} class="scale-[50%]" />
						<div class="pt-3">Recreation Center</div>
					</div>
				</div>

				<div class="h-[40%]">imgbb</div>
				<div class="h-[45%] pl-3 flex flex-col gap-2">
					<div class="h-[30%] text-[40px] font-semibold">{props.title}</div>
					<div class="h-[40%] text-[10px] text-[#A6ACBE]" text="default">
						{props.subtitle}
						{/* <div>tags</div> */}
						<div class="box-border h-[54px] w-[54px] p-4 hover:bg-[#5BD7A4] rounded-xl">
			<img src={btn1} class="scale-[120%]" alt="My logo" />
		</div>
					</div>
					<div class="flex flex-row h-[10%] text-[6px] text-[#A6ACBE]">
						<img src={time} class="scale-[50%]" />
						{props.time}
					</div>
					<div class="flex flex-row h-[10%] text-xs text-[#A6ACBE]">
						<img src={location} class="scale-[50%]" />
						{props.location}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Note;
