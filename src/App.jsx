import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import ContactPage from './pages/contact-page';
import AppHeader from './cmps/app-header';
import AppFooter from './cmps/app-footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    <section className='main-container'>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </section>
  )

}
{/* // <BrowserRouter>
    //   <AppHeader />
    //   <Switch>
    //     <Route path="/about">
    //       <AboutPage />
              {/* <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} /> */}
{/* </Route> */ }
{/* </Route> */ }
//     </Route>
//     <Route path="/contact">
//       <ContactPage />
//     </Route>
//     <Route path="/">
//       <HomePage />
//     </Route>
//   </Switch>
//   <AppFooter />
// </BrowserRouter> */}



{/* // <section className="App">
    //   <AppHeader />
    //   <main>
    //     <HomePage />
    //   </main>
    //   <AppFooter />
    // </section>
          ); */}



