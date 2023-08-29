import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/layout'
//imported my header component to use

//in this function i used the header component
//and just created a simple contact page that
//displays my name and contact information
export default () => (
    <Layout>
        <div className='body'>
            <Header/>
            <h1>Diego de Freitas</h1>
            <h2>Contact Information:</h2>
            <p>Phone number:</p>
            <p>0788......</p><br></br>
            <p>Email Address:</p>
            <p>defreitasdiego360@gmail.com</p>
            <style jsx>{`
            .body {
                text-align: center
            }
        `}</style>
        </div>
    </Layout>
)