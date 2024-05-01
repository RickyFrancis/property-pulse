import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find your dream home',
  description: 'Find your dream home with PropertyPulse',
  keywords: 'property, real estate, home, house, apartment',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
