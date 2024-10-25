import React from 'react';

function Page1() {
  return (
    <div>
      {/* Issue 1: Using role="button" without ensuring keyboard accessibility */}
      <div role="button" onClick={() => alert('Button clicked!')}>
        Click Me
      </div>

      <br />

      {/* Issue 2: Using aria-label without a value */}
      <button aria-label="">
        Click Me
      </button>

      <br />

      {/* Issue 3: Using role="presentation" on a contentful element */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="Placeholder Image" 
        role="presentation"
      />

      <br />

      {/* Issue 4: Incorrect usage of ARIA roles */}
      <div role="checkbox">
        <input type="checkbox" />
        <label>Check this box</label>
      </div>
    </div>
  );
}

export default Page1;