    import { Feather } from "@expo/vector-icons";

    export const icons = {
        index: (props: any) => (<Feather name='home' size={24} {...props} />),
        explore: (props: any) => (<Feather name='search' size={24} {...props} />),
        friend: (props: any) => (<Feather name='users' size={24} {...props} />),
        game: (props: any) => (<Feather name='play' size={24} {...props} />),
        profile: (props: any) => (<Feather name='user' size={24} {...props} />),
    }