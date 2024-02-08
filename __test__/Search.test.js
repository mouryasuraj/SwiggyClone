import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Body from "../src/components/Body"
import { BrowserRouter } from "react-router-dom"
import MOCKDATA from './Mock_Data/SwiggyAPI.json'
import { act } from 'react-dom/test-utils'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            Promise.resolve(MOCKDATA)
        }
    })
})

window.scrollTo = jest.fn();

it('should check search bar render or not', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })

    const searchBar = screen.getByTestId('searchBar')
    expect(searchBar).toBeInTheDocument()
})

// it('should check whether the search is working or not', () => {
//     render(
//         <BrowserRouter>
//             <Body />
//         </BrowserRouter>
//     )
//     const searchBar = screen.getByPlaceholderText('Search for restaurant....')

// })

