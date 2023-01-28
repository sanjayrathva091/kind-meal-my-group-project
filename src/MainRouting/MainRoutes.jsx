import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Mobilepage } from '../Pages_0381/Mobilepage'

import{MainKindMoments} from "../M/MainKindMoments"
import HomePage from '../Pages_0381/HomePage'
import { HelpPage } from '../Pages_0381/HelpPage'
import { ChakraProvider } from '@chakra-ui/react'
import { Mealdeals } from '../Pages_0381/Mealdeals'

const MainRoutes = () => {
  return (
    <div>
<Routes>
<Route   path="/" element={<HomePage/>} />
    <Route  path="/MainKindMoments"  element={ <ChakraProvider><MainKindMoments/></ChakraProvider>   }  />
    <Route  path="/Mobile" element={ <ChakraProvider><Mobilepage/></ChakraProvider>  }   />
    <Route path="/mealdeals"  element={  <ChakraProvider><Mealdeals/></ChakraProvider> } />
   <Route path="/helppage"  element={<HelpPage/>} />


</Routes>

    </div>
  )
}

export default MainRoutes