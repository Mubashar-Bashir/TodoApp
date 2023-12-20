// /src/components/shared/GridLayout.jsx
import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './Footer';

interface GridLayoutProps {
  children: ReactNode;
}

const GridLayout: React.FC<GridLayoutProps> = ({ children }) => (
  <div>
    <Header />
    <div className="grid-container">{children}</div>
    <Footer />
  </div>
);

export default GridLayout;
