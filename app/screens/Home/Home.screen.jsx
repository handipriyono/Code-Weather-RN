import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  RefreshControl,
  Image as Img,
} from "react-native";
import LineCart from "./components/ChartLine/index";
import BoxInfo from "./components/BoxInfo/index";
import TimeTemperature from "./components/TimeTemperature/index";
import ListWeatherWeek from "./components/ListWeatherWeek";
import DateList from "./components/DateList";
import useWeather from "./hooks/useWeather";
import weatherImages from "../../commons/components/images/index";
import Styles from "./Home.style";
import { useState, useCallback, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

const HomePage = () => {
  const [refreshing, setRefreshing] = useState(false);

  const {
    data,
    showGrap,
    onClickDay,
    onCloseGraph,
    setTriggerSetPage,
    triggerSetPage,
    onRefresh: onRefreshData,
  } = useWeather();

  const onRefresh = () => {
    setRefreshing(true);
    onRefreshData();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={Styles.outer}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <View style={{ paddingRight: 5 }}>
              <Img
                style={Styles.imgWeather}
                source={weatherImages?.[data?.current?.weather?.[0]?.icon]}
              />
            </View>
            <View>
              <Text style={Styles.textTitle}>
                {data?.current?.weather?.[0]?.main}
              </Text>
              <Text style={Styles.textSubtitle}>
                {data?.current?.weather?.[0]?.description}
              </Text>
            </View>
          </View>

          <View style={Styles.tempWrapper}>
            <Text style={Styles.titleTemp}>
              {Math?.round(data?.current?.temp || 0)}°C
            </Text>
            <Text style={Styles.textSubtitle}>
              Feels like {Math?.round(data?.current?.feels_like || 0)}°C
            </Text>
          </View>
          <Text style={Styles.participant}>
            No precitipation within an hour
          </Text>
        </View>
        <LineCart data={data?.daily} />
        <BoxInfo data={data?.current} />
        <TimeTemperature data={data?.hourly} current={data?.current} />
        {showGrap ? (
          <>
            <DateList
              // onClickItem={onClickDay}
              data={data?.daily}
              page={{ setTriggerSetPage, triggerSetPage }}
              onClickOption={onCloseGraph}
            />
          </>
        ) : (
          <ListWeatherWeek data={data?.daily} onClickDay={onClickDay} />
        )}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default HomePage;
