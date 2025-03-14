import React, { useState } from "react";
import { Appointment, useAppointmentStore } from ".";
import { uuidv7 } from "uuidv7";
import Item from "./Item";

const Main = () => {
    const { appointments, add, remove } = useAppointmentStore();

    const blankAppointment: Appointment = {
        id: '',
        title: '',
        description: '',
        date: new Date().toISOString().slice(0, 10),
        time: '07:00',
    };

    const [data, setData] = useState<Appointment>({ ...blankAppointment });

    function validated(): boolean {
        //if any fields are not truthy
        if (!data.title || !data.description || !data.date) return false
        return true;
    }

    function saveData(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (validated()) {
            add({ ...data, id: uuidv7() });
            setData({ ...blankAppointment, id: uuidv7() });
        }
    }

    //yet to implement editing an appointment
    function edit(id: string) {
        console.log(`edit ${id}`);
    }

    return (
        <div className="flex flex-col lg:flex-row gap-4">
            

            <section className="mx-auto w-full dark:bg-gray-950 p-2 rounded flex flex-col gap-6">
                <h2 className="font-bold text-lg">My Appointments:</h2>
                {!appointments.length && (
                    <div className="dark:bg-pink-800 dark:text-pink-300 p-2 rounded">No appointments added yet.</div>
                )}
                {appointments && (<ul className="flex flex-col gap-1">
                    {appointments.map(a => (
                        <Item
                            key={a.id}
                            remove={remove}
                            edit={edit}
                            appointment={a} />
                        ) )}
                </ul>)}
            </section>


            <section className="mx-auto w-full dark:bg-gray-950 p-2 rounded">
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
                    <div className="dark:bg-gray-800 dark:text-gray-100 p-2 rounded flex justify-between gap-2">
                        <div className="dark:bg-gray-900 p-2 flex flex-col gap-2 w-1/2">
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
                        <div className="dark:bg-gray-900 p-2 flex flex-col gap-2 w-1/2">
                            <label htmlFor="time">Time</label>
                            <select
                                className="dark:bg-gray-700 p-2"
                                required
                                value={data.time}
                                onChange={(e) => setData({ ...data, time: e.target.value })}
                            >
                                <optgroup label="Morning">
                                    <option value="07:00">07:00</option>
                                    <option value="07:30">07:30</option>
                                    <option value="08:00">08:00</option>
                                    <option value="08:30">08:30</option>
                                    <option value="09:00">09:00</option>
                                    <option value="09:30">09:30</option>
                                    <option value="10:00">10:00</option>
                                    <option value="10:30">10:30</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                </optgroup>
                                <optgroup label="Afternoon">
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="13:00">1:00PM</option>
                                    <option value="13:30">1:30PM</option>
                                    <option value="14:00">2:00PM</option>
                                    <option value="14:30">2:30PM</option>
                                    <option value="15:00">3:00PM</option>
                                    <option value="15:30">3:30PM</option>
                                    <option value="16:00">4:00PM</option>
                                    <option value="16:30">4:30PM</option>
                                    <option value="17:00">5:00PM</option>
                                    <option value="17:30">5:30PM</option>
                                </optgroup>
                                <optgroup label="Evening">
                                    <option value="18:00">6:00PM</option>
                                    <option value="18:30">6:30PM</option>
                                    <option value="19:00">7:00PM</option>
                                    <option value="19:30">7:30PM</option>
                                    <option value="20:00">8:00PM</option>
                                    <option value="20:30">8:30PM</option>
                                    <option value="21:00">9:00PM</option>
                                    <option value="21:30">9:30PM</option>
                                    <option value="22:00">10:00PM</option>
                                    <option value="22:30">10:30PM</option>
                                    <option value="23:00">11:00PM</option>
                                    <option value="23:30">11:30PM</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="shadow shadow-pink-600 ml-auto grow-0 dark:bg-pink-500 dark:hover:bg-pink-400 dark:text-black rounded p-2 font-bold text-lg">Add Appointment</button>
                </form>
            </section>
        </div>

    )
}


export default Main;