import api from "@/lib/api";
import menuList from "@/config/menu.config";

export const getMenu_api = async () => {
  try {
    let res = await api.get("/menu.json");
    return res;
  } catch (err) {
    return menuList;
  }
};