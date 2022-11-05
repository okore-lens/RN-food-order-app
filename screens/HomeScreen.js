import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search Section */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="space-x-2 flex-row  flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="grey" size={20} />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Our daily featured meals, tasty and hot from the oven!!!"
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Claim and grab your discount today!!!"
        />

        {/*Offers near you*/}
        <FeaturedRow
          id="1235"
          title="Offers Near You"
          description="What do the restaurants around have in store for you???"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
