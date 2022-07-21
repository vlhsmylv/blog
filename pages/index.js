import Head from 'next/head'
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.css"
import Layout from "../components/layout/Layout";
import Posts from '../components/post/Posts';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
        <main style={{
          display: "flex",
          flexDirection: "column"
        }} id="posts">
          <Posts limit={3} maxLengthOfContent={50} />
          <div className='text-center mt-4'>
            <Link href="/posts">
              <a className='btn btn-dark'>
                More
              </a>
            </Link>
          </div>
        </main>
    </Layout>
  )
}