import React from 'react';
import img from './1.png';
import img1 from './4.png';
import img2 from './3.png';
import img3 from './6.png';
import img4 from './5.png';
import img5 from './7.png';
import img6 from './8.png';
import img7 from './9.png';
import img8 from './10.png';
import img9 from './11.png';
import img10 from './12.png';
import img11 from './img1.jpg';

import { Card, CardImg, CardGroup, Input
        } from 'reactstrap';    
import './SideDrawer.css';

const sideDrawer = () => {
    return(
    <nav className="side-drawer"> 
        <div class = "container">
            <h2>Template</h2>
            <Input name="Cari" id="Template" placeholder="Cari Template" />
        </div>
        <div>
          <CardGroup>

          <Card className="kartu">
            <CardImg top src={img} alt="Template 1" />
          </Card>

          <Card className="kartu">
            <CardImg top src={img1} alt="Card image cap" />
          </Card>
          
          <Card className="kartu">
            <CardImg top src={img2} alt="Card image cap" />
          </Card>

          <Card className="kartu">
            <CardImg top src={img3} alt="Card image cap" />
          </Card>

          <Card className="kartu">
            <CardImg top src={img4} alt="Card image cap" />
          </Card>
          <Card className="kartu">
            <CardImg top src={img11} alt="Card image cap" />
          </Card>
          
        </CardGroup>
    </div>
    <br></br>
    <div class = "container">
            <h2>Objek dan Background</h2>
        </div>
    <div>
          <CardGroup>

          <Card className="kartu">
            <CardImg top src={img5} alt="Template 1" />
          </Card>

          <Card className="kartu">
            <CardImg top src={img6} alt="Card image cap" />
          </Card>
          
          <Card className="kartu">
            <CardImg top src={img7} alt="Card image cap" />
          </Card>

          <Card className="kartu">
            <CardImg top src={img8} alt="Card image cap" />
          </Card>

          <Card className="kartu">
            <CardImg top src={img9} alt="Card image cap" />
          </Card>
          <Card className="kartu">
            <CardImg top src={img10} alt="Card image cap" />
          </Card>
          </CardGroup>
    </div>
</nav>
    );
}
export default sideDrawer;
