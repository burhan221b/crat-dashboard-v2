import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import DarkLightSwitch from "./DarkLightSwitch"

const MainContent = () => {
    return (
        <main id="MainContent">
            <div className="container">
                <section className="profile-container">
                    <div className="profile">
                        <p className="initials">BA</p>
                    </div>
                </section>
                <hr />
                <Routes>
                    <Route path="/settings/*" element={<Settings />} />
                    <Route path="/settings/profile" element={<Profile />} />
                    <Route path="/settings/account" element={<Account />} />
                    <Route path="/settings/email-password" element={<EmailPassword />} />
                    <Route path="/settings/appearance" element={<Appearance />} />
                    <Route path="/" element={<Topic1 />} />
                    <Route path="/topic2" element={<Topic2 />} />
                    <Route path="/topic3" element={<Topic3 />} />
                    <Route path="/topic4" element={<Topic4 />} />
                    <Route path="/topic5" element={<Topic5 />} />
                </Routes>
            </div>
        </main>
    )
}

export default MainContent


// TESTING
const Profile = () => {
    return (
        <section>
            <h1>Settings</h1>
            <div className="div-container-settings">
                <div className="settings-group">
                    <SettingsList />
                </div>

                <div className="settings-group">
                    <section>
                        <h1>Profile</h1>
                        <div className="div-container">
                            <p>Content</p>
                        </div>
                    </section>
                </div>
            </div>

        </section>
    )
}

const Account = () => {
    return (
        <section>
            <h1>Settings</h1>
            <div className="div-container-settings">
                <div className="settings-group">
                    <SettingsList />
                </div>

                <div className="settings-group">
                    <section>
                        <h1>Account</h1>
                        <div className="div-container">
                            <p>Content</p>
                        </div>
                    </section>
                </div>
            </div>

        </section>
    )
}

const EmailPassword = () => {
    return (
        <section>
            <h1>Settings</h1>
            <div className="div-container-settings">
                <div className="settings-group">
                    <SettingsList />
                </div>

                <div className="settings-group">
                    <section>
                        <h1>Email/Password</h1>
                        <div className="div-container">
                            <p>Content</p>
                        </div>
                    </section>
                </div>
            </div>

        </section>
    )
}

const Appearance = () => {
    return (
        <section>
            <h1>Settings</h1>
            <div className="div-container-settings">
                <div className="settings-group">
                    <SettingsList />
                </div>

                <div className="settings-group">
                    <section>
                        <h1>Appearance</h1>
                        <div className="div-container">
                            <p>Switch</p>
                            <DarkLightSwitch />
                        </div>
                    </section>
                </div>
            </div>

        </section>
    )
}

const Settings = () => {
    return (
        <section>
            <h1>Settings</h1>
            <div className="div-container-settings">
                <div className="settings-group">
                    <SettingsList />
                </div>
            </div>
        </section>
    )
}

const SettingsList = () => {
    return (

        <ul className="ul-settings-list">
            <li className="settings-topic"><Link to="/settings/profile">Profile</Link></li>
            <li className="settings-topic"><Link to="/settings/account">Account</Link></li>
            <li className="settings-topic"><Link to="/settings/email-password">Email/Password</Link></li>
            <li className="settings-topic"><Link to="/settings/appearance">Appearance</Link></li>
        </ul>

    )
}



const Topic1 = () => {
    return (
        <section>
            <h1>Topic1</h1>
            <div className="div-container">
                <p>Content</p>
            </div>
        </section>
    )
}
const Topic2 = () => {
    return (
        <section>
            <h1>Topic2</h1>
            <div className="div-container">
                <p>Content</p>
            </div>
        </section>
    )
}
const Topic3 = () => {
    return (
        <section>
            <h1>Topic3</h1>
            <div className="div-container">
                <p>Content</p>
            </div>
        </section>
    )
}
const Topic4 = () => {
    return (
        <section>
            <h1>Topic4</h1>
            <div className="div-container">
                <p>Content</p>
            </div>
        </section>
    )
}
const Topic5 = () => {
    return (
        <section>
            <h1>Topic5</h1>
            <div className="div-container">
                <p>Content</p>
            </div>
        </section>
    )
}