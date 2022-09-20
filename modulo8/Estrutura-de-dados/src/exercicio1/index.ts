
import { LinkedList, NodeItem } from "./ListNode";

const node = new NodeItem("vinicius");
const list = new LinkedList(node)

list.add("vitor");
list.add("rosivaldo");
list.add("simone");
console.log(list);
console.log(list.find("rosivaldo"))