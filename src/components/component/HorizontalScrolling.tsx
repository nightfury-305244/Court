import { IconButton, Typography, styled } from '@mui/material';
import { useRef, useState, MouseEvent, useEffect } from 'react';

const HorizontalDiv = styled("div")(() => ({
  width: "fit-content",
  maxWidth: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  overflowX: "hidden",
  cursor: "grab",
  ".item": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "img": {
      width: "46px",
      height: "46px",
    },
    "h2": {
      width: "65px",
      textAlign: "center",
    }
  }
}));

interface Props {
  data: {
    url: string,
    name: string
  }[]
}

const HorizontalScrolling = (props: Props) => {
  const { data } = props;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  useEffect(() => {
    const element = sliderRef.current;
    if (element) {
      element.scrollLeft = element.scrollWidth - element.clientWidth;
    }
  }, [data]);

  const startDragging = (e: MouseEvent) => {
    const element = sliderRef.current;
    if (element) {
      setIsDown(true);
      setStartX(e.pageX - element.offsetLeft);
      setScrollLeft(element.scrollLeft);
    }
  };

  const stopDragging = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const element = sliderRef.current;
    if (element) { // Additional check for null
      const x = e.pageX - element.offsetLeft;
      const walk = (x - startX); // Adjust scroll speed here
      element.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <HorizontalDiv
      ref={sliderRef}
      onMouseDown={startDragging}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={handleMouseMove}
    >
      {data.map((item, index) => (
        <div key={index} className="item">
          <IconButton sx={{p: 0}}>
            <img src={item.url} alt={item.name} />
          </IconButton>
          <Typography variant='h2'>{item.name}</Typography>
        </div>
      ))}
    </HorizontalDiv>
  );
}

export default HorizontalScrolling;
