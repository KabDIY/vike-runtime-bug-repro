import React from 'react';

// The main page component for the home page.
// We've removed all application-specific logic to create a minimal reproduction.
export default function Page() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Vike Minimal Reproduction</h1>
      <p>This page is to help debug a Vike runtime bug on Vercel.</p>
    </div>
  );
}
