import Log from '../pages/Log';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('renders text', () => {

  const logs = [
    {
      id: '123',
      name: 'Al',
      baseAmount: 0,
      caffeine: 0,
      timestamp: new Date(),
    },
  ];

  const renderComponent =  () => {
    render(
      <BrowserRouter>
        <Log logs={logs} />
      </BrowserRouter>
    );
  } 

  it('Log should render "Total Caffeine"', () => {
    renderComponent()
    const logText = screen.getByText(/Total Caffeine/i);
    expect(logText).toBeInTheDocument();
  });
});
