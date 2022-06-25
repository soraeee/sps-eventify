import '../App.css';
import hamster from '../icons/hamster^^.svg';
import btn1 from '../icons/btn1.svg';

function Button() {
	return (
		<div class="box-border h-[64px] w-[64px] p-4 ... hover:bg-[#5BD7A4]">
            <img src={btn1} class="scale-[100%]" alt="My logo" />
        </div>
	);
}


function Sidebar() {
	return (
		<div className="bg-[#2CB67D] fixed top-0 left-0 h-screen w-28 flex flex-col dark:bg-gray-900 shadow-lg">
			<div class="bg-[#5BD7A4] h-28 w-28 p-4 ">
				<img src={hamster} class="scale-[120%] pl-3 pt-3 " alt="My logo" />
			</div>
			<div class="h-[70%] pl-3 pt-3 ">
				<div class="grid grid-rows-4 gap-4 pl-4 pt-4">
					<Button />
					<Button />
                    <Button />
                    <Button />
				</div>
			</div>
			<div class="h-40% pl-3 pt-3 ">B</div>
		</div>
	);
}

export default Sidebar;
