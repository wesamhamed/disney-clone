import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {auth,provider} from "../../firebase";
import {Nav,Logo,NavMenu,UserImg,Login,LoginContainer} from "./styles/Header";
import {selectUserName,selectUserPhoto,setUserLogin,setSignOut} from "../../features/user/userSlice";

function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName =useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUserLogin({
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL
                }));
                history.push("/");
            }
        })
    },[]);
    const signIn =()=>{
        auth.signInWithPopup(provider)
            .then((result)=>{
                let user =result.user;
                dispatch(setUserLogin({
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL
                }));
                history.push("/");
            })
    }
    const signOut =()=>{
        auth.signOut()
            .then(()=>{
                dispatch(setSignOut());
                history.push("/login");
            })
    }
    return (
        <Nav>
            <Logo src="/images/logo.svg" alt=""/>
            {
                !userName || !userPhoto ? (
                                    <LoginContainer>
                                        <Login onClick={signIn}>Login</Login>
                                    </LoginContainer>
                                    
                                    ) : (
                    <>
                        <NavMenu>
                            <a>
                                <img src="/images/home-icon.svg"  alt=""/>
                                <span>Home</span>
                            </a>
                            <a>
                                <img src="/images/search-icon.svg"  alt=""/>
                                <span>Search</span>
                            </a>
                            <a>
                                <img src="/images/watchlist-icon.svg"  alt=""/>
                                <span>WatchList</span>
                            </a>
                            <a>
                                <img src="/images/original-icon.svg"  alt=""/>
                                <span>Original</span>
                            </a>
                            <a>
                                <img src="/images/movie-icon.svg"  alt=""/>
                                <span>Movies</span>
                            </a>
                            <a>
                                <img src="/images/series-icon.svg"  alt=""/>
                                <span>Series</span>
                            </a>
                        </NavMenu>
                        <UserImg onClick={signOut} src="https://avatars.githubusercontent.com/u/19163652?s=400&u=27622929238a11bbb07d3d9692ce831d3583c049&v=4"  alt=""/> 
                    </>
                )
            }
            
        </Nav>
    )
}

export default Header;