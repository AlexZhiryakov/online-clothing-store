import React from 'react';
import SlideCollection from './SlideCollection';
import CompanyCollection from './CompanyCollection';

function NewCollection() {
  return (
    <div className="newCollection">
        <SlideCollection />
        <CompanyCollection />
    </div>
  );
}

export default NewCollection;
