import React, { Fragment } from 'react'
const NavBar = React.lazy(() => import('./Pages/NavBar'))
import TheLoading from './Pages/Screen/TheLoading'
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Css/styles.css'



const App = ({ route }) => {


    // <React.Suspense fallback={<TheLoading  />}>
    // <Home />
    // </React.Suspense>


    return (
        <Fragment>

            {/* <React.Suspense fallback={<TheLoading   />} >
                <TheCalling />
            </React.Suspense> */}

            <React.Suspense fallback={<TheLoading   />}  >
                <NavBar />
            </React.Suspense>


            <Outlet />


         

        </Fragment>
    )
}

App.propTypes = {
    route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
    route: null,
};

export default { element: App };