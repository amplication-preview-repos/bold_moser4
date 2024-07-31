import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SubCategoryWhereInput = {
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
