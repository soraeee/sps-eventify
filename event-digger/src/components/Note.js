import '../App.css';
import gym from '../icons/gym.svg';

function Note() {
	return (
		<div class="flex box-border h-[350px] w-[285px] p-4 border-2 rounded-[20px] bg-white shadow-lg shadow-gray-500">
				<div class="text-[18px] flex flex-col">
          <div class="h-[15%]">
            <div class="flex flex-row">
            <img src={gym} class="scale-[50%]" alt="My logo" />
            <div class="pt-3" >Recreation Center</div>
            </div>
          </div>
        
          <div class="h-[40%]">img</div>
				  <div class="h-[45%]">
					  hiit
				  </div>
			</div>
		</div>
	);
}

export default Note;
