import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimatePresence, View as MotiView, useAnimationState } from "moti";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "@/components/ui/button";
import Modal from "@/components/ui/modal";

const Profile = () => {
  const [show, setShow] = useState(false);

  return (
    <SafeAreaView>
      <View className="px-4">
        <Text className="font-montserrat-bold text-4xl text-green-600">
          Profile
        </Text>

        <Button color="success" onPress={() => setShow(true)} radius="xl">
          <Text className="text-white font-montserrat">Show modal</Text>
        </Button>
      </View>

      <Modal
        open={show}
        setOpen={setShow}
        title={
          <Text className="text-xl font-montserrat-semibold text-slate-800 dark:text-white">
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
