import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimatePresence, MotiText, MotiView, useAnimationState } from "moti";
import { useEffect, useState } from "react";
import { FontAwesome5, Ionicons, Feather } from "@expo/vector-icons";
import Button from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import Spacer from "@/components/ui/spacer";
import { ThemedText } from "@/components/ThemedText";
import ProfileStatCard from "@/components/sections/profile-stat-card";
import { useColorScheme } from "@/hooks/useColorScheme";

const Profile = () => {
  const colorScheme = useColorScheme();
  const [show, setShow] = useState(false);
  const stats = [
    { label: "Followers", value: 219 },
    { label: "Following", value: 30 },
    { label: "Posts", value: 9 },
  ];

  return (
    <SafeAreaView>
      <View className="px-4 dark:bg-slate-950 min-h-screen">
        <View className="flex-row justify-between items-center">
          <Text className="font-montserrat-bold text-2xl text-green-600 my-4">
            Profile
          </Text>

          <View className="flex-row">
            <Pressable onPress={() => setShow(true)}>
              <Feather
                name="edit"
                size={24}
                color={colorScheme === "dark" ? "#fff" : "#000"}
              />
            </Pressable>
            <Spacer direction="horizontal" space={15} />
            <Ionicons
              name="settings-outline"
              size={24}
              color={colorScheme === "dark" ? "#fff" : "#000"}
            />
          </View>
        </View>

        <Spacer direction="vertical" space={5} />

        <View>
          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "timing", duration: 500 }}
            className="flex-row"
          >
            <View className="dark:bg-slate-800 w-20 h-20 rounded-full mr-8"></View>
            <View className="flex-1 justify-between flex-row items-center">
              {stats?.map((stat, index) => (
                <ProfileStatCard
                  value={stat.value}
                  label={stat.label}
                  delay={index * 100 + 300}
                />
              ))}
            </View>
          </MotiView>
          <View className="mt-2">
            <MotiText
              key={"name"}
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: "timing", duration: 500 }}
              delay={300}
              className="font-montserrat-semibold text-xl text-slate-800 dark:text-white"
            >
              Kwasi Bordes
            </MotiText>
            <MotiText
              key={"username"}
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: "timing", duration: 500 }}
              delay={500}
              className="text-slate-500 dark:text-slate-300 font-nunito text-xs mb-2"
            >
              @kwasi-codekid
            </MotiText>
            <MotiView
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: "timing", duration: 500 }}
              delay={800}
            >
              <Button
                color="success"
                onPress={() => setShow(true)}
                radius="lg"
                classNames="w-16 h-8 px-2"
              >
                <Text className="text-white font-montserrat text-xs">Edit</Text>
              </Button>
            </MotiView>
          </View>
        </View>

        <Spacer direction="vertical" space={20} />
      </View>

      <Modal
        open={show}
        setOpen={setShow}
        title={
          <Text className="text-lg font-montserrat-semibold text-slate-800 dark:text-white">
            Modal Title
          </Text>
        }
        onOk={() => setShow(false)}
      >
        <Text className="text-center font-montserrat">Modal content</Text>
      </Modal>
    </SafeAreaView>
  );
};

export default Profile;
