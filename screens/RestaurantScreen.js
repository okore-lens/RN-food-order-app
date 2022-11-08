import { View, Text, ScrollView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View>
        {/* <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          classname="w-full h-56 bg-gray-300 p-4"
        /> */}
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-36  bg-gray-300  p-4 "
        />
      </View>
      <Text>{title}</Text>
    </ScrollView>
  );
};

export default RestaurantScreen;
