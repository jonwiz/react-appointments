import { create } from "zustand";


export interface Appointment {
    id: string;
    title: string;
    date: string;
    time: string;
    description: string,
}

interface AppointmentStore {
    appointments: Appointment[];
    add: (appointment: Appointment) => void;
    remove: (id: string) => void;
}

export const useAppointmentStore = create<AppointmentStore>(set => ({
    appointments: [],
    add: (appointment: Appointment) => set((state) => ({appointments: [...state.appointments, appointment]})),
    remove: (id: string) => set((state) => ({appointments: state.appointments.filter(a => a.id !== id)}))
}));
