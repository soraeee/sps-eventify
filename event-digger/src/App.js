import './App.css';
import Dropbox from './components/Dropbox';
// import Note from './components/Note';
import Search from './components/Search';
import gym from './icons/gym.svg';
import hamster from './icons/hamster^^.svg';


function Selection() {
	return (
		<div class="flex flex-row bg-white shadow-lg">
				<div class="w-[40%]"><Search /></div>
        <div class="w-[15%]">
          <Dropbox />
        </div>
        <div class="w-[15%]">
          {/* <Dropbox /> */}
        </div>
        <div class="w-[15%]">
          {/* <Dropbox /> */}
        </div>
        <div class="w-[15%]">
          {/* <Dropbox /> */}
        </div>
		</div>
	);
}

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

function App() {
	return (
		<div className="font-[Futura]">
			<div className="bg-[#2CB67D] fixed top-0 left-0 h-screen w-28 flex flex-col dark:bg-gray-900 shadow-lg">
				<div class="bg-[#5BD7A4] h-28 w-28 p-4">
          <img src={hamster} class="scale-[120%] pl-3 pt-3 " alt="My logo" />
        </div>
				<i>A</i>
				<i>B</i>
			</div>
			<div class="pl-48 pt-8 fixed h-28 w-screen p-4 border-b-2">
        <Selection />
      </div>
			<div class="pl-48 pt-36 h-screen w-screen p-4">
				<div class="flex">
					<div class="text-[50px] w-[70%]">Event</div>
					{/* <div class="text-[50px] w-[30%]"> */}
					<div class="w-[5%]" />
					<button class="rounded-none bg-[#2CB67D] text-white text-xl w-[15%]">Add new event</button>

					<div class="w-[10%]" />
					{/* </div> */}
				</div>
				<h2 class="text-[25px] pl-1">Your all-in-one event planner</h2>
				<div class="pt-8">
					{/* <div class="box-border h-[325px] w-[285px] p-4 border-4 rounded-[20px]">PIG</div> */}
					<div class="grid grid-cols-4 gap-4">
						<div>
							{' '}
							<Note />{' '}
						</div>
						<div><Note /></div>
            <div><Note /></div>
            <div><Note /></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
