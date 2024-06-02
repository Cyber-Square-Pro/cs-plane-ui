import { Navbar } from "../../components/navbar"
import "react-toastify/dist/ReactToastify.css";



/*
  Author: Mohammed Rifad on April 12th, 2024
  Purpose: Renders layout for authentication pages
  
*/

const AuthenticationLayout = ({
    children
}:{
    children: React.ReactNode
}) => {

    return (
        <div className="h-full">
            <Navbar />
            <main className="pt-16 sm:pt-0 pb-20 h-full">
                {children}
            </main>
            
        </div>  
    )

}

export default AuthenticationLayout