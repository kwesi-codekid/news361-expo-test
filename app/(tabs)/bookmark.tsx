import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useState } from "react";
import { Skeleton } from "moti/skeleton";
import { AnimatePresence, MotiText, View as MotiView } from "moti";

const Bookmark = () => {
  const [show, setShow] = useState(true);
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView>
      <AnimatePresence exitBeforeEnter>
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "timing", duration: 500 }}
        >
          <MotiText
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "timing", duration: 500 }}
            className="font-montserrat-bold text-center text-4xl text-green-600"
          >
            Bookmarks
          </MotiText>

          <View className="px-4 mt-6">
            <View className="flex-row">
              <Skeleton
                show={show}
                radius={"round"}
                width={60}
                height={60}
                colorMode={colorScheme === "dark" ? "dark" : "light"}
              />
              <View className="ml-2">
                <Skeleton
                  show={show}
                  width={250}
                  height={25}
                  colorMode={colorScheme === "dark" ? "dark" : "light"}
                />
                <View className="mb-1" />
                <Skeleton
                  show={show}
                  width={200}
                  height={25}
                  colorMode={colorScheme === "dark" ? "dark" : "light"}
                />
              </View>
            </View>
            <View className="flex-row mt-5">
              <Skeleton
                show={show}
                radius={"round"}
                width={60}
                height={60}
                colorMode={colorScheme === "dark" ? "dark" : "light"}
              />
              <View className="ml-2">
                <Skeleton
                  show={show}
                  width={250}
                  height={25}
                  colorMode={colorScheme === "dark" ? "dark" : "light"}
                />
                <View className="mb-1" />
                <Skeleton
                  show={show}
                  width={200}
                  height={25}
                  colorMode={colorScheme === "dark" ? "dark" : "light"}
                />
              </View>
            </View>
            <View className="flex-row mt-5">
              <Skeleton
                show={show}
                radius={"round"}
                width={60}
                height={60}
                colorMode={colorScheme === "dark" ? "dark" : "light"}
              />
              <View className="ml-2">
                <Skeleton
                  show={show}
                  width={250}
                  height={25}
                  colorMode={colorScheme === "dark" ? "dark" : "light"}
                />
                <View className="mb-1" />
                <Skeleton
                  show={show}
                  width={200}
                  height={25}
                  colorMode={colorScheme === "dark" ? "dark" : "light"}
                />
              </View>
            </View>
            <View className="flex-row mt-5">
              <Skeleton
                show={show}
                radius={"round"}
                width={60}
                height={60}
                colorMode={colorScheme === "dark" ? "dark" : "light"}
              />
              <View className="ml-2">
                <Skeleton
                  show={show}
                  width={250}
                  height={25}
                  colorMode={colorScheme === "dark" ? "dark" : "light"}
                />
                <View className="mb-1" />
                <Skeleton
                  show={show}
                  width={200}
                  height={25}
                  colorMode={colorScheme === "dark" ? "dark" : "light"}
                />
              </View>
            </View>
          </View>
        </MotiView>
      </AnimatePresence>
    </SafeAreaView>
  );
};

export default Bookmark;
