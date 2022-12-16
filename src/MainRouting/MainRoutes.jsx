import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainKindMoments } from '../M/MainKindMoments'
import { Mobilepage } from '../Pages_0381/Mobilepage'



const MainRoutes = () => {
  return (
    <div>
<Routes>
    <Route  path="/MainKindMoments"  element={<MainKindMoments/>}  />
    <Route  path="/Mobile" element={<Mobilepage/>}   />
</Routes>

    </div>
  )
}

export default MainRoutes