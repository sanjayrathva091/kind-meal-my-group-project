import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Mobilepage } from '../Pages_0381/Mobilepage'

import{MainKindMoments} from "../M/MainKindMoments"

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