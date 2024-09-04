import Link from "next/link";
import { MotionTransition } from "./transition-component";
import "@/app/globals.css";
import LanguageDropdown from "./lang_button";
import DiscordIcon from "./icons/DiscordIcon";
import { FaDiscord } from "react-icons/fa";

const Header = () => {
	return (
		<MotionTransition
			position='bottom'
			className='z-30 inline-block w-full'
		>
			<header className='w-full'>
				<div className='max-w-2xl mx-auto mt-[7%]'>
					<Link href='/'>
						<img
							src='logo_grande.png'
							alt='Logo de la empresa'
							className='w-full'
						/>
					</Link>
				</div>
				{/* <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10"> */}
				<Link
					href='https://discord.gg/5htWutRn'
					className='flex items-center gap-2 bg-[#292b2f] w-fit p-2 rounded-xl text-white mx-auto mt-20 hover:scale-105 transition-all duration-150 delay-0'
				>
					<FaDiscord className='w-6 h-6' />
					<span>Join our Discord!</span>
				</Link>
				{/*             </MotionTransition> */}
			</header>
		</MotionTransition>
	);
};

export default Header;
