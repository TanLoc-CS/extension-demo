import React from 'react';

function Page2() {
  return (
    <div>
      <h1>Sign Up Form</h1>
      <form>
        {/* Missing label for the input field */}
        <input type="text" placeholder="First Name" />
        <br />
        <br />

        {/* Missing label for the input field */}
        <input type="text" placeholder="Last Name" />
        <br />
        <br />

        {/* Missing label for the email input */}
        <input type="email" placeholder="Email Address" />
        <br />
        <br />

        {/* Inline reference without label element */}
        <span>Enter Password</span>
        <input type="password" id="password" />
        <br />
        <br />

        {/* Submit button with no accessible label */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Page2;