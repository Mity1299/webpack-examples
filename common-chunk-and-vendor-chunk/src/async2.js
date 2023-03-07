import utility1 from "./utility1";

export default () => {
  //懒加载
  import("./async1");
  import("./async2");

  console.log("async1");
};
