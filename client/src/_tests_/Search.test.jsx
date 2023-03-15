import Search from '../components/Search'
import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event';

describe('renders text', () => {
  const setSearchResult = jest.fn()
  const handleChange = jest.fn();

  const props = {
    database:[{
    _id: "640f4ba2ae7e38fe8b1cbf26",
    name: "Americano",
    baseAmount: 354,
    caffeine: 154,
    imageUrl: "https://www.caffeineinformer.com/wp-content/caffeine/caffe-americano.jpg"
  }] ,
    searchResult: ["item"]
  }

  const renderComponent = () => render(<Search {...props} setSearchResult={setSearchResult} />);

  it('handleChange called when input search change', () => {
    renderComponent()
    userEvent.type('search'),'hello';
    expect(handleChange).toHaveBeenCalled();
  });
});
