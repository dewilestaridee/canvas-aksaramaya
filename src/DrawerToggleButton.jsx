import React from 'react';
import './Header.css';
import {Button} from 'reactstrap';
import { ButtonGroup} from 'reactstrap';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import CategoryIcon from '@material-ui/icons/Category';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import GradientIcon from '@material-ui/icons/Gradient';



const drawerToggleButton = (props) =>  (
 
<button className ="toggle-button" onClick={props.click}>  
   
    <ButtonGroup vertical>
        <Button>
            <div className="toggle">
            <ViewQuiltIcon style={{ fontSize: 50  }}></ViewQuiltIcon>
            </div>
        </Button>

        <Button>
            <div className="toggle">
            <CategoryIcon style={{ fontSize: 50  }}></CategoryIcon>
            </div>
        </Button>

        <Button>
            <div className="toggle">
            <TextFormatIcon style={{ fontSize: 50  }}></TextFormatIcon>
            </div>
        </Button>

        <Button>
            <div className="toggle">
            <WallpaperIcon style={{ fontSize: 50  }}></WallpaperIcon>
            </div>
        </Button>

        <Button>
            <div className="toggle">
            <GradientIcon style={{ fontSize: 50  }}></GradientIcon>
            </div>
        </Button>

    </ButtonGroup>
  
</button>           
            
);

export default drawerToggleButton;