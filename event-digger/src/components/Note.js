import '../App.css';
import gym from '../icons/gym.svg';
import time from '../icons/time.svg';
import location from '../icons/location.svg';
import gymphoto from '../icons/gymphoto.svg';

function Note(props) {
	return (
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
								{props.price}
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

export default Note;
