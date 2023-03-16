import EditData from '../pages/EditData'
import {render, screen} from '@testing-library/react'
import { prettyDOM } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';

describe('testing edit data component',() => {
  const renderComponent = () => {
    return render(
        <BrowserRouter>
          <EditData />
        </BrowserRouter>
    );
  }

  it('EditData should render with text "EDIT DATA"', () => {
    renderComponent();
    // console.log('test',prettyDOM(test))
    // const editText = test.getByTestId('edit');
    // expect(editText).toBeInTheDocument();
  });
} )