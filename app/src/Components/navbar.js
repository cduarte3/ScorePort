export default function Navbar() {
    return (
        <nav className="bg-[#424242]">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 pl-3 items-center sm:items-stretch sm:justify-start gap-4">
                        <img src="/menu.svg" alt="Menu Icon" width="24" height="24" />
                        <div className="flex flex-1 gap-4 pl-6">
                           <img src="/logo.svg" alt="Menu Icon" width="30" height="24" />
                            <h1 className="text-2xl font-bold text-white">ScorePort</h1> 
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 hidden sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="flex items-center">
                            <a href="/" className="px-3 py-2 text-white font-bold" aria-current="page">Home</a>
                            <a href="/" className="px-3 py-2 text-white font-bold">Soccer</a>
                            <div className="flex items-center">
                                <img src="/noti.svg" alt="Notification Icon" className="px-4 max-h-[25px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}