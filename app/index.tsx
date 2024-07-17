import { Link } from "expo-router";
import { Image, View, Text, Pressable } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useColorScheme } from "@/hooks/useColorScheme";
export default function OnboardingInde() {
  const color = useColorScheme();

  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        pages={[
          {
            backgroundColor: color === "dark" ? "#020617" : "#bfdbfe",
            image: (
              <Image
                source={require("@/assets/illustrations/person-with-bullhorn.png")}
                style={{ width: 300, height: 300 }}
              />
            ),
            title: (
              <Text className="text-3xl text-blue-600 dark:text-white text-center font-montserrat-bold mb-3 px-4">
                Stay Updated, 24/7
              </Text>
            ),
            subtitle: (
              <Text className="text-slate-950 dark:text-slate-300 text-center px-12 text-base font-nunito">
                Welcome to News361, your ultimate destination for breaking news
                and exclusive stories.
              </Text>
            ),
          },
          {
            backgroundColor: color === "dark" ? "#020617" : "#bbf7d0",
            image: (
              <Image
                source={require("@/assets/illustrations/money-coin-up.png")}
                style={{ width: 300, height: 300 }}
              />
            ),
            title: (
              <Text className="text-3xl text-green-600 dark:text-white text-center font-montserrat-bold mb-3">
                Earn With Us
              </Text>
            ),
            subtitle: (
              <Text className="text-slate-950 dark:text-slate-300 text-center px-12 text-base font-nunito">
                Get paid by sharing news articles and stories with us.
              </Text>
            ),
          },
        ]}
        DotComponent={({ selected }) => (
          <View
            style={{
              width: selected ? 30 : 6,
              height: 6,
              borderRadius: 10,
              marginHorizontal: 2,
              backgroundColor: selected ? "#fff" : "rgba(255, 255, 2555, 0.52)",
            }}
          />
        )}
        DoneButtonComponent={() => (
          <Pressable className="rounded-full h-9 bg-green-600 flex items-center justify-center text-white pr-3 px-4 mr-4">
            <Link href={"/login"} className="text-white font-montserrat">
              Continue
            </Link>
          </Pressable>
        )}
        NextButtonComponent={() => (
          <Pressable className="rounded-full h-9 bg-green-600 flex items-center justify-center px-6 mr-4">
            <Text className="text-white font-montserrat">Next</Text>
          </Pressable>
        )}
        SkipButtonComponent={() => (
          <Pressable className="rounded-full h-9 bg-slate-600/50 flex items-center justify-center px-6 ml-4">
            <Text className="text-white font-montserrat">Skip</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
