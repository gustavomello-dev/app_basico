import { Text, View, Image, ScrollView } from 'react-native';

import { styles } from '../css/style';

export default function Sobre() {
  return (
    <View style={styles.caixa1}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <View>
          <Image source={require('../img/logo.jpg')} style={styles.imageLogo} />
        </View>
        <Text style={styles.titulo1}>Sobre a GM</Text>
        <Text style={styles.texto}>
          A GM nasceu da paixão pela alta performance automotiva e da dedicação
          em oferecer a melhor experiência de compra do mercado. Nosso portfólio
          é construído a partir de um estoque rigorosamente selecionado de
          veículos premium, onde cada unidade passa por criteriosas avaliações
          de procedência, integridade mecânica e conservação estética.
        </Text>
        <Text style={styles.texto}>
          Mais do que comercializar automóveis, nosso propósito é conectar
          motoristas exigentes a máquinas que reflitam seu momento e estilo de
          vida. Através de um atendimento consultivo, total transparência
          técnica e condições de negociação exclusivas, asseguramos que a
          aquisição do seu próximo veículo seja marcada por confiança, agilidade
          e realização.
        </Text>
      </ScrollView>
    </View>
  );
}
