import Header from "../partials/logInSignUp/components/Header"
import Login from "../partials/logInSignUp/components/Login"


export default function LoginPage({setUser}){

    return(
        
        <>
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login setUser={setUser}/>
        </>
    )
}