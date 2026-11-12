import { Text, View, Image, ScrollView,Button } from 'react-native';

import {styles} from '../css/style'

export default function Home({navigation}){
  return(
    <View style={styles.caixa1}>
      <ScrollView>
        <View>
          <Image
            source={require('../img/logo.jpg')}
            style={styles.imageLogo}
          />
        </View>
        <Text style={styles.titulo1}>App 01 - Aluno</Text>
        <View style={styles.cxButton}>
        <Button title='Grade de Fotos' onPress={()=>navigation.navigate('GF')}/>
        <Button title='Vendas' onPress={()=>navigation.navigate('VD')}/>
        <Button title='Sobre' onPress={()=>navigation.navigate('SO')}/>
        <Button title='Contato' onPress={()=>navigation.navigate('CTT')}/>
        </View>
        
      </ScrollView>
    </View>

  )
}