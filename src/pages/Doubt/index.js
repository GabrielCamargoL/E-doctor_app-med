import React, { useState, useEffect } from 'react';
import {RefreshControl} from 'react-native';
import { Container, Title } from './styles';

import api from '../../services/api';
import DoubtCard from '../../components/DoubtCard';

export default function Dobout({navigation}) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [doubt, setDoubt] = useState([]);

  useEffect(() => {
    getDoubt()
  }, [navigation]);

  const onRefresh = React.useCallback(() => {
    getDoubt()
  }, []);

  const getDoubt = async () => {
    try {
      setRefreshing(true);
      const response = await api.get('patientAuth/doubt/index');
      setDoubt(response.data)
      setRefreshing(false);

    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Container
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {doubt.length > 0 ? (
          <>
            {doubt.map(doubt => (
              <DoubtCard
                key={doubt.id}
                navigation={navigation}
                data={doubt}
                doubtId={doubt.id}
              />
            ))}
          </>
        ):(
          <>
            <Title>Não há dúvidas para serem mostradas</Title>
          </>
        )}

      </Container>
    </>
  );
}