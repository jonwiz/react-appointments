import { createRoot } from "react-dom/client";
import Appointments from "./appointments";
import "./index.css";
import { StrictMode } from "react";

const App = () => {

    return (
        <StrictMode>
            <div className="p-1">
                <header className="dark:bg-neutral-900 p-2">
                    <div className="container mx-auto py-8">
                        <h1 className="text-2xl text-pink-400">My Appointments ( edit )</h1>
                    </div>
                </header>
                <main>
                    <div className="container mx-auto py-8">
                        <Appointments />
                    </div>
                </main>
            </div>
        </StrictMode>
    )
}


createRoot(document.getElementById('root')!).render(<App />);