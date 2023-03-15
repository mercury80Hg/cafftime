import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Setting from '../pages/Setting';

import userEvent from '@testing-library/user-event';

describe('renders text', () => {
  const setUserSetting = jest.fn();

  const userSetting = {
    dailyLimit: 400,
    sleepTreshold: 50,
    sleepTime: '10PM',
    timestamp: new Date(),
  };

  const renderComponent = () => render(
    <BrowserRouter>
      <Setting userSetting={userSetting} setUserSetting={setUserSetting} />
    </BrowserRouter>
  );

  it('Settings should render with text "Setting"', () => {
    renderComponent()
    const settingText = screen.getByText(/Setting/i);
    expect(settingText).toBeInTheDocument();
  });

  it('Daily should render with text "Daily"', () => {
    renderComponent()
    const dailyText = screen.getByText(/Daily/i);
    expect(dailyText).toBeInTheDocument();
  });
  
  //  type input tests
  it('daily limit input should update onChange', () => {
    renderComponent()
    userEvent.type(
      screen.getByRole('textbox', {
        name: '1. Set your Daily Caffeine Limit (mg)',
      }),
      'tomatoes'
    );
    expect(
      screen.getByRole('textbox', {
        name: '1. Set your Daily Caffeine Limit (mg)',
      })
    ).toHaveValue('400tomatoes');
  });
  
  // select dropdown test
  it('submit button should call setUserSettings', () => {
    renderComponent()
    userEvent.type(
      screen.getByRole('textbox', {
        name: '2. Set your Caffeine levels(mg) to sleep',
      }),
      '20'
    );
    
    // drop down click stuff
    userEvent.click(screen.getByRole('combobox'));
    userEvent.click(screen.getByRole('option', { name: '9 P.M.' }));
    userEvent.click(screen.getByRole('button'));

    expect(setUserSetting).toHaveBeenCalled();
  });
});
