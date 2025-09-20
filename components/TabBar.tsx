import { useState } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import TabbarButton from "./TabbarButton";

export function MyTabBar({ state, descriptors, navigation }: any) {
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });
  const buttonWidth = dimensions.width / state.routes.length;
  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const tabPositionX = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  return (
    <View style={styles.wrapper}>
      <View style={[styles.tabbar]} onLayout={onTabbarLayout}>
        <Animated.View
          style={[{
            position: "absolute",
            backgroundColor: "#723feb",
            borderRadius: 30,
            marginHorizontal: 12,
            height: buttonWidth - 15,
            width: buttonWidth - 25,
          }, animatedStyle]}
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
    bottom: 12,
    left: 1,
    right: 1,
    alignItems: "center",
  },
  activeHighlight: {
    position: "absolute",
    top: -8,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1976D2",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    zIndex: -1,
  },
  tabbar: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: 1,
    // marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowRadius: 0.1,
    elevation: 5,
    shadowOffset: { width: 0, height: 10 },
  },
  // tabbarItems: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     gap: 5
  // },
  // label: {
  //     marginTop: 5,
  // }
});
