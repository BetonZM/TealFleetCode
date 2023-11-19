// React components
import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Chakra-UI components
import { Flex, Text, HStack } from "@chakra-ui/react";

function HeaderSubNav({ link }) {
  const fetchData = async () => {
    const data = await fetch(
      `http://localhost:3000/navigation/sub/name/${link}`
    );
    return { data: await data.json() };
  };

  const fetchSubNavItems = async () => {
    const items = await fetchData();
    return items.data;
  };

  const [subNavItems, setSubNavItems] = useState([]);

  useEffect(() => {
    fetchSubNavItems().then((items) => {
      setSubNavItems(items);
    });
  }, [link]);

  return (
    <Flex>
      <HStack
        spacing={{
          base: "0.3em",
          sm: "0.6em",
          md: "0.8em",
          lg: "1.0em",
          xl: "1.8em",
        }}
      >
        {subNavItems &&
          subNavItems.map &&
          subNavItems.map((subNavItems, index) => (
            <Text
              color="blackAlpha.700"
              fontSize={{ base: "sm", sm: "sm", md: "lg" }}
              key={subNavItems.sub_nav_id}
              fontWeight={
                location.pathname === subNavItems.sub_nav_path
                  ? "bold"
                  : "normal"
              }
            >
              <NavLink to={subNavItems.sub_nav_path}>
                {subNavItems.sub_nav_item}
              </NavLink>
            </Text>
          ))}
      </HStack>
    </Flex>
  );
}

export default HeaderSubNav;
