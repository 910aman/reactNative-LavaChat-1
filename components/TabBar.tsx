import { Feather } from '@expo/vector-icons';
import { PlatformPressable, Text } from '@react-navigation/elements';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
type TabRouteName = "index" | "explore" | "friend" | "game" | "profile";

export function MyTabBar({ state, descriptors, navigation }: any) {
    const { colors } = useTheme();
    const { buildHref } = useLinkBuilder();

    const icons = {
        index: (props: any) => (<Feather name='home' size={24} {...props} />),
        explore: (props: any) => (<Feather name='search' size={24} {...props} />),
        friend: (props: any) => (<Feather name='users' size={24} {...props} />),
        game: (props: any) => (<Feather name='play' size={24} {...props} />),
        profile: (props: any) => (<Feather name='user' size={24} {...props} />),
    }

    return (
        <View style={styles.tabbar}>
            {state.routes.map((route: { key: string | number; name: string; params: object | undefined; }, index: any) => {
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
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <PlatformPressable
                        key={route.key}
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabbarItems}
                    >
                        {icons[route.name as TabRouteName]({
                            color: isFocused ? colors.primary : colors.text,
                        })}

                        <Text style={[styles.label, { color: isFocused ? colors.primary : colors.text }]}>
                            {label}
                        </Text>
                    </PlatformPressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 15,
        shadowColor: '#000',
        shadowRadius: 0.1,
        elevation: 5,
        shadowOffset: { width: 0, height: 10 }
    },
    tabbarItems: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    label: {
        marginTop: 5,
    }
})