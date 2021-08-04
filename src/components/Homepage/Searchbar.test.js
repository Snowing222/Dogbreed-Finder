import { render, fireEvent } from "@testing-library/react";
import Searchbar from './Searchbar'

it('check Search render', ()=>{
   const {queryByTitle} =  render(<Searchbar />)
   const input = queryByTitle("input")
   expect(input).toBeTruthy()
})


// describe("changeInput", () =>{
//     it("onChange", ()=>{
//         const {queryByTitle} =  render(<Searchbar/>)
//         const input = queryByTitle("input")
//         fireEvent.change(input,{target: { value: "testValue"}} )
//         expect(input.value).toBe('testValue')
//     })
// })






