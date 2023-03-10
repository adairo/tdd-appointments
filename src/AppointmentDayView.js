import React, { useState } from "react";

const appointmentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(":");

  return `${h}:${m}`;
};

const addLog =
  (comp) =>
  (...args) => (console.log(args), comp(...args));

export const Appointment = ({ customer, startsAt }) => (
  <div>
    <h1>{appointmentTimeOfDay(startsAt)}</h1>
    {customer.firstName}
    <table>
      <caption>Customer's data</caption>
      <thead>
        <tr>
          <th>lastName</th>
          <th>stylist</th>
          <th>service</th>
          <th>notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{customer.lastName}</td>
          <td>{customer.stylist}</td>
          <td>{customer.service}</td>
          <td>{customer.notes}</td>
        </tr>
      </tbody>
    </table>
  </div>
);
const LoggedAppointment = addLog(Appointment);

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);
  const currentCustomer = appointments[selectedAppointment];

  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment, i) => (
          <li key={appointment.startsAt}>
            <button type="button" onClick={() => setSelectedAppointment(i)}>
              {appointmentTimeOfDay(appointment.startsAt)}
            </button>
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today</p>
      ) : (
        <LoggedAppointment
          customer={currentCustomer.customer}
          startsAt={currentCustomer.startsAt}
        />
      )}
    </div>
  );
};
