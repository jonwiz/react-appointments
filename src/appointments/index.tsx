import React, { useState } from "react";
import useAppointmentStore from "./store";
import { Appointment } from "./store";
import { uuidv7 } from "uuidv7";

const Appointments = () => {
    const { appointments, add, remove } = useAppointmentStore();

    const blankAppointment: Appointment = {
        id: '',
        title: '',
        description: '',
        date: new Date().toISOString().slice(0, 10),
    };

    const [data, setData] = useState<Appointment>({...blankAppointment});

    function validated(): boolean {
        //if any fields are not truthy
        if (!data.title || !data.description || !data.date) return false
        return true;
    }

    function saveData(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (validated()) {
            add({...data, id: uuidv7()});
            setData({...blankAppointment, id: uuidv7()});
        }
    }

    return (
        <div className="flex flex-col lg:flex-row gap-4">
            <section className="mx-auto w-full dark:bg-gray-900 p-2 rounded">
                <form onSubmit={saveData} className="flex flex-col gap-6">
                    <h2 className="font-bold text-lg">Create appointment:</h2>
                    <div className="dark:bg-gray-800 dark:text-gray-100 p-2 rounded flex flex-col gap-2">
                        <label htmlFor="title">Title</label>
                        <input
                            className="dark:bg-gray-700 p-2"
                            required
                            value={data.title}
                            type="text"
                            name="title"
                            id="title"
                            onChange={(e) => setData({ ...data, title: e.target.value })} />
                    </div>
                    <div className="dark:bg-gray-800 dark:text-gray-100 p-2 rounded flex flex-col gap-2">
                        <label htmlFor="description">Description</label>
                        <input
                            className="dark:bg-gray-700 p-2"
                            required
                            value={data.description}
                            type="text"
                            name="description"
                            id="description"
                            onChange={(e) => setData({ ...data, description: e.target.value })} />
                    </div>
                    <div className="dark:bg-gray-800 dark:text-gray-100 p-2 rounded flex flex-col gap-2">
                        <label htmlFor="date">Date</label>
                        <input
                            className="dark:bg-gray-700 p-2"
                            required
                            value={data.date}
                            type="date"
                            name="date"
                            id="date"
                            onChange={(e) => setData({ ...data, date: e.target.value })} />
                    </div>
                    <button
                        type="submit"
                        className="ml-auto grow-0 dark:bg-pink-500 dark:hover:bg-pink-400 dark:text-black rounded p-2 font-bold text-lg">Add Appointment</button>
                </form>
            </section>

            <section className="mx-auto w-full dark:bg-gray-900 p-2 rounded flex flex-col gap-6">
                <h2 className="font-bold text-lg">My Appointments:</h2>
                { !appointments.length && (
                    <div className="dark:bg-pink-800 dark:text-pink-300 p-2 rounded">Add your first appointment using the form above!</div>
                )}
                {appointments && (<ul className="flex flex-col gap-1">
                    {appointments.map(a => (
                        <li key={a.id} className="dark:bg-gray-800 p-2 rounded">
                            <div className="flex justify-between items-center">
                                <span>{a.title}</span>
                                <span>{a.date}</span>
                            </div>
                        </li>
                    ))}
                </ul>)}
            </section>
        </div>

    )
}


export default Appointments;