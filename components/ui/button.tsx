import { AnimatePresence, MotiView } from "moti";
import React from "react";
import { ReactNode, useState } from "react";
import { Pressable, View } from "react-native";

export type ButtonProps = {
  children: string | ReactNode;
  onPress: () => void;
  color?: "primary" | "danger" | "success" | "default" | undefined;
  radius?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  classNames?: string | undefined;
};

const Button = ({
  children,
  onPress,
  color = "default",
  radius = "sm",
  classNames,
}: ButtonProps) => {
  const [showRipple, setShowRipple] = useState(false);
  const handleRippleEffect = () => {
    setShowRipple(true);
    const timeoutId = setTimeout(() => {
      setShowRipple(false);

      clearTimeout(timeoutId);
    }, 500);
  };

  return (
    <Pressable
      onPress={() => {
        handleRippleEffect();
        onPress();
      }}
      className={`${
        color === "primary"
          ? "bg-blue-600"
          : color === "danger"
          ? "bg-red-500"
          : color === "success"
          ? "bg-green-500"
          : "bg-slate-500"
      } px-5 flex items-center justify-center ${
        radius === "full"
          ? "rounded-full"
          : radius === "md"
          ? "rounded-md"
          : radius === "lg"
          ? "rounded-lg"
          : radius === "xl"
          ? "rounded-xl"
          : radius === "2xl"
          ? "rounded-2xl"
          : radius === "3xl"
          ? "rounded-3xl"
          : "rounded-sm"
      } h-9 relative overflow-hidden ${classNames}`}
    >
      <View className={`flex flex-row items-center justify-center z-10`}>
        {children}
      </View>

      <AnimatePresence exitBeforeEnter>
        {showRipple && (
          <MotiView
            from={{
              opacity: 0,
              scale: 0.1,
            }}
            animate={{
              opacity: 1,
              scale: 5.5,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "timing", duration: 300 }}
            className={`absolute align-middle ${
              color === "primary"
                ? "bg-blue-400/70"
                : color === "danger"
                ? "bg-red-300/70"
                : color === "success"
                ? "bg-green-400/70"
                : "bg-slate-300/20"
            } w-8 h-8 rounded-full`}
          />
        )}
      </AnimatePresence>
    </Pressable>
  );
};

export default Button;
