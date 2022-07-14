import layout from './icons/layout.svg';
import hamster from './icons/hamster^^.svg';
function Landing() {
	return (
		<div class="flex h-[80%] flex-row bg-white ">
			<div class="w-[45%] flex flex-col ml-9">
                <div class="gap-2 flex flex-col h-[50%] mt-28 font-medium text-5xl text-[#2CB67D] drop-shadow-lg z-10">
                    <div>Your all-in-one</div>
                    <div>campus experience</div>
                    <div>platform</div>
                </div>
                <div class="h-[24%] text-xl w-[80%] z-10"> Help your students, staff, alumni and community partners connect, collaborate and be successful.</div>
                <div class="h-[5%] z-10">
                <a
											onClick={() => {
												window.location.href = '/event';
											}}
										>
                <button class="bg-[#5BD7A4] hover:bg-[#2CB67D] text-white font-bold py-4 px-6 mt-[-16px] text-lg rounded-2xl">
					click here to begin
				</button>
                </a>
                </div>
                <div class="h-[10%] z-0">
                <div class="bg-[#5BD7A4]/10 h-[450px] w-[900px] mt-[-380px] ml-[-60px]"></div>
                </div>
                

			</div>
			<div class="w-[50%] " >
            <img src={layout} class="scale-[90%] pl-3 pt-2 " />
            <img src={hamster} class="scale-[650%] pl-6 mt-[-100px]" />
            </div>
		</div>
	);
}

export default Landing;
