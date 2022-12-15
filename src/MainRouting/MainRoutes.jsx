import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Kindmoments } from '../Pages_0381/Kindmoments'
import { Mobilepage } from '../Pages_0381/Mobilepage'

const MainRoutes = () => {
  return (
    <div>
<Routes>
    <Route  path="/"  element={<Kindmoments/>}  />
    <Route  path="/Mobile" element={<Mobilepage/>}   />
</Routes>

    </div>
  )
}

export default MainRoutes