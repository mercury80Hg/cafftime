import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Setting from './pages/Setting'
import Daily from './pages/Daily'
import Log from './pages/Log'

describe('renders text', () => {
  const setUserSetting = jest.fn()
  const userSetting = {
    dailyLimit: 400,
    sleepTreshold: 50,
    sleepTime: '10PM',
    timestamp: new Date(),
  }

  const logs = [{
    id: '22389',
    name:'name',
    baseAmount: 1222,
    caffeine: 222,
    timestamp: new Date()
  }]

  it('Settings should render with text “Setting”', () => {
      render(
      <BrowserRouter>
        <Setting userSetting={userSetting} setUserSetting={setUserSetting} />
      </BrowserRouter>
    );
    const settingText = screen.getByText(/Setting/i);
    expect(settingText).toBeInTheDocument();
    // fireEvent.click(screen.getByRole(‘button’))
    // expect(setUserSetting).toHaveBeenCalled()
  })

  it('Daily should render with text “Daily”', () => {
    render(
    <BrowserRouter>
      <Daily userSetting={userSetting}/>
    </BrowserRouter>
  );
  const dailyText = screen.getByText(/Daily/i);
  expect(dailyText).toBeInTheDocument();
  })

  it('Log should render “Total Caffeine”', () => {
    render(
      <BrowserRouter>
        <Log logs={logs}/>
      </BrowserRouter>
    );
    const logText = screen.getByText(/Total Caffeine/i);
    expect(logText).toBeInTheDocument();
  })
});
// });