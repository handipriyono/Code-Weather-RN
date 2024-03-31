import { View, Text, Image as Img } from "react-native";
import PagerView from "react-native-pager-view";
import ItemCart from "./ItemCart";
import { useEffect, useRef } from "react";
import InfoList from "./InfoList";
import weatherImg from "../../../../commons/components/images/index";
import Styles from "./style";

const BarChart = ({ trigger, data, setSelectedIndex, page, selected }) => {
  const selectedIndex = selected?.sel;
  const viewPagerRef = useRef(null);

  useEffect(() => {
    viewPagerRef?.current?.setPage(selected?.sel);
  }, [trigger]);

  const formatDegree = (temp) => {
    const max = Math.round(temp?.max);
    const min = Math.round(temp?.min);
    return `${max}  / ${min} °C`;
  };

  return (
    <>
      <View style={Styles.barWrapper}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>
            {data?.[selectedIndex]?.weather?.[0]?.main}
          </Text>
          <Text style={{ fontSize: 12, color: "#808080" }}>
            {data?.[selectedIndex]?.weather?.[0]?.description}
          </Text>
        </View>
        <View>
          <View style={Styles.degree}>
            <Text style={{ fontSize: 13 }}>
              {formatDegree(data?.[selectedIndex]?.temp)}
            </Text>
            <Img
              style={{ width: 35, height: 35 }}
              source={weatherImg?.[data?.[selectedIndex]?.weather?.[0]?.icon]}
              contentFit="cover"
              transition={1000}
            />
          </View>
        </View>
      </View>
      <PagerView
        onPageSelected={(e) => {
          selected?.setSel(e?.nativeEvent?.position);
        }}
        ref={viewPagerRef}
        scrollEnabled
        style={Styles.pagerview}
        initialPage={0}
      >
        {data?.map((item, index) => (
          <View key={index}>
            <View style={{ marginHorizontal: 10 }}>
              <ItemCart />
            </View>
          </View>
        ))}
      </PagerView>

      <InfoList data={data?.[selectedIndex]} />
    </>
  );
};

export default BarChart;
