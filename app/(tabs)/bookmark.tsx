import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useState } from "react";
import { Skeleton } from "moti/skeleton";
import { AnimatePresence, View as MotiView } from "moti";

const Bookmark = () => {
  const [show, setShow] = useState(true);
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView>
      <AnimatePresence exitBeforeEnter>
        <MotiView
          from={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "timing", duration: 400 }}
        >
          <Text className="font-montserrat-bold text-center text-4xl text-green-600">
            Bookmarks
          </Text>

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
