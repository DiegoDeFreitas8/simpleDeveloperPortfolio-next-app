import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/layout'
//imported my header component to use

//in this function i used the header component
//and just created a simple projects page that
//that displays links to one of my projects code and the 
//deployed app
//i styled my elements using style jsx
export default () => (
    <Layout>
        <div className='body'>
            <Header/>
            <h1>My Projects</h1>
            <h2>Here are the links to some of my work:</h2>
            <h3>Here is the code to my hangman app:</h3>
            <a href="https://github.com/DiegoDeFreitas8/Hangman-app">https://github.com/DiegoDeFreitas8/Hangman-app</a><br/>
            <h3>Here is the deployed app:</h3>
            <a href="https://starfish-app-xgl5e.ondigitalocean.app/game">https://starfish-app-xgl5e.ondigitalocean.app/game</a>
            <style jsx>{`
            .body {
                text-align: center
            }
        `}</style>
        </div>
    </Layout>
)