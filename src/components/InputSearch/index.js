import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Container, ViewInput, InputSearch} from './styles';

export default function InputSearchComponent({
  value,
  onChangeText,
  onSubmitEditing,
  backgroundColor,
  paddingTop,
  paddingBottom,
}) {
  const [search, setSearch] = useState('');

  const detailsSearch = () => {
    navigation.navigate('DetailsSearch', {search});
  };

  return (
    <Container
      backgroundColor={backgroundColor}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}>
      <ViewInput>
        <Icon name='search' size={22} color={'#111'} />
        <InputSearch
          placeholder="Pesquisar"
          placeholderTextColor={'#000'}
          autoCapitalize="words"
          value={value || search}
          keyboardType="web-search"
          returnKeyType="search"
          onChangeText={onChangeText || setSearch}
          onSubmitEditing={onSubmitEditing || detailsSearch}
        />
      </ViewInput>
    </Container>
  );
}
