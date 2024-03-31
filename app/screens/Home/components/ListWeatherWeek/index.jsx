import { View, Text, TouchableOpacity, Image as Img } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { AntDesign } from "@expo/vector-icons";
import dayjs from "dayjs";
import WeatherImg from "../../../../commons/components/images";
import Styles from "./style";

const ListWeatherWeek = ({ data, onClickDay }) => {
  const convertUnix = (time) => {
    return dayjs.unix(time);
  };

  const formatDate = (t) => {
    return convertUnix(t)?.format("ddd MMM DD");
  };

  const formatDegree = (temp) => {
    const max = Math.round(temp?.max);
    const min = Math.round(temp?.min);
    return `${max}  / ${min} °C`;
  };

  return (
    <>
      <View style={{ marginTop: 8, paddingHorizontal: 5 }}>
        <FlashList
          data={data}
          estimatedItemSize={50}
          contentContainerStyle={{
            paddingBottom: 5,
          }}
          showsHorizontalScrollIndicator
          renderItem={({ item, index }) => (
            <TouchableOpacity
              delayPressIn={0}
              onPress={() =>
                requestAnimationFrame(() => {
                  onClickDay({ item, index });
                })
              }
            >
              <View style={Styles.wrapper}>
                <View style={Styles.center}>
                  <Text style={{ fontSize: 12 }}>{formatDate(item?.dt)}</Text>
                </View>
                <View style={Styles.innerWrapper}>
                  <View>
                    <Text style={{ fontSize: 12 }}>
                      {formatDegree(item?.temp)}
                    </Text>
                  </View>
                  <View>
                    <Img
                      style={{ width: 35, height: 25 }}
                      source={WeatherImg?.[item?.weather?.[0]?.icon]}
                    />
                  </View>
                  <View>
                    <AntDesign
                      name="right"
                      color="#808080"
                      size={16}
                      style={{ color: "#808080" }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default ListWeatherWeek;
