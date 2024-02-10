import { render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import Body from "../src/components/Body"
import MOCK_DATA from './Mock_Data/SwiggyAPI.json'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it('should render all restaurant card', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })

    const restaurantCards = screen.getAllByTestId('resCard')
    expect(restaurantCards.length).toBe(9)
})