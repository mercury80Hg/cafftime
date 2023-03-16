import Search from '../components/Search'
import { fireEvent, render, screen } from '@testing-library/react'
import { prettyDOM } from '@testing-library/react';

describe('testing Search component', () => {
  const setSearchResult = jest.fn()
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
  const renderComponent = () => 
    render(<Search setSearchResult={setSearchResult} {...props}/>);

  it("change value of input on change", () => {
    renderComponent()
    const elementSelected = screen.getByTestId('search')
    fireEvent.change(elementSelected,{target: {value: 'test'}});
    expect(elementSelected.value).toBe('test');
    console.log(prettyDOM(elementSelected))
  });
});



