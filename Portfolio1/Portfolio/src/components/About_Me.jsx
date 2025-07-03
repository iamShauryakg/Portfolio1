import { useEffect } from 'react';

function About_Me() {
    useEffect(() => {
        document.title = "About Me"
    })

  return (
    <section id="about" className="about-me" >
        <div className="img2">
            <div className="aboutme">
                <div className="title">
                    <h2>About Me</h2>
                </div>
    
                <div className="content2">
                    <div className="image2">
                        <img src="images/profile3.jpg" alt="about me image" />
                    </div>
                    <div className="aboutme-content">
                        <div className="aname">I am Shaurya </div>
                        <div className="ajob"> Aspiring Software engineer </div>
                        <br/>
                        <div className="motive-line">
                            I am Computer engineering student. <br/>
                            i am very passionate and hardworking computer engineering student <br/>
                            lokking forward to became a skilled Software Engineer and serve my excelence to the company. <br/>
                            I am euthusiatic person and love to learn new things. <br/>
                            The field of technology always amazes me that's why i choose the field of computer engineering to follow my passion.
                            <br/>
                            <br/>
                            Email : iamshauryakgupta@gmail.com <br/>
                            Birth Place: Hasanpur, Uttar Prades - 244241
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About_Me;
