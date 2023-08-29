import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/layout'
//imported my header component to use

//in this function i used my header component
//and i just created a simple home page including an image
//and styled elements using style jsx
export default () => (
    <Layout>
        <div className='body'>
            <Header/> 
            <h1>Developer Portfolio</h1>
            <img src="/static/my-image.webp"/>
            <style jsx>{`
                .body {
                    text-align: center
                }
                img {
                    width: 800px;
                    height: 400px
                }
            `}</style>
        </div>
    </Layout>        
)