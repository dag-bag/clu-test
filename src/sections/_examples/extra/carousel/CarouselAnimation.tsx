import { m } from 'framer-motion';
import { useState, useRef } from 'react';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Card, Paper, Button, Typography, CardContent } from '@mui/material';
// utils
import { bgGradient } from '../../../../utils/cssStyles';
// components
import Image from '../../../../components/image';
import { MotionContainer, varFade } from '../../../../components/animate';
import Carousel, { CarouselArrowIndex } from '../../../../components/carousel';
import { Datum } from '~/features/types/carousel';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

type Props = {
  data: Datum[];
};

export default function CarouselAnimation({ data }: Props) {

  const theme = useTheme();
  const { push } = useRouter()
  const carouselRef = useRef<Carousel | null>(null);
  const [currentIndex, setCurrentIndex] = useState(theme.direction === 'rtl' ? data.length - 1 : 0);

  const carouselSettings = {
    speed: 800,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  const handleClick = () => {
    push('/')
  }

  return (
    <Card onClick={handleClick}>
      <Carousel ref={carouselRef} {...carouselSettings}>
        {data.map((item, index) => (
          <CarouselItem key={item.id} item={item} isActive={index === currentIndex} />
        ))}
      </Carousel>
      <CarouselArrowIndex
        index={currentIndex}
        total={data.length}
        onNext={handleNext}
        onPrevious={handlePrev}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  item: Datum;
  isActive: boolean;
};

function CarouselItem({ item, isActive }: CarouselItemProps) {
  const theme = useTheme();

  const {
    attributes: { title, href, description, cover },
  } = item;
  return (
    <Paper sx={{ position: 'relative', height: '400px' }}>
      <Image sx={{ height: '400px' }} alt={title} src={cover?.data.attributes.url} />

      <Box
        sx={{
          top: 0,
          width: 1,
          height: 1,
          position: 'absolute',
          ...bgGradient({
            direction: 'to top',
            startColor: `${theme.palette.grey[600]} 0%`,
            endColor: `${alpha(theme.palette.grey[900], 0)} 100%`,
          }),
        }}
      />

      <CardContent
        component={MotionContainer}
        animate={isActive}
        action
        sx={{
          bottom: 0,
          width: 1,
          maxWidth: 720,
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <m.div variants={varFade().inRight}>
          <Typography variant="h3" gutterBottom>
            {title}
          </Typography>
        </m.div>

        <m.div variants={varFade().inRight}>
          <Typography variant="body2" noWrap gutterBottom>
            {description}
          </Typography>
        </m.div>

        <m.div variants={varFade().inRight}>
          <Button variant="contained" sx={{ mt: 3 }}>
            View More
          </Button>
        </m.div>
      </CardContent>
    </Paper>
  );
}
