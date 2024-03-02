import React ,{useState} from 'react'
import { Typography, Button, Card, CardContent, CardActions, Grid } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Rating from '@mui/material/Rating'

const reviews =[
    {
      id: 1,
      text: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century.",
      author: "John Doe"
    },
    {
      id: 2,
      text: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories. ",
      author: "Jane Smith"
    },
    {
      id: 3,
      text: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. ",
      author: "Alice Johnson"
    }
  ];
const Reviews = () => {

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const [value, setValue] = useState(5);

    const handleNextReview = () => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };
  
    const handlePrevReview = () => {
      setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };
  return (
    <Grid container direction="column" alignItems="center" spacing={2} >
      <Grid item>
        <Card variant="outlined" style={{ height: '350px' }}>
          <CardContent>
            <div style={{marginTop: '1rem'}} >
            <Typography variant="body1" align="center" gutterBottom>
              {reviews[currentReviewIndex].text}
            </Typography>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' , padding: '1rem' }}>
              <Rating name="read-only" value={value} readOnly />
            </div>
            
            <Typography variant="body2" align="center" color="textSecondary">
              - {reviews[currentReviewIndex].author}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button onClick={handlePrevReview} startIcon={<ArrowBackIos />}>
              Prev
            </Button>
            <Button onClick={handleNextReview} endIcon={<ArrowForwardIos />}>
              Next
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Reviews
