import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import { useCookies } from "react-cookie"

const NavContainer = styled.nav`
    display: flex;
    gap: 1.1vw;
    align-items: center;
    margin-right: 1vw;
    margin-block: 1vh;
    font-size: 5.5vh;
    cursor:pointer;
`
const NavModal = styled.div`
    color: #fff6de;
    display: flex;
    &:hover{
        color:#071f19;
        transition: 0.2s ease-in-out
    }
`
const NavArrow = styled.nav`
    font-size: 2.8vh;
    font-weight: regular;
    display: flex;
    align-items:center;
`
const Profile = styled(Link)`
    display: flex;
    color: #FFF6DE;
    text-decoration:none;
    &:hover{
        color: #071f19;
        transition: 0.15s ease-in;
    }
`
const Admin = styled(Link)`
    display: flex;
    color: #FFF6DE;
    text-decoration:none;
    &:hover{
        color: #071f19;
        transition: 0.15s ease-in;
    }
`

export default function NavBar(props){
    const {handleOpenModal} = props
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const authToken = cookies.AuthToken
    const userType = cookies.User_Type
    const location = useLocation()
    return(
        <NavContainer>
            <NavModal onClick={handleOpenModal}>
                <NavArrow className="fa-solid fa-chevron-down"></NavArrow>
                <i className="fa-solid fa-signs-post"></i>
            </NavModal>
            {authToken && location.pathname !== "/profile" && <Profile to={'/perfil'} className="fa-solid fa-user" ></Profile>}
            {userType === 'admin' && <Admin to={'/admin'} className="fa-solid fa-lock-open"></Admin>}
        </NavContainer>
        
    )
}