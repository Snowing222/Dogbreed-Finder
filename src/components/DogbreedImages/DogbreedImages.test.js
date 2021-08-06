import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// jest.mock("./useDogbreedImages");

const TestDogbreedImages = () => {
    const images = [
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg"
    ]

    const displayImages = (images) => images && images.map((img, index) =>(
        <img src = {img} width="300" height="400" alt = {index} key = {index} title = "image"/>
    ))

    return (
        <div>
           {
            displayImages(images)
           }  
        </div>
    )
}


it("display 4 dogbreed images", () => {
    const wrapper = shallow(<TestDogbreedImages />);
    expect(wrapper.find("img").length).toEqual(4);
 
  });