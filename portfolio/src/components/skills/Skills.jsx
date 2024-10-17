
import { Button } from "@material-tailwind/react";
import './Skills.css'
function Skills() {
    return (<div>
        {/* Heading */}
        <div className="heading">SKILLS</div>
  
        {/* Main Container */}
        <div className="main-container">
            
        <div className="first-block">
          <div>
            <img src="/images/html-5.png" alt="HTML 5 logo" />
          </div>
          <div>
            <img src="/images/folder.png" alt="HTML 5 logo" />
          </div>
          <div>
            <img src="/images/sass.png" alt="HTML 5 logo" />
          </div>
          <div>
            <img src="/images/file.png" alt="HTML 5 logo" />
          </div>
        </div>

        <div className="second-block">
          <div>
            <img src="/images/bootstrap.png" alt="HTML 5 logo" />
          </div>
          <div>
            <img src="/images/physics.png" alt="HTML 5 logo" />
          </div>
          <div>
            <img src="/images/figma.png" alt="HTML 5 logo" />
          </div>
          <div>
            <img src="/images/social.png" alt="HTML 5 logo" />
          </div>
        </div>
        </div>
      </div>)
}
export default Skills;
