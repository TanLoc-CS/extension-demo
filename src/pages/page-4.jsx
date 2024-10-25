import React from 'react';

function MissingAltTextImages() {
  return (
    <div>
      <h1>Image Gallery</h1>
      
      {/* Image without alt text */}
      <img src="https://fastly.picsum.photos/id/691/600/400.jpg?hmac=bd2TObSOQIMrTV8iYIWASabUgURMOkpjhe2TtAYsjfk" />

      {/* Image with empty alt text */}
      <img src="https://fastly.picsum.photos/id/960/600/400.jpg?hmac=YfVVV2o6wG5k0EI5pHmNa-BRTD7O51mc6XAhNZlraco" alt="" />

      {/* Decorative image that could have an empty alt attribute but should not completely lack it */}
      <img src="https://fastly.picsum.photos/id/429/600/400.jpg?hmac=D82_XrRqUkACPSkK_5Lpb5D-gOW_9MHS7cXbPk6zKnQ" />

      <p>
        Welcome to the image gallery. Each image should include an appropriate alternative text description
        to ensure accessibility for users relying on assistive technologies.
      </p>
    </div>
  );
}

export default MissingAltTextImages;