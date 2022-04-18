import React from 'react';
import Footer from '../../shared/Footer/Footer';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            
            <div className='ps-3 mt-2'>
            <h5>Question 1: Difference between authorization and authentication</h5>
            <h5>Authentication</h5>
            <ul>
                <li>Authentication checcked who is he or she.</li>
                <li>Authentication process done befor authorization.</li>
                <li>Authentication determines this person user or not</li>
                <li>Generally, transmits info through an ID Token.</li>
            </ul>

            <h5>Authorization</h5>
            <ul>
                <li>Authorization verify the access of sepecific work.</li>
                <li>Authorization process done after authentication.</li>
                <li>Authorization determines what permission do user have.</li>
                <li>Generally, transmits info through an Access Token.</li>
            </ul>

            <h5>Question 2: Why are you using firebase? What other options do you have to implement authentication?</h5>
            <p>
            First and more important pointswhy useing firebase because it is more secure and easy to implement.It has more feature so it reduce development workload and time.Firebase is very user friendly.
            </p>
            <p>Other option: </p>
            <ul>
                <li>Own authentication logic</li>
                <li>Another third party authentication like Back4App, Parse etc</li>
            </ul>

            <h5>Question 3: What other services does firebase provide other than authentication?</h5>
            <p>Firebase provide many services. Some of them are mentioned below:</p>
            <ul>
                <li>Hosting.</li>
                <li>Realtime Database.</li>
                <li>Cloud Firestore.</li>
                <li>Cloud Functions.</li>
                <li>Google Analytics.</li>
                <li>Cloud Messaging and so on</li>
            </ul>
            </div>
            
            
            <Footer></Footer>
            
        </div>
    );
};

export default Blog;