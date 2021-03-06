import React from 'react';
import { StatusBar, SafeAreaView, View} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading'

/*Componentes Criados */
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta'

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  if(fonteCarregada == true){
    return (
      <SafeAreaView style={{flex:1}}>
        <StatusBar/>
        <Cesta {...mock}/>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }else{
    return <AppLoading />
  }
  
}

//O componente App loading é utilizado para fazer com que nossa aplicação fique carregando com a tela inicial 