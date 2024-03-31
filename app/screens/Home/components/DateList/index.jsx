import { View, Text, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import dayjs from "dayjs";
import Styles from "./style";
import { useState } from "react";
import BarChart from "../BarChart/index";

const BoxDate = ({ item, selected, onClickItem, selectedId, index }) => {
  const convertUnix = (time) => {
    return dayjs.unix(time);
  };
  const timeLabel = (time) => {
    return convertUnix(time)?.format("ddd:DD")?.split(":");
  };

  return (
    <TouchableOpacity
      delayPressIn={0}
      key={index}
      onPress={() => {
        // requestAnimationFrame(() => {
        onClickItem({ index });
        // });
      }}
    >
      <View
        key={index}
        style={{
          ...Styles.boxDate,
          ...(selectedId == index && {
            backgroundColor: "#eee",
            borderRadius: 8,
          }),
        }}
      >
        <Text style={Styles.text}>{timeLabel(item?.dt)?.[0]}</Text>
        <Text style={{ fontSize: 12, color: selected ? "#000" : "#808080" }}>
          {timeLabel(item?.dt)?.[1]}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const DateList = ({ onClickOption, data, selectedIndex, page }) => {
  const [sel, setSel] = useState(0);
  const [trigger, setTrigger] = useState(false);

  const handleClickItem = (e) => {
    // dispatch(update(e?.index));
    // page?.setTriggerSetPage((prev) => !prev);
    // onClickItem(e);
    setTrigger((prev) => !prev);
    setSel(e?.index);
  };

  return (
    <>
      <View style={Styles.dateListWrapper}>
        <View style={{ flexDirection: "row" }}>
          {data?.map((item, idx) => (
            <View key={idx}>
              <BoxDate
                onClickItem={handleClickItem}
                index={idx}
                item={item}
                selectedId={sel}
                selected={idx == sel}
              />
            </View>
          ))}
        </View>

        <TouchableOpacity onPress={onClickOption}>
          <View>
            <SimpleLineIcons name="list" size={18} color="#808080" />
          </View>
        </TouchableOpacity>
      </View>
      <BarChart
        trigger={trigger}
        page={page}
        data={data}
        selected={{ sel, setSel }}
      />
    </>
  );
};

export default DateList;
