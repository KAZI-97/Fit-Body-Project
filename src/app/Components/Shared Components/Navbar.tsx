import Image from "next/image";
import Logo from '@/assets/logo.png'
import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="mb-8">
            <div className="flex justify-between items-center max-w-5xl mx-auto mt-2 p-3">
                <div className="flex gap-2.5">
                    <Image src={Logo} alt="Logo Image" width={28} height={28}></Image>
                    <h1 className={`[var(--font-oswald)] text-[#FFFFFF]`}>FITLOG</h1>
                </div>
                <div className={`[var(--font-inter)] flex gap-10`}>
                    <div>
                        <Link href="/"  className="text-[#c2f800]  hover:w- hover:bg-[#1A2312] hover:p-3.5 hover:rounded-2xl hover:shadow-sm">Workouts</Link>
                    </div>
                    <div>
                       <Link href="" className="text-[#9CA3AF]">My Plan</Link> 
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex gap-2">
                        <button className="text-[#D1D5DB]">Plan</button>
                        <h1 className="border rounded-full w-6 h-6 flex justify-center items-center bg-[#C2F800] text-[#000000] text-sm">0</h1>
                    </div>
                    <div className="flex gap-2">
                       <button className="text-[#9CA3AF]">Save</button>
                        <h1 className="border rounded-full w-6 h-6 flex justify-center items-center  text-[#D1D5DB] text-sm">0</h1>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;