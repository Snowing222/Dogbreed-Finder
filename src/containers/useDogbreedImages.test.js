import useDogbreedImages from "./useDogbreedImagesContainer";
import "whatwg-fetch";
import { renderHook } from "@testing-library/react-hooks";
import fetchMock from "fetch-mock";
import { act } from "react-test-renderer";


describe("useDogbreedImages should render list of images for a specific dog breeds ", () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterAll(() => {
    fetchMock.restore();
  });
  

  it("should return data with a successful request", async () => {

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    breed: "hound"
  }),
  useRouteMatch: () => ({ url: 'https://dog.ceo/api/breed/hound/images' }),
}));

  });
});
