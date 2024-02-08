import { fireEvent, render, screen } from "@testing-library/react"
import Cuisines from "../src/components/Cuisines"
import { BrowserRouter } from "react-router-dom"
import cuisines from './Mock_Data/SwiggyAPI.json'
import '@testing-library/jest-dom'


it("should render Cuisines component with text 'Suraj, what's on your mind?' ", () => {
    render(
        <BrowserRouter>
            <Cuisines cuisines={cuisines} />
        </BrowserRouter>
    )

    const userName = screen.getByText("Suraj, what's on your mind?");
    expect(userName).toBeInTheDocument()
})

it('should render Cuisines component with total 20 cuinsines category ', () => {
    render(
        <BrowserRouter>
            <Cuisines cuisines={cuisines} />
        </BrowserRouter>
    )

    const noOfCuisines = screen.getAllByTestId('cuisines');
    expect(noOfCuisines.length).toBe(20)
})
