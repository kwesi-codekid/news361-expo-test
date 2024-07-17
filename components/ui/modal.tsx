import { FontAwesome6 } from "@expo/vector-icons";
import { AnimatePresence, MotiView } from "moti";
import { ReactNode } from "react";
import { Pressable, View, Text, ScrollView } from "react-native";
import Button from "./button";
import { useColorScheme } from "@/hooks/useColorScheme";

export type ModalProps = {
  children: string | ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
  onOk: () => void;
  title: ReactNode;
};

const Modal = ({ children, open, setOpen, onOk, title }: ModalProps) => {
  const colorScheme = useColorScheme();

  return (
    <AnimatePresence>
      {open && (
        <MotiView
          from={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ type: "timing", duration: 400 }}
          className="absolute items-center justify-center bg-black/50 dark:bg-black/70 h-screen top-0 left-0 w-full"
        >
          <MotiView
            from={{
              opacity: 0,
              translateY: 20,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            exit={{
              translateY: 20,
              opacity: 0,
            }}
            transition={{ type: "timing", duration: 400 }}
            className="w-[90%] bg-white dark:bg-slate-900 rounded-3xl p-3 pt-2 justify-between dark:border dark:border-white/10"
          >
            {/* modal header */}
            <View className="flex-row items-center justify-between">
              {title}
              <Pressable onPress={() => setOpen(false)}>
                <FontAwesome6
                  name="times-circle"
                  size={24}
                  color={colorScheme === "dark" ? "#fff" : "#0f172a"}
                />
              </Pressable>
            </View>

            {/* modal body */}
            <ScrollView className="max-h-[50vh] !overflow-auto my-4 border">
              {children}
            </ScrollView>

            {/* modal footer */}
            <View className="flex-row items-center justify-end">
              <Button
                color="danger"
                onPress={() => setOpen(false)}
                radius="xl"
                classNames="w-max mr-2"
              >
                <Text className="text-white text-sm font-montserrat">
                  Cancel
                </Text>
              </Button>
              <Button
                color="success"
                onPress={() => {}}
                radius="xl"
                classNames=""
              >
                <Text className="text-white font-montserrat">Submit</Text>
              </Button>
            </View>
          </MotiView>
        </MotiView>
      )}
    </AnimatePresence>
  );
};

export default Modal;
