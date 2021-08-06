import UseHomepage from "./UseHomepage";
import "whatwg-fetch";
import { renderHook } from "@testing-library/react-hooks";
import fetchMock from "fetch-mock";
import { act } from "react-test-renderer";


describe("useDataApi", () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterAll(() => {
    fetchMock.restore();
  });

  

  it("should return data with a successful request", async () => {
    const { result } = renderHook(() => UseHomepage());

    fetchMock.mock("test.com", {
        message: {
        affenpinscher: [ ],
        african: [ ],
        airedale: [ ],
        akita: [ ],
        appenzeller: [ ],
        australian: [
        "shepherd"
        ]
    }
    });

   
    await act(async () => {
      result.current.fetchDogbreeds("test.com");
    });

    console.log(result.current)

    // expect(result.current.data).toBe({
    //   returnedData: "foo"
    // });
  });
});


