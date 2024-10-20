import React, { Suspense } from 'react'
import UserLayout from './Components/UserLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoute } from './Route'
import SuspenceLoader from './Components/Common/SuspenceLoader'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SuspenceLoader/>}>
        <Routes>
          {
            PublicRoute.map((item, index) => (
              <Route key={index}
                path={item.path}
                element={
                  <UserLayout>
                    {item.element}
                  </UserLayout>
                }
              />
            ))
          }
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
