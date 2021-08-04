// import { act, renderHook } from "@testing-library/react-hooks";
// import useDogbreedImages from "./useDogbreedImages";
// import UseHomepage from "./UseHomepage";

// describe("useDogbreedImages", ()=>{
//     it("fetches dogbreeds images", async()=>{
//         global.fetch = jest.fn()
//         await act(async () => renderHook(()=>useDogbreedImages()))
//         expect(global.fetch).toBeCalledWith(`https://dog.ceo/api/breed/${breed}/images/random/4`)

//     })