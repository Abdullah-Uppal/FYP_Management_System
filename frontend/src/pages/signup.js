import Header from "../partials/logInSignUp/components/Header"
import Signup from "../partials/logInSignUp/components/Signup"

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
        </>
    )
}