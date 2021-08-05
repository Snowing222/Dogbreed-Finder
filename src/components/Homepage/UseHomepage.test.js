import { act, renderHook } from "@testing-library/react-hooks";
import UseHomepage from "./UseHomepage";

describe("useHomepage", ()=>{
    it("fetches dogbreeds by the url", async()=>{
        global.fetch = jest.fn()
        await act(async () => renderHook(()=>UseHomepage()))
        expect(global.fetch).toBeCalledWith("https://dog.ceo/api/breeds/list/all")

    })


    // describe("loads dogbreeds data on mount", ()=>{
    //     it.todo("fetch dog breeds data successfully", async()=>{
    //         global.fetch = jest.fn(()=> Promise.resolve({
    //             json: ()=> Promise.resolve({

    //                     "message": {
    //                         "affenpinscher": [],
    //                         "african": [],
    //                         "airedale": [],
    //                         "akita": [],
    //                         "appenzeller": [],
    //                         "australian": [
    //                             "shepherd"
    //                         ],
    //                     }
    //             })
            
    //         }))
            
    //         await act(async () => renderHook(()=>UseHomepage()))
    //         expect
    
    //     })
    // })

})

describe("fetch Dog breed",)


