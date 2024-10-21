import React from 'react';

const ProtectedPage = () => {
  return (
    <div>
      <h2>This is a protected page</h2>
      <p>Only logged-in users can access this page.</p>
    </div>
  );
};

export default ProtectedPage;
