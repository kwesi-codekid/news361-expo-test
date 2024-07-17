import { View } from "react-native";

export type SpacerProps = {
  direction: "vertical" | "horizontal";
  space?: number;
};

export default function Spacer({ direction, space = 5 }: SpacerProps) {
  return (
    <View
      style={{
        [direction === "vertical" ? "height" : "width"]: space,
      }}
    ></View>
  );
}
