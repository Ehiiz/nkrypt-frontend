import Logo from "./Logo";

export default function Header(){

    return(
        <div className="flex justify-between items-end fixed top-0 left-0 right-0 bg-secondary-600 py-4 px-4">
            <h2 className="font-bold text-base text-white">Notifications</h2>
            <Logo />
        </div>
    )
}