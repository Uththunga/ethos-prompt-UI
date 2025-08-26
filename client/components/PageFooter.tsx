import React from 'react';
import { HeaderCTA } from './HeaderCTA';
import { Footer } from './Footer';

export const PageFooter = () => {
  return (
    <div className="w-full bg-white" role="contentinfo">
      <HeaderCTA />
      <Footer />
    </div>
  );
};

export default PageFooter;
