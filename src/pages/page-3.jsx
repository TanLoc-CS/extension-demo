import React from 'react';

function Page3() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Our Website</h1>
      
      {/* Low contrast text example */}
      <p style={{ color: '#9aa0a6', backgroundColor: '#ffffff', fontSize: '16px' }}>
        This is a paragraph of text that has a very low contrast ratio against the background.
        People with visual impairments might find it difficult to read this content.
      </p>

      {/* Another low contrast text example */}
      <p style={{ color: '#cccccc', backgroundColor: '#eeeeee', fontSize: '16px' }}>
        Here is some more text with a different low contrast color scheme. Ideally, text and background color should have a higher contrast for better readability.
      </p>
    </div>
  );
}

export default Page3;