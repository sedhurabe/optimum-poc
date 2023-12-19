import { Routes, Route } from 'react-router-dom';
import { Login, PageNotFound, Signup, LayoutComponent, Dashboard } from 'src/pages';

const RouterNavigation = () => {
  return (
    <>
        <Routes>
                <Route path="/" element={<Login />} />
                <Route path='/home' element={<LayoutComponent />}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
    </>
  )
}

export default RouterNavigation