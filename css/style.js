import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  caixa1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo1: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  caixa2: {
    width: 200,
    height: 200,
    backgroundColor: '#0ff',
    borderWidth: 2,
    borderColor: '#0f0',
    marginLeft: 30,
    marginBottom: 20,
    paddingLeft: 50,
    paddingTop: 50,
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 20,
  },
  cxImgPai: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderColor: '#00f',
    borderStyle: 'Solid',
    borderWidth: 4,
    margin: 15,
    padding: 15,
    borderRadius: 20,
    flexDirection: 'column',
    gap: 10,
  },
  cxImg: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  imageLogo: {
    width: 300,
    height: 140,
    margin: 'auto',
    resizeMode: 'cover',
  },
  imagem_venda: {
    width: 270,
    height: 140,
    margin: 'auto',
    resizeMode: 'contain',
  },
  imagem_ctt: {
    width: 270,
    height: 140,
    margin: 'auto',
    resizeMode: 'contain',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 10,
  },
  carros: { width: '48%', height: 100 },
});
