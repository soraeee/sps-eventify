import '../App.css';

function Dropbox() {
	return (
		<div>
			<button class="
  relative 
  flex jutify-center items-center 
  bg-white 
  text-gray-600 rounded 
  focus:outline-none focus:ring ring-gray-200
  border shadow group
">
				<p class="px-4">Dropdown</p>
				<span class="border-l p-2 hover:bg-gray-100">
					<svg
						class="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</span>
				<div class="
    absolute top-full
    hidden group-focus:block 
    min-w-full w-max 
    bg-white 
    shadow-md mt-1 rounded
  ">
					<ul class="text-left border rounded">
						<li class="px-4 py-1 hover:bg-gray-100 border-b">menu list 1</li>
						<li class="px-4 py-1 hover:bg-gray-100 border-b">menu list 2</li>
						<li class="px-4 py-1 hover:bg-gray-100 border-b">menu list 3</li>
						<li class="px-4 py-1 hover:bg-gray-100 border-b">menu list 4</li>
						<li class="px-4 py-1 hover:bg-gray-100">menu list 5</li>
					</ul>
				</div>
			</button>
		</div>
	);
}

export default Dropbox;
