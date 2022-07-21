import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
        }}>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;