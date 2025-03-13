import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import useAppointmentStore from "./store";
import { uuidv7 } from "uuidv7";
const Appointments = () => {
    const { appointments, add, remove } = useAppointmentStore();
    const blankAppointment = {
        id: '',
        title: '',
        description: '',
        date: new Date().toISOString().slice(0, 10),
    };
    const [data, setData] = useState({ ...blankAppointment });
    function validated() {
        //if any fields are not truthy
        if (!data.title || !data.description || !data.date)
            return false;
        return true;
    }
    function saveData(e) {
        e.preventDefault();
        if (validated()) {
            add({ ...data, id: uuidv7() });
            setData({ ...blankAppointment, id: uuidv7() });
        }
    }
    return (_jsxs("div", { className: "flex flex-col lg:flex-row gap-4", children: [_jsx("section", { className: "mx-auto w-full dark:bg-gray-900 p-2 rounded", children: _jsxs("form", { onSubmit: saveData, className: "flex flex-col gap-6", children: [_jsx("h2", { className: "font-bold text-lg", children: "Create appointment:" }), _jsxs("div", { className: "dark:bg-gray-800 dark:text-gray-100 p-2 rounded flex flex-col gap-2", children: [_jsx("label", { htmlFor: "title", children: "Title" }), _jsx("input", { className: "dark:bg-gray-700 p-2", required: true, value: data.title, type: "text", name: "title", id: "title", onChange: (e) => setData({ ...data, title: e.target.value }) })] }), _jsxs("div", { className: "dark:bg-gray-800 dark:text-gray-100 p-2 rounded flex flex-col gap-2", children: [_jsx("label", { htmlFor: "description", children: "Description" }), _jsx("input", { className: "dark:bg-gray-700 p-2", required: true, value: data.description, type: "text", name: "description", id: "description", onChange: (e) => setData({ ...data, description: e.target.value }) })] }), _jsxs("div", { className: "dark:bg-gray-800 dark:text-gray-100 p-2 rounded flex flex-col gap-2", children: [_jsx("label", { htmlFor: "date", children: "Date" }), _jsx("input", { className: "dark:bg-gray-700 p-2", required: true, value: data.date, type: "date", name: "date", id: "date", onChange: (e) => setData({ ...data, date: e.target.value }) })] }), _jsx("button", { type: "submit", className: "ml-auto grow-0 dark:bg-pink-500 dark:hover:bg-pink-400 dark:text-black rounded p-2 font-bold text-lg", children: "Add Appointment" })] }) }), _jsxs("section", { className: "mx-auto w-full dark:bg-gray-900 p-2 rounded flex flex-col gap-6", children: [_jsx("h2", { className: "font-bold text-lg", children: "My Appointments:" }), !appointments.length && (_jsx("div", { className: "dark:bg-pink-800 dark:text-pink-300 p-2 rounded", children: "Add your first appointment using the form above!" })), appointments && (_jsx("ul", { className: "flex flex-col gap-1", children: appointments.map(a => (_jsx("li", { className: "dark:bg-gray-800 p-2 rounded", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { children: a.title }), _jsx("span", { children: a.date })] }) }, a.id))) }))] })] }));
};
export default Appointments;
