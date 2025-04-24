import React from "react";
import { CardData } from "../types/types";
import useImage from "use-image";
import { Stage, Layer, Rect, Text, Image, Circle } from "react-konva";
import { LANG_COLORS } from "../types/types";

// interface CanvasStageProps {
//   cardData: CardData;
// }

const CanvasStage: React.FC<{ cardData: CardData }> = ({ cardData }) => {
  const [photoImage] = useImage(cardData.photo);

  const renderBackground = () => {
    if (cardData.backgroundType === "gradient") {
      return (
        <Rect
          width={400}
          height={250}
          fillLinearGradientColorStops={[
            0,
            cardData.backgroundColor,
            1,
            "#000"
          ]}
          fillLinearGradientStartPoint={{ x: 0, y: 0 }}
          fillLinearGradientEndPoint={{ x: 400, y: 250 }}
        />
      );
    } else if (cardData.backgroundType === "bubbless") {
      return <Rect width={400} height={250} fill={cardData.backgroundColor} />;
      {
        [...Array(15)].map((_, i) => (
          <Circle
            key={i}
            x={Math.random() * 400}
            y={Math.random() * 20 + 5}
            fill="rgba(255,255,255,0.15)"
          />
        ));
      }
    } else {
      return <Rect width={400} height={250} fill={cardData.backgroundColor} />;
    }
  };

  return (
    <Stage width={400} height={250} className="rounded-xl shadow-lg">
      <Layer>
        {renderBackground()}
        {photoImage && (
          <Image
            image={photoImage}
            x={20}
            y={20}
            width={70}
            height={70}
            cornerRadius={35}
          />
        )}
        <Text
          text={cardData.name}
          fontStyle="bold"
          fontSize={24}
          fill="#fff"
          fontFamily="Cascadia Code"
          x={100}
          y={25}
        />
        <Text
          text={cardData.title}
          fontFamily="Cascadia Code"
          fontSize={18}
          fill="#ddd"
          x={100}
          y={50}
        />
        {cardData.description && (
          <Text
            text={cardData.description}
            fontSize={12}
            fill={"#ccc"}
            x={20}
            y={100}
            width={360}
          />
        )}
        {cardData.badges.map((badge, index) => (
          <React.Fragment key={badge + index}>
            <Rect
              x={20 + (index % 5) * 75}
              y={160}
              width={65}
              height={22}
              cornerRadius={12}
              fill={LANG_COLORS[badge]}
            />
            <Text
              text={badge}
              x={30 + (index % 5) * 75}
              y={167}
              fontSize={10}
              fill={"#fff"}
            />
          </React.Fragment>
        ))}
        {cardData.socialLinks.map((social, index) => (
          <Text
            key={social}
            text={social}
            x={20 + index * 80}
            y={220}
            fontSize={12}
            fill={"#ffffffcc"}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default CanvasStage;
