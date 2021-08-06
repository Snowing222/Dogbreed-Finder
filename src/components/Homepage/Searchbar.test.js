import { render} from "@testing-library/react";
import Searchbar from './Searchbar'

describe("Searchbar Component", ()=>{
   it('check Searchbar render input', ()=>{
      const {getByTestId} =  render(<Searchbar />)
      const input = getByTestId("searchbar")
      expect(input).toBeTruthy()
   })

})







