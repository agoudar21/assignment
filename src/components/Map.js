import React from 'react';

const MapImage = () => {
  const geo = {
    lat: "-37.3159",
    lng: "81.1496"
  };

  const apiKey = 'AIzaSyBGwI-4jfFTE4hab9sXFhAAITszQl9X3Ao'; 
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${geo.lat},${geo.lng}&zoom=12&size=400x300&markers=${geo.lat},${geo.lng}&key=${apiKey}`;

  return (
    <div>
      <h1>Map Image</h1>
      <img src={mapUrl} alt="Map" />
    </div>
  );
};

export default MapImage;