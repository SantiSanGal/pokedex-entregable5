import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const { nameTrainer } = useSelector(state => state)
    //trae el nombre del entrenador del estado global

    if (nameTrainer) {
        return <Outlet />
    } else {
        return <Navigate to='/' />
    }
    /*si trainer tiene un nombre, renderiza el componente,
    si no, regresa al home */
}

export default ProtectedRoutes

{
//     import React from 'react'
// import { useSelector } from 'react-redux'
// import { Navigate, Outlet } from 'react-router-dom'

// const ProtectedRoutes = () => {

//   const { nameTrainer } = useSelector(state => state)

//   if(nameTrainer) {
//     return <Outlet />
//   } else {
//     return <Navigate to='/' />
//   }
// }

// export default ProtectedRoutes
}