export const getUserInfo_api = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      name: "wx",
      adv: "https://img0.baidu.com/it/u=3722435661,1371811440&fm=253&fmt=auto&app=138&f=JPEG?w=571&h=500",
      token: "14433=="
    }), 500);
  });
};