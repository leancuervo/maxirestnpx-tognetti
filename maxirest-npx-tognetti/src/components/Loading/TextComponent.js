import { Navigate } from "react-router-dom"

export function TextComponent ({ user = true, children }) {

    const token = localStorage.getItem ('token')


    if (!user) {
        return <Navigate to ='/'><h2>Bla Bla Bla 1</h2></Navigate>
        
    }

    return (
        <>
            {children}
            {/*<h2>Bla Bla Bla 2 </h2>*/}
        
        </>
    )
}