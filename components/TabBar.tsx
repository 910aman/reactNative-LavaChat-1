import React, { useEffect, useState } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import TabbarButton from "./TabbarButton";

export const MyTabBar = ({ state, descriptors, navigation }: any) => {
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });
  const buttonWidth = dimensions.width / state.routes.length;
  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const tabPositionX = useSharedValue(0);
  const highlightColor = useSharedValue(0);

  useEffect(() => {
  // move highlight to current tab
  tabPositionX.value = withSpring(buttonWidth * state.index, {
    damping: 15,
    stiffness: 120,
  });

  // animate background color when focus changes
  highlightColor.value = withSpring(1, { damping: 15, stiffness: 120 });

  const timeout = setTimeout(() => {
    highlightColor.value = withSpring(0, { damping: 15, stiffness: 120 });
  }, 400);

    return () => clearTimeout(timeout);
}, [buttonWidth, highlightColor, state.index, tabPositionX]);

  const animatedStyle = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      highlightColor.value,
      [0, 1],
      ["transparent", "#1376ceff"] // unfocused → focused
    );

    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  return (
    <View style={styles.wrapper}>
      <View style={[styles.tabbar]} onLayout={onTabbarLayout}>
        <Animated.View
          style={[
            {
              marginHorizontal: 5,
              position: "absolute",
              backgroundColor: "#1376ceff",
              borderRadius: 6,
              width: buttonWidth - 10,
              height: buttonWidth - 5,
            },
            animatedStyle,
          ]}
        />
        {state.routes.map(
          (
            route: {
              key: string | number;
              name: string;
              params: object | undefined;
            },
            index: any
          ) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
                tabPositionX.value = index * buttonWidth;
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <TabbarButton
                key={route.name}
                onPress={onPress}
                onLongPress={onLongPress}
                isFocused={isFocused}
                routeName={route.name}
                label={label}
                color={isFocused ? "#000" : "#222"}
                defaultWidth={buttonWidth}
              />
              // <PlatformPressable
              //     key={route.key}
              //     href={buildHref(route.name, route.params)}
              //     accessibilityState={isFocused ? { selected: true } : {}}
              //     accessibilityLabel={options.tabBarAccessibilityLabel}
              //     testID={options.tabBarButtonTestID}
              //     onPress={onPress}
              //     onLongPress={onLongPress}
              //     style={styles.tabbarItems}
              // >
              //     {icons[route.name as TabRouteName]({
              //         color: isFocused ? colors.primary : colors.text,
              //     })}

              //     <Text style={[styles.label, { color: isFocused ? colors.primary : colors.text }]}>
              //         {label}
              //     </Text>
              // </PlatformPressable>
            );
          }
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  activeHighlight: {
    position: "absolute",
    top: -8,
    // width: 220,
    height: 60,
    borderRadius: 5,
    backgroundColor: "#1976D2",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    zIndex: -1,
  },
  // wrapper: {
  //   position: "absolute",
  //   bottom: 5,
  //   left: 0,
  //   right: 0,
  //   width: "100%",
  //   alignItems: "center",
  // },
  // tabbar: {
  //   flexDirection: "row",
  //   width: "100%",
  //   paddingHorizontal: 30,
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   backgroundColor: "#4227f1ff",
  //   borderRadius: 25,
  //   shadowColor: "#000",
  //   shadowRadius: 0.1,
  //   elevation: 5,
  //   shadowOffset: { width: 10, height: 10 },
  // },
  // In tabbar style
  // tabbar: {
  //   position: "absolute",
  //   bottom: 0,
  //   // left: 0,
  //   // right: 0,
  //   width: "100%",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   backgroundColor: "#ceff08ff",
  //   borderRadius: 10,
  //   shadowColor: "#000",
  //   shadowOpacity: 0.25,
  //   shadowRadius: 6,
  //   shadowOffset: { width: 4, height: 4 },
  //   paddingVertical: 0,
  //   paddingHorizontal: -20,
  //   height: 70,
  // },
  tabbar: {
    position: "absolute",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    bottom: 1,
    width: "100%",
    backgroundColor: "#d5ef0eff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowRadius: 0.1,
    elevation: 5,
    shadowOffset: { width: 0, height: 10 },
  },
  tabbarItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  label: {
    marginTop: 5,
  },
});
