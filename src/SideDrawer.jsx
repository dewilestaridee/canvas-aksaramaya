import React from 'react';
import img from './img.jpg';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import { Card, Button, CardImg, CardTitle, CardGroup, Input
        } from 'reactstrap';    
import './SideDrawer.css';

const sideDrawer = () => {
    return(
    <nav className="side-drawer"> 
        <div class = "container">
            <h2>Template</h2>
            <Input name="Cari" id="Template" placeholder="Cari Template" />
        </div>
        <CardGroup>

      <Card className="kartu">
        <CardTitle tag="p">Template 1</CardTitle>
        <CardImg top width="100%" height="400px" line-height="100%" src={img} alt="Template 1" />
        <Button caret color = "danger">Pilih</Button>
      </Card>

      <Card className="kartu">
        <CardTitle tag="p">Template 2</CardTitle>
        <CardImg top width="100%" height="400px" line-height="100%" src={img1} alt="Card image cap" />
        <Button caret color = "danger">Pilih</Button>
      </Card>
      
      <Card className="kartu">
        <CardTitle tag="p">Template 2</CardTitle>
        <CardImg top width="100%" height="400px" line-height="100%" src={img2} alt="Card image cap" />
        <Button caret color = "danger">Pilih</Button>
      </Card>
    </CardGroup>
</nav>
    );
}
export default sideDrawer;
