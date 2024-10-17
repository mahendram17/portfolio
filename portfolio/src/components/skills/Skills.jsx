
import { Button } from "@material-tailwind/react";
import './Skills.css'
function Skills() {
    return (<div>
        {/* Heading */}
        <div className="heading">SKILLS</div>
        <div className="flex items-center justify-center ">
      <div>
        {/* First Row of Images */}
        <div className="grid grid-cols-4 gap-16 mb-4">
          <div>
            <img src="/images/html-5.png" alt="HTML 5 logo" />
            <span className="flex justify-center">HTML 5</span>
          </div>
          <div>
            <img src="/images/folder.png" alt="Folder logo" />
            <span className="flex justify-center">CSS 3</span>
          </div>
          <div>
            <img src="/images/sass.png" alt="SASS logo" />
            <span className="flex justify-center">SCSS</span>
          </div>
          <div>
            <img src="/images/file.png" alt="File logo" />
            <span className="flex justify-center">JavaScript</span>
          </div>
        </div>

        {/* Second Row of Images */}
        <div className="grid grid-cols-4 gap-16">
          <div>
            <img src="/images/bootstrap.png" alt="Bootstrap logo" />
            <span className="flex justify-center">Bootstrap</span>
          </div>
          <div>
            <img src="/images/physics.png" alt="React logo" />
            <span className="flex justify-center">React</span>
          </div>
          <div>
            <img src="/images/figma.png" alt="Figma logo" />
            <span className="flex justify-center">Figma</span>
          </div>
          <div>
            <img src="/images/social.png" alt="Social logo" />
            <span className="flex justify-center">Git</span>
          </div>
        </div>
      </div>
    </div>

      
    </div>)
}
export default Skills;
