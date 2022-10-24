import './CSS/App.css';
import {Header} from "./Components/Header";
import {Navbar} from "./Components/Navbar";
import {ProfilePage} from "./Components/ProfilePage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MessagesPage} from "./Components/MessagesPage";

export const App = () => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className='container-fluid p-0'>
                <Header />
                <div className='d-flex flex-row'>
                    <Navbar />
                    <Routes>
                        <Route exact path='/' element={<ProfilePage />} />
                        <Route exact path='/messages' element={<MessagesPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}