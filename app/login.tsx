import { useState } from "react";
import { View, Image, TextInput, Text, Pressable } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useRouter } from "expo-router";

const Login = () => {
  const colorScheme = useColorScheme();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  return (
    <View className="bg-white dark:bg-slate-950 flex-1 flex-col flex items-center justify-center">
      <View className="mb-8">
        <Image
          source={require("@/assets/images/logo.png")}
          className="w-48 h-48"
        />
        <Text className="font-nunito text-center mt-2 text-white text-lg">
          Sign in to your account
        </Text>
      </View>

      <View className="px-0 w-3/4 mb-8">
        <TextInput
          className="border border-slate-400 dark:bg-slate-900 dark:text-white rounded-full h-12 font-nunito px-4 mb-4"
          value={formValues.email}
          placeholder="Email"
          placeholderTextColor={colorScheme === "dark" ? "#fff" : "#000"}
        />
        <TextInput
          className="border border-slate-400 dark:bg-slate-900 dark:text-white rounded-full h-12 font-nunito px-4 mb-4"
          value={formValues.password}
          placeholder="Password"
          placeholderTextColor={colorScheme === "dark" ? "#fff" : "#000"}
        />
        <Pressable
          onPress={() => router.push("/home")}
          className="rounded-full h-12 bg-green-600 flex items-center justify-center text-white"
        >
          <Text className="text-white font-montserrat-semibold text-lg">
            Login
          </Text>
        </Pressable>
      </View>

      <View className="w-3/4 mb-8 flex-row justify-between items-center gap-4">
        <View className="h-[1px] w-[35%] bg-slate-400 dark:bg-slate-600" />
        <Text className="dark:text-white text-lg">or</Text>
        <View className="h-[1px] w-[35%] bg-slate-400 dark:bg-slate-600" />
      </View>

      <View className="w-3/4 mb-4">
        <View className="dark:bg-slate-900 bg-slate-300/60 flex flex-row items-center justify-center rounded-full h-12">
          <Image
            source={require("@/assets/images/google-logo.png")}
            className="w-7 h-7"
          />
          <Text className="text-center dark:text-white ml-4 font-nunito text-sm">
            Continue with Google
          </Text>
        </View>
      </View>

      <View className="w-3/4 flex-row justify-center">
        <Text className="text-center dark:text-white ml-4 text-base font-nunito">
          Don't have an account?
        </Text>
        <Pressable>
          <Text className="text-green-500 font-nunito text-base ml-2">
            Sign up
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
