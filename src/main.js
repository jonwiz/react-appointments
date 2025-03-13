import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import Appointments from "./appointments";
import "./index.css";
import { StrictMode } from "react";
const App = () => {
    return (_jsx(StrictMode, { children: _jsxs("div", { className: "p-1", children: [_jsx("header", { className: "dark:bg-neutral-900 p-2", children: _jsx("div", { className: "container mx-auto py-8", children: _jsx("h1", { className: "text-2xl text-pink-400", children: "My Appointments ( edit )" }) }) }), _jsx("main", { children: _jsx("div", { className: "container mx-auto py-8", children: _jsx(Appointments, {}) }) })] }) }));
};
createRoot(document.getElementById('root')).render(_jsx(App, {}));
