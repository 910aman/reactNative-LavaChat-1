import { icons } from "@/constants/icons";
import React, { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
type TabRouteName = "index" | "explore" | "friend" | "game" | "profile";

const TabbarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  color,
  label,
  defaultWidth,
}: {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
  color: string;
  label: string;
  defaultWidth: number;
}) => {
  const scale = useSharedValue(0);
  const widthAnim = useSharedValue(defaultWidth);

  useEffect(() => {
    // scale.value = withSpring(
    //   typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
    //   { duration: 350 }
    // );

    scale.value = withSpring(isFocused ? 1 : 0, {
      damping: 12,
      stiffness: 120,
    });
    widthAnim.value = withSpring(
      isFocused ? defaultWidth * 1.3 : defaultWidth,
      {
        damping: 15,
        stiffness: 120,
      }
    );
  }, [scale, isFocused, widthAnim, defaultWidth]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.6]);
    const top = interpolate(scale.value, [0, 1], [0, -12]);
    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [0.5, 1]);
    return { opacity };
  });

  // const animatedButtonStyle = useAnimatedStyle(() => {
  //     return { width: widthAnim.value };
  // });

  return (
    <Animated.View style={styles.animatedBtn}>
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.tabbarItems}
      >
        <Animated.View style={animatedIconStyle}>
          {icons[routeName as TabRouteName]({
            color: isFocused ? "#ffffffff" : "#222",
          })}
        </Animated.View>
        <Animated.Text
          style={[
            {
              color: isFocused ? "#ffffffff" : "#000000ff",
              fontSize: isFocused ? 15 : 12,
            },
            animatedTextStyle,
          ]}
        >
          {label}
        </Animated.Text>
      </Pressable>
    </Animated.View>
  );
};

export default TabbarButton;

const styles = StyleSheet.create({
  // tabbarItems: {
  //   width: "100%",
  //   height: 70,
  //   flex: 1,
  //   zIndex: 4,
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   gap: 5,
  //   backgroundColor: '#b53d3dff',
  //   paddingVertical: 10,
  // },
  //   animatedBtn: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //     backgroundColor: "#64d111ff",
  //   },
  tabbarItems: {
    flex: 1,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  animatedBtn: {
    flex: 1,
    borderRadius: 0,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    // shadowColor: "#ff2020ff",
  },
  label: {
    marginTop: 5,
  },
});
