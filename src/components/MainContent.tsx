import { Route, Routes } from "react-router"

const MainContent = () => {
    return (
        <main id="MainContent">
            <div className="container">
                <Routes>
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
const Topic1 = () => {
    return (<h1>Topic1</h1>)
}
const Topic2 = () => {
    return (<h1>Topic2</h1>)
}
const Topic3 = () => {
    return (<h1>Topic3</h1>)
}
const Topic4 = () => {
    return (<h1>Topic4</h1>)
}
const Topic5 = () => {
    return (<h1>Topic5</h1>)
}