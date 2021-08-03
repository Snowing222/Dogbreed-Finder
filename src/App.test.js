import Homepage from "./components/Homepage/Homepage";
import DogbreedImages from "./components/DogbreedImages/DogbreedImages";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import React from 'react';
import App from './App';

jest.mock('./components/Homepage/Homepage')
jest.mock("./components/DogbreedImages/DogbreedImages")

describe("Tests for App Router", () => {
    test("Should renderHomePage on default route", () => {
      // Arrange
      Homepage.mockImplementation(() => <div>HomePageMock</div>);
  
      // Act
      render(
        <MemoryRouter>
          <App/>
        </MemoryRouter>
      );
  
      // Assert
      expect(screen.getByText("HomePageMock")).toBeInTheDocument();
    });
  
    test("Should render dogbreed images page article route", () => {
      // Arrange
      DogbreedImages.mockImplementation(() => <div>DogbreedImages Mock</div>);
  
      // Act
      render(
        <MemoryRouter initialEntries={['/african']}>
          <App/>
        </MemoryRouter>
      );
  
      // Assert
      expect(screen.getByText("DogbreedImages Mock")).toBeInTheDocument();
    });
  
  });