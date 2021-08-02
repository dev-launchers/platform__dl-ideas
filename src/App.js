import "./styles.css";

import Header from "./common/Header";
import { UserDataProvider } from "./context/UserDataContext";

export default function App() {
    return (
        <UserDataProvider>
            <div className="App">
                <h2>Welcome to the project</h2>
            </div>
            <Header />
        </UserDataProvider>
    );
}
