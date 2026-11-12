import { Text, View, Image, ScrollView } from 'react-native';

import { styles } from '../css/style';

export default function Vendas() {
  return (
    <View style={styles.caixa1}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <View>
          <Image
            source={require('../img/carrinho-de-compras.png')}
            style={styles.imagem_venda}
          />
        </View>
        <Text style={styles.titulo1}>Vendas GM</Text>
        <Text style={styles.texto}>
          Seu próximo carro premium está aqui na GM. Veículos de alta
          performance com garantia e procedência impecável. Condições exclusivas
          de financiamento e supervalorização do seu usado. Agende seu test
          drive hoje e sinta a experiência ao volante.
        </Text>
        
      </ScrollView>
    </View>
  );
}
