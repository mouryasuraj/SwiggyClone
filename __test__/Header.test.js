import { render,screen } from "@testing-library/react"
import Header from '../src/components/Header'
import '@testing-library/jest-dom'

it('should render header component with login button',()=>{
    render(<Header />)

    const loginButton = screen.getByRole('button', {name:'Log In'})
    expect(loginButton).toBeInTheDocument()
})