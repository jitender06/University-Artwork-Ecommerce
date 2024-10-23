import React, { Suspense, useEffect, useState } from 'react'
import UserLayout from './Components/UserLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminRoute, PublicRoute } from './Route'
import SuspenceLoader from './Components/Common/SuspenceLoader'
import { AdminMiddleware } from './Route/Middlewares'
import NotFoundPage from './Components/Common/NotFoundPage'
import AuthenticatedLayout from './Components/AdminLayout'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Suspense fallback={<SuspenceLoader />}>
          <Routes>
            {
              PublicRoute?.map((item, index) => (
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
            {
              AdminRoute?.map((item, index) => (
                <Route key={index}
                  path={item.path}
                  element={
                    <AdminMiddleware>
                      <AuthenticatedLayout>
                        {item.element}
                      </AuthenticatedLayout>
                    </AdminMiddleware>
                  }
                />
              ))
            }
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
