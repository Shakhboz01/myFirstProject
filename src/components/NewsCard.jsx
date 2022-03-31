import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styleds from 'styled-components';
import { NewsCardData } from '../Data/data';
import { useEffect } from 'react';

const Container=styleds.div`
margin:50px 20px;
display:grid;
grid-template-columns:repeat(auto-fill,minmax(290px,1fr));
grid-gap:25px;
`

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

 const NewsCard=()=> {
  const [expanded, setExpanded] = React.useState(false);
    const [key,setKey]=React.useState("");

  const handleExpandClick = (match,act) => {
      setKey(act);
      if(act==match){
        setExpanded(!expanded);
      }
      console.log(key)      
  };
  useEffect(()=>{

  },expanded)

  return (
      <Container>
            {NewsCardData.map(item=>(

                <Card key={item.img} style={{background:"#1e1e1e",color:"#afafaf"}} sx={{ maxWidth: 345 }}>
      <CardHeader
         
        title={item.title}
        subheader={item.subheader}
        />
      <CardMedia
        component="img"
        height="194"
        image={item.img}
      />
      <CardContent>
        <Typography variant="body2" color="#afafaf">
          {item.mainInfo}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <IconButton style={{color:"white"}} aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
        style={{color:"white"}}
          expand={item.id==key&&!expanded}
          onClick={()=>{setKey(item.id);setExpanded(prev=>!prev);console.log(key)}}
          aria-expanded={true}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={key==item.id&&!expanded} unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
           {item.addInfo}
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
        ))}
        </Container>
  )
    }

    export default NewsCard