import Layout from "../components/layout/Layout"
import Posts from "../components/post/Posts"
import "bootstrap/dist/css/bootstrap.css"

export default function _Posts() {
    return (
        <Layout>
            <main>
                <Posts limit={"unlimited"} maxLengthOfContent={50} />
            </main>
        </Layout>
    )
}