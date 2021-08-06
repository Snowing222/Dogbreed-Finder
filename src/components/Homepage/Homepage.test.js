import {render, act} from '@testing-library/react'
import Homepage from './Homepage'



global.fetch = jest.fn(()=> Promise.resolve({
    json:() => Promise.resolve({
        "message": {
            "affenpinscher": [],
            "african": [],
            "airedale": [],
            "akita": [],
            "appenzeller": [],
            "australian": [
                "shepherd"
            ]}
    })
}))

describe("Homepage", ()=>{
    it("loads dogbreeds on mount", async ()=>{
        await act(async ()=>render (<Homepage />))
        
    })
})