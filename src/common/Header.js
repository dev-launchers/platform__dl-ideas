import { useUserDataContext } from "../context/UserDataContext";
export default function Header() {
    const { userData } = useUserDataContext();
    console.log("userDataaaa", userData);
    return (
        <div className="Header">
            <h2>header</h2>
        </div>
    );
}
