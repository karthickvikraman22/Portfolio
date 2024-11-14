export default function Projects(){
    return <>
       <section className="flex flex-col pt-10 px-5 sec" id='pro'> 
          <div className="md:px-20 my-5 ">
             <p className="text-4xl border-b-2 border-black w-[140px] font-bold font-hero-font">Projects</p>
          </div>

          <div className="flex flex-col md:flex-row w-full items-center md:justify-center px-14 pt-8">
              <div className="box-container">
                  <p className="heading">Code Efficiency Analyzer</p>
                  <button>Explore</button>
                  <div className="des nav">
                     <p className="detail py-5">The Code Efficiency Analyzer is a platform to analyze and assess the efficiency of their code through sophisticated algorithms.</p>
                     <p className="detail">The tech stack are React.js,Express.js,Tailwind CSS and MySQL.</p>
                  </div>
              </div>
                
              <div className="box-container">
                  <p className="heading">E-Bike Dashboard</p>
                  <button>Explore</button>
                  <div className="des nav">
                     <p className="detail py-5">The E-Bike Dashboard presents the user with a variety of data such as speed, battery level, temperature and indicator status etc.</p>
                     <p className="detail">The tech stack are React.js,CSS and Ajax.</p>
                  </div>
              </div>

              <div className="box-container ">
                  <p className="heading">Online Examination System</p>
                   <button>Explore</button>
                  <div className="des nav">
                     <p className="detail py-5">The project provide a user-friendly and efficient environment for conducting online quizzes, facilitating seamless examination processes and result management.</p>
                     <p className="detail">The tech stack are Java,Servlet,JDBC and MySQL.</p>
                  </div>
              </div>
          </div>
       </section>
    </>
}