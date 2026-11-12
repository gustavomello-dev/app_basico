import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Vendas from './janelas/vendas';
import Contato from './janelas/contato';
import Sobre from './janelas/sobre';
import GridFotos from './janelas/gridFotos';
import Home from './janelas/home';

const Stack = createNativeStackNavigator();
import { Text, View, Image, ScrollView } from 'react-native';

import { styles } from './css/style';

export default function App() {
  return (
    <View style={styles.caixa1}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HO">
          <Stack.Screen name="HO" component={Home} />
          <Stack.Screen name="VD" component={Vendas} />
          <Stack.Screen name="SO" component={Sobre} />
          <Stack.Screen name="GF" component={GridFotos} />
          <Stack.Screen name="CTT" component={Contato} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
