import React, { useState } from "react";

export const CustomerForm = ({
  original,
  onSubmit,
}) => {
  const [customer, setCustomer] = useState(original);

  const handleChangeOf =
    (fieldName) =>
    ({ target }) =>
      setCustomer((customer) => ({
        ...customer,
        [fieldName]: target.value,
      }));

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(customer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        type="text"
        name="firstName"
        value={customer.firstName}
        onChange={handleChangeOf("firstName")}
      />
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        type="text"
        name="lastName"
        value={customer.lastName}
        onChange={handleChangeOf("lastName")}
      />
      <label htmlFor="phoneNumber">
        Phone number
      </label>
      <input
        id="phoneNumber"
        type="text"
        name="phoneNumber"
        value={customer.phoneNumber}
        onChange={handleChangeOf("phoneNumber")}
      />
      <input type="submit" value="Add" />
    </form>
  );
};
