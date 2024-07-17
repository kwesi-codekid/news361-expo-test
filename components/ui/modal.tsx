import { FontAwesome6 } from "@expo/vector-icons";
import { AnimatePresence, MotiView } from "moti";
import { ReactNode } from "react";
import { Pressable, View, Text } from "react-native";
import Button from "./button";

export type ModalProps = {
  children: string | ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
  onOk: () => void;
  title: ReactNode;
};

const Modal = ({ children, open, setOpen, onOk, title }: ModalProps) => {
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
          className="absolute items-center justify-center bg-black/30 h-screen top-0 left-0 w-full"
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
            className="w-[90%] h-60 bg-white dark:bg-slate-950 rounded-3xl p-3 justify-between"
          >
            {/* modal header */}
            <View className="flex-row items-center justify-between">
              {title}
              <Pressable onPress={() => setOpen(false)}>
                <FontAwesome6
                  name="times-circle"
                  size={24}
                  className="text-slate-800 dark:text-white"
                />
              </Pressable>
            </View>

            {/* modal body */}
            <View>{children}</View>

            {/* modal footer */}
            <View className="flex-row items-center justify-end">
              <Button
                color="danger"
                onPress={() => setOpen(false)}
                radius="xl"
                className="mr-2 w-2"
              >
                <Text className="text-white font-montserrat">Cancel</Text>
              </Button>
              <Button
                color="success"
                onPress={onOk}
                radius="xl"
                className="w-2"
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
