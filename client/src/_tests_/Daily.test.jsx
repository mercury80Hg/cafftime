import { render, screen } from '@testing-library/react';
import Daily from '../pages/Daily';

describe('renders text', () => {
  const setUserSetting = jest.fn();

  const props = {
    todaySum: 1000,
    remaining: 100,
    remainingByTime: 75,
    remainingByBedTime: 50,
    userSetting: {
      dailyLimit: 400,
      sleepTreshold: 50,
      sleepTime: '10PM',
      timestamp: new Date(),
    },
  };

  const renderComponent = () => render(<Daily {...props} />);

  it('Daily should render with text "Daily"', () => {
    renderComponent();
    const dailyText = screen.getByText(/Daily/i);
    expect(dailyText).toBeInTheDocument();
  });
});
