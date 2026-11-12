import { Text, View, Image, ScrollView } from 'react-native';

import { styles } from '../css/style';

export default function Contato() {
  return (
    <View style={styles.caixa1}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <View>
          <Image source={require('../img/contatos.avif')} style={styles.imagem_ctt} />
        </View>
        <Text style={styles.titulo1}>Fale com a Nossa Equipe GM</Text>
        <Text style={styles.texto}>
          Pronto para agendar o seu test drive ou tem alguma dúvida sobre o
          nosso estoque premium? Os nossos consultores automotivos estão à
          disposição para oferecer um atendimento ágil, transparente e exclusivo
          para você encontrar o seu próximo veículo. 
        </Text>
        <Text style={styles.texto}>
          {"\n"}E-mail de Vendas: comercial@gmautomoveis.com.br {"\n"} {"\n"} Central de
          Atendimento: 0800 555 0199 {"\n"} {"\n"} WhatsApp (Consultores): +55 (11) 99999-1010 {"\n"} {"\n"}
          Endereço da Concessionária: Avenida dos Motores, 1024 - Bairro Alta
          Performance, São Paulo/SP. {"\n"} {"\n"}Horário de Funcionamento: Segunda a Sexta,
          das 09h às 19h | Sábados, das 09h às 14h.
        </Text>
      </ScrollView>
    </View>
  );
}
