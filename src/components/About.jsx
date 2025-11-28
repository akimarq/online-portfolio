import '../App.css';   
import './About.css';
import List from './List.jsx';

function About() {
  return (
    <div className="sections about">
        <div className="top">
            <div className="about-header">
                <h1>about <span className="alt-text">me</span></h1>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <div className="about-slideshow">
                        <p>*insert image slideshow*</p>
                </div>
            </div>
            <div className="right">
                <div className="about-content">
                    <div className="about-content-top">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut consequatur esse saepe libero. Quas temporibus optio autem earum tenetur officiis totam a tempore minima laboriosam doloremque, commodi ratione obcaecati. Recusandae.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, aspernatur similique adipisci laboriosam maiores voluptatibus
                        </p>
                    </div>
                    <div className="about-content-bottom">
                    <List title="Title 1" 
                        item1="Item 1"
                        item2="Item 2"
                        item3="Item 3"
                        item4="Item 4"
                        item5="Item 5"
                    />
                    <List title="Title 2" 
                        item1="Item 1"
                        item2="Item 2"
                        item3="Item 3"
                        item4="Item 4"
                        item5="Item 5"
                    />
                    </div>
                </div>
            </div>
        </div>
        
        
      
    </div>
  );
}
export default About;