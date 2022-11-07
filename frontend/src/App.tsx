import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Header from "./components/Header"
import AboutUs from "./pages/AboutUs"
import Login, { User } from "./pages/Login"
import SignUp from "./pages/SignUp"
import ClientForm from "./pages/signup/ClientForm"
import StationForm from "./pages/signup/StationForm"
import SKP from "./pages/SKP"
import Footer from "./components/Footer"
import PublicRoute from "./utils/PublicRoute"
import PrivateRoute from "./utils/PrivateRoute"
import Profile from "./pages/Profile"
import Verify from "./pages/signup/Verify"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./main"
import { login } from "./reducers/login"
import jwtDecode from 'jwt-decode'

const loginString: string | null = localStorage.getItem('login')
const loginFromLocalStorage = loginString && JSON.parse(loginString)

export default function App() {
  const dispatch = useAppDispatch()
  const auth = useAppSelector(state => state.login)
  useEffect(() => {
    if(loginFromLocalStorage) {
      let user: User = jwtDecode(loginFromLocalStorage.access)
      console.log(user)
      dispatch(login({
          data: {
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              type: user.type
          },
          tokens: { ...loginFromLocalStorage }
      }))
    }
  }, [])

  useEffect(() => {
    console.log(auth)
  }, [auth])
  
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skp" element={<SKP />} />
          <Route path="/o-nas" element={<AboutUs />} />
          <Route path="/logowanie" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/rejestracja" element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="/rejestracja/klient" element={<PublicRoute><ClientForm /></PublicRoute>} />
          <Route path="/rejestracja/skp" element={<PublicRoute><StationForm /></PublicRoute>} />
          <Route path="/rejestracja/klient/verify/*" element={<PublicRoute><Verify /></PublicRoute>} />
          <Route path="/profil" element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}