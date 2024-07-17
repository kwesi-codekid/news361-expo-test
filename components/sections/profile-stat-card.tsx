import { MotiView } from "moti";
import { Text } from "react-native";

export type ProfileStatCardProps = {
  value: string | number;
  label: string;
  delay?: number;
};

export default function ProfileStatCard({
  value,
  label,
  delay,
}: ProfileStatCardProps) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 500 }}
      delay={delay}
    >
      <Text className="font-montserrat-semibold text-sm text-slate-800 dark:text-white">
        {value}
      </Text>
      <Text className="font-nunito text-xs text-slate-500 dark:text-slate-300">
        {label}
      </Text>
    </MotiView>
  );
}
