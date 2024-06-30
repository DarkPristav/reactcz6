import { NavLink } from "react-router-dom"

const Error = () => {
  return <section>
        <h2>404</h2>
        <p>Stránka nenalezena</p>
        <p><NavLink to="/">Zpět na úvodní stranu</NavLink></p>
    </section>
}

export default Error