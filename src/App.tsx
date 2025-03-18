import React, { Suspense } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { UserSearch } from './components/UserSearch';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Suspense fallback={<div>Loading users...</div>}>
        <UserSearch />
      </Suspense>
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;