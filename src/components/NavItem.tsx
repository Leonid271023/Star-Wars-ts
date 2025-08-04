import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";

const NavItem = ({itemTitle}: { itemTitle: string }) => {


    return (

            <NavLink to={`${itemTitle}`}><Button>${itemTitle}</Button></NavLink>
    )
}

export default NavItem;