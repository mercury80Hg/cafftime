// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';
// import Daily from './pages/Daily';
// import { BrowserRouter } from 'react-router-dom';
// import { todaySum, remaining, remainingByTime, remainingatBedtime, userSettings } from './App'

// describe('i just want to get tested!', () => {
//   it('should render App', () => {});

//   render(
//     <BrowserRouter>
//       <Daily
//         todaySum={todaySum}
//         remaining={remaining}
//         remainingByTime={remainingByTime}
//         remainingatBedtime={remainingatBedtime}
//         userSetting={userSetting}
//       />
//     </BrowserRouter>, {wrapper: BrowserRouter}
//   );
//   expect(screen.getByText('TODAY')).toBeInTheDocument();

//   screen.debug(); // <-- this will print out what the dom looks like
//   // });

import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import { BrowserRouter, Routes } from 'react-router-dom';
// import { userSetting, setUserSetting } from './App';

import Setting from './pages/Setting'
// import  userSetting from "./App"

import Daily from './pages/Daily'
import Log from './pages/Log'
import userEvent from '@testing-library/user-event';

describe('renders text', () => {

  const setUserSetting = jest.fn()

  const userSetting = {
    dailyLimit: 400,
    sleepTreshold: 50,
    sleepTime: '10PM',
    timestamp: new Date(),
  }

  const logs = [{
    id: '123',
    name: 'Al',
    baseAmount: 0,
    caffeine: 0, 
    timestamp:new Date(),
  }]
  

  it('Settings should render with text "Setting"', () => {
      render(
      <BrowserRouter>
        <Setting userSetting={userSetting} setUserSetting={setUserSetting} />
      </BrowserRouter>
    );
    const settingText = screen.getByText(/Setting/i);
    expect(settingText).toBeInTheDocument();
    // fireEvent.click(screen.getByRole("button"))
    // expect(setUserSetting).toHaveBeenCalled()
  })

  it('Daily should render with text "Daily"', () => {
    render(
    <BrowserRouter>
      <Daily 
        userSetting={userSetting}
      />
    </BrowserRouter>
  );
  const dailyText = screen.getByText(/Daily/i);
  expect(dailyText).toBeInTheDocument();
  })

  it('Log should render "Total Caffeine"', () => {
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
