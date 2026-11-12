import { Text, View, Image, ScrollView } from 'react-native';

import { styles } from '../css/style';

export default function GridFotos() {

  const imagens = [
    { id: 1, uri: require('../img/gemera.webp') },
    { id: 2, uri: require('../img/la-voiture-noire_600x600.jpg') },
    { id: 3, uri: require('../img/p1.jpg') },
    { id: 4, uri: require('../img/revuelto.jpg') },
    { id: 5, uri: require('../img/RS6.jpg') },
    { id: 6, uri: require('../img/sf90.jpg') },
  ];
  return (
    <View style={styles.caixa1}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titulo1}>Nosso Showroom Digital</Text>
        <Text style={styles.texto}>
          Conheça de perto a qualidade do nosso estoque premium. Nesta galeria
          de fotos, destacamos cada detalhe das máquinas disponíveis em nossa
          concessionária — das linhas aerodinâmicas da carroceria ao acabamento
          refinado dos interiores. Navegue pelas imagens, sinta a exclusividade
          de cada modelo e encontre a inspiração para o seu próximo grande
          investimento sobre quatro rodas.
        </Text>
        <View style={styles.grid}>
          {imagens.map((img) => (
          <Image 
            key={img.id} 
            source={img.uri} 
            style={styles.carros} 
            resizeMode="cover"
          />
        ))}
          
        </View>
      </ScrollView>
    </View>
  );
}
