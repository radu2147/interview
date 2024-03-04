import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ContentData } from '../types/ContentData';
import Box from '@mui/material/Box';

type Props = {
  content: ContentData;
};

const ContentCard = ({ content }: Props) => {
  return (
    <Card
      variant="outlined"
      className="flex flex-1 justify-between font-mono"
      sx={{ height: '320px', width: '500px' }}
    >
      <div className="flex flex-col justify-between">
        <CardContent>
          <div className="line-clamp-2 font-mono font-medium mb-1.5 text-2xl">
            {content.name}
          </div>
          <div className="line-clamp-2 font-mono mb-1.5">
            {content.yearStart}
          </div>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitLineClamp: '7',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {content.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Like</Button>
        </CardActions>
      </div>
      <Box
        component="img"
        sx={{
          height: '100%',
          width: 240,
        }}
        alt="Poster image"
        src={content.posterURL}
      />
    </Card>
  );
};

export default ContentCard;
