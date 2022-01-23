const Footer = () => {
  return (
    <div className="footer">
      <nav>
        <div className="footer-column">

          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="http://www.iitkgp.ac.in/">
                IIT Kharagpur
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="http://erp.iitkgp.ac.in/">
                ERP Portal
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://gymkhana.iitkgp.ac.in/">
                TSG Website
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>RESOURCES</h3>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener" 
                href="https://wiki.metakgp.org/w/Main_Page"> 
                MetaKGP
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>COMMUNITY</h3>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener" 
                href="https://github.com/tsg-iitkgp">
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener" 
                href="https://www.youtube.com/c/TechologyStudentsGymkhanaIITKharagpur">
                YouTube
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener" 
                href="https://www.facebook.com/TSG.IITKharagpur/">
                Facebook
              </a>
            </li>
          </ul>
          
        </div>
        <div className="footer-column">
          <h3>QUICK INFO</h3>
          <ul>
            <li>
              <a
                // target="_blank"
                // rel="noreferrer noopener"
                href="/cdc">
                CDC Stats
              </a>
            </li>
            <li>
              <a
                //target="_blank"
                //rel="noreferrer noopener"
                href="/hall-point">
                Hall of Residence
              </a>
            </li>
            <li>
              <a
                //target="_blank"
                //rel="noreferrer noopener"
                href="/faculty">
                Faculty
              </a>
            </li>
          </ul>
          
        </div>
        <div className="footer-column">
          <h3>TSG</h3>
          <ul>
            <li>
              <a
                //target="_blank"
                //rel="noreferrer noopener"
                href="/#">
                Office Bearers
              </a>
            </li>
            <li>
              <a
                //target="_blank"
                //rel="noreferrer noopener"
                href="/#">
                Office Staff
              </a>
            </li>
            <li>
              <a
                //target="_blank"
                //rel="noreferrer noopener"
                href="/#">
                Secreteries
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="footer-title">
        Made for Technology Students’ Gymkhana by the Students of IIT Kharagpur.
      </div>
    </div>
  );
};

export default Footer;
