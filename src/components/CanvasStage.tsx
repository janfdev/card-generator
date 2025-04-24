import React from "react";
import { CardData } from "../types/cardTypes";
import useImage from "use-image";
import { Stage, Layer, Rect, Text, Image } from "react-konva";

interface CanvasStageProps {
  cardData: CardData;
}

const CanvasStage: React.FC<CanvasStageProps> = ({ cardData }) => {
  const [photoImage] = useImage(cardData.photo);
  return (
    <Stage width={400} height={250}>
      <Layer>
        <Rect
          width={400}
          cornerRadius={20}
          height={250}
          fill={cardData.backgroundColor}
        />
        {photoImage && (
          <Image
            image={photoImage}
            x={20}
            y={20}
            width={80}
            height={80}
            cornerRadius={100}
          />
        )}
        <Text
          text={cardData.name}
          fontStyle="bold"
          fontSize={24}
          fill="#fff"
          fontFamily="Cascadia Code"
          x={120}
          y={40}
        />
        <Text
          text={cardData.title}
          fontFamily="Cascadia Code"
          fontSize={18}
          fill="#ddd"
          x={120}
          y={70}
        />
      </Layer>
    </Stage>
  );
};

export default CanvasStage;
