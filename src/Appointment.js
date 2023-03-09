import React from "react";

const appointmentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(":");

  return `${h}:${m}`;
};

const addLog =
  (comp) =>
  (...args) => (console.log(args), comp(...args));
export const Appointment = ({ customer }) => <div>{customer.firstName}</div>;
const LoggedAppointment = addLog(Appointment);

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map((appointment) => (
        <li key={appointment.startsAt}>
          {appointmentTimeOfDay(appointment.startsAt)}
        </li>
      ))}
    </ol>
    {appointments.length === 0 ? (
      <p>There are no appointments scheduled for today</p>
    ) : (
      <LoggedAppointment {...appointments[0]} />
    )}
  </div>
);
