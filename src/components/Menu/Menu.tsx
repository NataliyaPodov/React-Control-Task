import MenuItem from './MenuItem'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/recipes">Recipes</MenuItem>
            <MenuItem to="/partnership">Partnership</MenuItem>
            <MenuItem to="/contact">Contact</MenuItem>
        </>
    )
}
export default Menu
