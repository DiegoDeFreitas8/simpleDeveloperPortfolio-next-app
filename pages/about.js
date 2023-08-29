import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/Header'
//imported my header component to use

//in this function i used the header component
//and just created a simple about me page that
//contains lists of my education and work experience
//i styled my elements using style jsx
export default () => (
    <Layout>
        <div className='body'>
            <Header/>
            <h1>About Me</h1>
            <h2>Education</h2>
            <div>
                <h4>I-TO-I TEFL</h4>
                <p>2021 - 2022</p> 
                <ul>
                    <li>GA Level 5 in Teaching English as a Foreign Language</li>
                </ul>
            </div>
            <div>
                <h4>Aspire FX</h4>
                <p>January 2021</p>
                <ul>
                    <li>Course in Forex</li>
                </ul>
            </div>
            <div>
                <h4>IIE Varsity College</h4>
                <p>2018 - 2020</p>
                <ul>
                    <li>Diploma in Information Technology in Software Development</li>
                </ul>
            </div>
            <div>
                <h4>Mountain View Academy</h4>
                <p>2012 - 2017</p>
                <ul>
                    <li>Matriculated with a National Senior Certificate (Diploma Pass)</li>
                    <li>Captain of athletics team in Grade 12</li>
                </ul>
            </div>
            <div>
                <h4>Edgemead Primary School</h4>
                <p>2006 - 2016</p>
            </div>

            <h2>Work Experience</h2>
            <div>
                <h4>CIT/TCM - Client Capitec</h4>
                <p>August 2022 - January 2023</p> 
                <ul>
                    <li>Run diagnostics on PCs</li>
                    <li>Build windows 7 & 10 on PCs</li>
                    <li>Tested equipment such as printers, scanners, monitors, ticket printers, TVs, laptops</li>
                    <li>Installed monitors as a project at Capitec head office</li>
                    <li>Replaced harddrives in PCs</li>
                    <li>Repaired printers</li>
                    <li>Logged in equipment on computer system after being tested - ITSM</li>
                </ul>
            </div>
            <div>
                <h4>The Village Vetshop</h4>
                <p>2018 & 2019 School Holidays</p>
                <ul>
                    <li>Packing inventory</li>
                </ul>
            </div>
            <div>
                <h4>ETC - Promoter</h4>
                <p>2016 - 2017</p>
                <ul>
                    <li>Handing out promotional flyers</li>
                </ul>
            </div>
            <style jsx>{`
            .body {
                text-align: center
            }
            ul {
                list-style: none
            }
        `}</style>
        </div>
    </Layout>
)