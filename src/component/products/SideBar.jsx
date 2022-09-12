import { Box, Input, Text, Flex,Button } from "@chakra-ui/react";
import { useEffect, useState ,useRef} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {useDispatch} from "react-redux"
export const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams([]);
  const inititalCategoryParams = searchParams.getAll("color");
  const inititalFilterParams = searchParams.get("category");
  const initialSortParams = searchParams.get("sort");
  const [category, setCategory] = useState(inititalCategoryParams || []);
  const [filter, setFilter] = useState(inititalFilterParams || "");
  const [sort,setSort] = useState(initialSortParams || "");
  const [reset,setReset] = useState(true);
  const dispatch = useDispatch();
  

  const handleCheckBoxes = (e) => {
    let { value } = e.target;
    const allCategory = [...category];
    if (category.includes(value)) {
      allCategory.splice(allCategory.indexOf(value), 1);
    } else {
      allCategory.push(value);
    }
    setCategory([...allCategory]);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleSort = (e)=>{
    setSort(e.target.value)
  }

  const handleReset = ()=>{
   setFilter("")
   setCategory([])
   setSort("")
  }

  useEffect(() => {
    if (category || filter || sort) {
        const params = {};
        category && (params.color = category);
        filter && (params.category = filter);
        sort && (params.sort = sort);
        setSearchParams(params);
    }
  }, [searchParams, category, filter,sort,reset]);

  return (
    <Box w={"200px"} mt={"30px"} pt={"30px"} border={"1px solid gray"}>
      <Box m={"auto"} width={"80%"}>
        <Text fontWeight={600} fontSize={"20px"}>
          Category
        </Text>
        <Flex
          w={"100%"}
          justifyContent="space-between"
          gap={"10px"}
          align={"center"}
        >
          <label>Men's</label>
          <input
            defaultChecked={filter == "men's clothing"}
            onChange={handleFilter}
            value={"men's clothing"}
            name="category"
            type="radio"
          />
          {console.log("filter",filter)}
        </Flex>

        <Flex
          w={"100%"}
          gap={"10px"}
          justifyContent="space-between"
          align={"center"}
        >
          <label>Women's</label>
          <input
            defaultChecked={filter == "women's clothing"}
            onChange={handleFilter}
            value={"women's clothing"}
            name="category"
            type="radio"
          />
        </Flex>

        <Flex
          w={"100%"}
          gap={"10px"}
          justifyContent="space-between"
          align={"center"}
        >
          <label>Electronics</label>
          <input
            defaultChecked={filter == "electronics"}
            onChange={handleFilter}
            value={"electronics"}
            name="category"
            type="radio"
          />
        </Flex>
      </Box>
      <Box m={" 50px auto"} width={"80%"}>
        <Text fontWeight={600} fontSize={"20px"}>
          Price
        </Text>
        <Flex
          w={"100%"}
          justifyContent="space-between"
          gap={"10px"}
          align={"center"}
        >
          <label>Ascending</label>
          <input  value="asc" defaultChecked={sort == "asc"} onChange={handleSort} name="price" type="radio" />
        </Flex>

        <Flex
          w={"100%"}
          gap={"10px"}
          justifyContent="space-between"
          align={"center"}
        >
          <label>Descending</label>
          <input  value={"desc"} defaultChecked={sort == "desc"} onChange={handleSort} name="price" type="radio" />
        </Flex>
      </Box>

      <Box m={" 50px auto"} width={"80%"}>
        <Text fontWeight={600} fontSize={"20px"}>
          Color
        </Text>
        <Flex
          w={"100%"}
          justifyContent="space-between"
          gap={"10px"}
          align={"center"}
        >
          <label>white</label>
          <input
            defaultChecked={category.includes("white")}
            value={"white"}
            onClick={handleCheckBoxes}
            type="checkbox"
          />
        </Flex>

        <Flex
          w={"100%"}
          gap={"10px"}
          justifyContent="space-between"
          align={"center"}
        >
          <label>Blue</label>
          <input
            defaultChecked={category.includes("blue")}
            value={"blue"}
            onClick={handleCheckBoxes}
            type="checkbox"
          />
        </Flex>

        <Flex
          w={"100%"}
          gap={"10px"}
          justifyContent="space-between"
          align={"center"}
        >
          <label>Red</label>
          <input
            defaultChecked={category.includes("red")}
            value={"red"}
            onClick={handleCheckBoxes}
            type="checkbox"
          />
        </Flex>

        <Flex
          w={"100%"}
          gap={"10px"}
          justifyContent="space-between"
          align={"center"}
        >
          <label>Purple</label>
          <input
            defaultChecked={category.includes("purple")}
            value={"purple"}
            onClick={handleCheckBoxes}
            type="checkbox"
          />
        </Flex>

        <Flex
          w={"100%"}
          gap={"10px"}
          justifyContent="space-between"
          align={"center"}
        >
          <label>Black</label>
          <input
            defaultChecked={category.includes("black")}
            value={"black"}
            onClick={handleCheckBoxes}
            type="checkbox"
          />
        </Flex>

        <Flex
          w={"100%"}
          gap={"10px"}
          justifyContent="space-between"
          align={"center"}
        >
          <label>Brown</label>
          <input
            defaultChecked={category.includes("brown")}
            value={"brown"}
            onClick={handleCheckBoxes}
            type="checkbox"
          />
        </Flex>
      </Box>
      <Button onClick={handleReset} colorScheme={"facebook"} mb="10px" width={"80%"} ml={"10%"} >Reset All</Button>
    </Box>
  );
};
