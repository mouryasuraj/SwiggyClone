
import { fireEvent, render, screen } from "@testing-library/react"
import Header from '../src/components/Header'
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"
import appStore from '../src/Utils/appStore'
import { Provider } from "react-redux"
import { act } from "react-dom/test-utils"


it('should render header component with login button and when i click on login button it should changed to sign out button', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
    })

    const loginButton = screen.getByRole('button', { name: 'Log In' })
    expect(loginButton).toBeInTheDocument()
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole('button', { name: 'Sign Out' })
    expect(logoutButton).toBeInTheDocument()
    fireEvent.click(logoutButton)
    expect(loginButton).toBeInTheDocument()
})

