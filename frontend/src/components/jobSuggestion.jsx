import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Chip, Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2896920655.
import { CardActionArea } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CallIcon from '@mui/icons-material/Call';



 export default function JobSuggestion(props){
    const job = props.job;
    return (
            <div>
                <Card sx={{  }} style={{"borderRadius" : "10px", "margin":"20px"} }>
                    <CardContent>
                        <Typography sx={{ fontSize: 20, marginBlock:1 }} color="text.secondary" gutterBottom style = {{"fontWeight":"bold", "display": "flex" , "alignItems": "center"}}>
                            <ApartmentIcon />{job.companyName}
                        </Typography>
                        <Typography variant="h5" component="div" color="blue">
                            {job.jobTitle}
                        </Typography>
                        <Typography sx={{ mb: 1.5 , marginBlock:1 }} color="text.secondary" style={{"display": "flex" , "alignItems": "center"}}>
                            <LocationOnIcon /> {job.location}
                        </Typography>
                        <Typography variant="body2" sx ={{marginBlock:1, fontSize:17}} style={{"fontWeight":"bold"}}>
                            כישורים נדרשים
                        </Typography>
                        <Typography variant="body2">
                            {
                                job.skills.map((skill)=>{
                                    return (
                                        <Chip label={skill.name} sx={{marginRight:1}}/>
                                    );
                                })
                            }
                        </Typography>
                        <Typography variant="body2" sx={{marginBlock:2}}>
                            {job.description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{alignItems: "center", justifyContent:"space-between"}} >
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" style={{"display": "flex" , "alignItems": "center"}}>
                            <CallIcon sx = {{margin:1}} />{job.contactInfo}
                        </Typography>
                        <Button sx = {{fontsize:14}} style={{"display": "flex" , "alignItems": "right"}} href = {job.link} target="_blank"> קרא עוד</Button>
                    </CardActions>
                </Card>        
            </div>
    );
}

