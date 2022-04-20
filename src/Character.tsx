import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Box, Button, IconButton, Paper, Skeleton, Stack, TextField } from "@mui/material";
import { saveAs } from 'file-saver';
import { FormEventHandler, FunctionComponent, useEffect, useRef, useState } from "react";
import { CHARACTER_PARTS } from "./questions";

interface Props {
  restart: () => void;
  answers: number[];
}

interface LoadedImage {
  image: HTMLImageElement;
  mode: GlobalCompositeOperation;
}

const Component: FunctionComponent<Props> = ({ restart, answers }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [images, setImages] = useState<LoadedImage[]>([]);
  const [name, setName] = useState<string>("");

  const onFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    restart();
  };

  useEffect(() => {
    let newImages: Promise<LoadedImage>[] = [];
    for (let i = 0; i < CHARACTER_PARTS.length; i++) {
      let failed = false;
      for (const required of CHARACTER_PARTS[i].required) {
        if (answers[required.question] !== required.option) {
          failed = true;
          break;
        }
      }

      if (!failed) {
        newImages.push(new Promise((resolve, reject) => {
          let image = new Image(0, 0);
          image.src = CHARACTER_PARTS[i].image;
          image.onload = () => { resolve({ image: image, mode: CHARACTER_PARTS[i].mode }); };
          image.onerror = () => { resolve({ image: image, mode: CHARACTER_PARTS[i].mode }); };
        }));
      }
    }

    let canceled = false;

    Promise.all(newImages).then((images) => {
      if (!canceled)
        setImages(images);
    });

    return () => {
      canceled = true;
      setImages([]);
    };
  }, [answers]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = 667;
    canvas.height = 800 + 75;

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    for (const image of images) {
      context.globalCompositeOperation = image.mode;
      context.drawImage(image.image, 0, 75, context.canvas.width, context.canvas.height - 75);
    }

    const getFontSizeToFit = (ctx: CanvasRenderingContext2D, text: string, fontFace: string, width: number, height: number) => {
      ctx.font = `1px ${fontFace}`;
      let fitFontHeight = height / 1.2;
      return Math.min(fitFontHeight, width / ctx.measureText(text).width)
    }

    context.globalCompositeOperation = "source-over";
    context.fillStyle = "black";
    context.font = getFontSizeToFit(context, name, "Arial", 250, 75) + "px Arial";
    context.textAlign = "center";
    context.textBaseline = 'middle';
    context.fillText(name, context.canvas.width / 2, context.canvas.height - 75, 275);
  }, [images, name]);

  const saveImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    saveAs(canvas.toDataURL("image/png"), `${name || "Character"}.png`);
  };

  return (
    <Box component="form" onSubmit={onFormSubmit} noValidate sx={{ height: "100%" }}>
      <Paper sx={{ p: { xs: 2, sm: 4 }, boxShadow: { xs: "none", sm: undefined }, height: { xs: "100%", sm: "auto" } }}>
        <Stack spacing={2}>
          <Box sx={{ display: "flex", flexDirction: "row", justifyContent: "center" }}>
            {images.length === 0 ?
              <Skeleton variant="rectangular" animation="wave">
                <canvas />
              </Skeleton> :
              <canvas ref={canvasRef} />
            }
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <TextField label="Name your character" autoFocus fullWidth variant="outlined" onChange={(event) => {
              setName(event.target.value);
            }} />
            <Box>
              <IconButton aria-label="download" onClick={saveImage}>
                <FileDownloadIcon />
              </IconButton>
            </Box>
          </Stack>
          <Button variant="contained" type="submit">Restart</Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Component;