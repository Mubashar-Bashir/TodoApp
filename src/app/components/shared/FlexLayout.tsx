// /src/components/shared/FlexLayout.jsx
import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './Footer';

interface FlexLayoutProps {
  children: ReactNode;
}

const FlexLayout: React.FC<FlexLayoutProps> = ({ children }) => (
  <div>
    <Header />
    <div className="flex-container">{children}</div>
    <Footer />
  </div>
);

export default FlexLayout;
