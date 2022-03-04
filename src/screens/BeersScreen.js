import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {FETCH_DATA} from '../redux/beersReducer';

const BeersScreen = () => {
  const dispatch = useDispatch();
  const baseURL = 'https://api.sampleapis.com/beers/ale';
  const fetchData = async () => {
    const result = await fetch(baseURL);
    dispatch({
      type: FETCH_DATA,
      payload: result.data,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>Placeholder Text</Text>
    </View>
  );
};

export default BeersScreen;
