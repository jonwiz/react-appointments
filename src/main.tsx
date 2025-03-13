import { createRoot } from "react-dom/client";
import Appointments from "./appointments";
import "./index.css";
import { StrictMode } from "react";
import { CONFIG } from "./CONFIG";

const App = () => {

    return (
        <StrictMode>
            <div className="font-mono">
                <header className="dark:bg-pink-950 bg-gradient-to-r from-pink-950 to-pink-900 p-2">
                    <div className="container mx-auto py-8 px-2 md:px-0">
                        <h1 className="text-4xl text-pink-400 font-bold">My Appointments</h1>
                    </div>
                </header>
                <main>
                    <div className="container mx-auto py-8 px-2 md:px-0">
                        <Appointments />
                    </div>
                </main>

                <footer>
                    <div className="container mx-auto py-8 px-2 md:px-0 justify-center flex">
                        <p className="text-slate-300">Appointment playground web app. <a className="underline" target="_blank" href="https://github.com/jonwiz/react-appointments">React-Appointments by @jonwiz</a> <em>Version: {CONFIG.version}</em></p>
                    </div>
                </footer>
            </div>
        </StrictMode>
    )
}


createRoot(document.getElementById('root')!).render(<App />);