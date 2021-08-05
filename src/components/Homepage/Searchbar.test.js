import { render, fireEvent } from "@testing-library/react";
import Searchbar from './Searchbar'

it('check Search render', ()=>{
   const {queryByTitle} =  render(<Searchbar />)
   const input = queryByTitle("input")
   expect(input).toBeTruthy()
})








