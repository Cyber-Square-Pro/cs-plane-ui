import { Navbar } from "./_components/navbar"

const AuthenticationLayout = ({
    children
}:{
    children: React.ReactNode
}) => {

    return (
        <div className="h-full">
            <Navbar />
            <main className="pt-7 sm:pt-0 pb-20 h-full">
                {children}
            </main>
            
        </div>  
    )

}

export default AuthenticationLayout