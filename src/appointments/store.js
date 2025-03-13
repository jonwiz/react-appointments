import { create } from "zustand";
const useAppointmentStore = create(set => ({
    appointments: [],
    add: (appointment) => set((state) => ({ appointments: [...state.appointments, appointment] })),
    remove: (id) => set((state) => ({ appointments: state.appointments.filter(a => a.id !== id) }))
}));
export default useAppointmentStore;
