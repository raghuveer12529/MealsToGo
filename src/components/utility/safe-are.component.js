import { StatusBar, SafeAreaView, Text, View } from "react-native";
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.height && `margin-top: ${StatusBar.height}px`};
  background-color :  ${ props => props.theme.colors.bg.primary};
`;