import React from "react";
export const CustomerForm = ({ original }) => (
  <form>
    <label htmlFor="firstName">First name</label>
    <input
      readOnly
      id="firstName"
      type="text"
      name="firstName"
      value={original.firstName}
    />
  </form>
);
